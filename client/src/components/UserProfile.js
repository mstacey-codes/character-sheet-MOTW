import React, { useEffect, useState } from "react";
import CharactersList from "./CharactersList.js";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  user = user;
  if (!user) {
    return null;
  }

  const [characters, setCharacters] = useState(null);

  const getCharacters = async () => {
    try {
      const response = await fetch(`/api/v1/users/${user.id}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      if (body.user.characters.length === 0) {
        setCharacters([]);
      } else {
        const allCharacters = body.user.characters.reduce((memo, current) => {
          if (!memo[current.status]) {
            return { ...memo, [current.status]: [current] };
          } else {
            memo[current.status].push(current);
            return memo;
          }
        }, {});
        setCharacters(allCharacters);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  if (!characters) {
    return null;
  }

  let ifNoUserCharacters;
  if (characters.alive.length === 0 || characters.length === 0) {
    ifNoUserCharacters = <h2>"You have no active characters"</h2>;
  }

  return (
    <>
      <div className="basic-margins">
        <div className="clean-box">
          <div className="clean-box">
            <h1>Welcome {user.email}</h1>
            {ifNoUserCharacters}

            <div>
              <CharactersList characters={characters} />
            </div>
            <div>
              <Link to="/new-character">
                <h2 className="flavor">Create a New Character</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
