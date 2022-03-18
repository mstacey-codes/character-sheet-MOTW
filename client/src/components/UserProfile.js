import React, { useEffect, useState } from "react";
import CharacterTile from "./CharacterTile.js";
import { Link } from "react-router-dom";

const UserProfile = ({ user }) => {
  user = user;
  if (!user) {
    return null;
  }

  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await fetch(`/api/v1/users/${user.id}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setCharacters(body.user.characters);
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };
  useEffect(() => {
    getCharacters();
  }, []);

  let allUserCharacters;
  if (!characters[0]) {
    allUserCharacters = "You have not created any characters yet. Create your new character.";
  } else {
    allUserCharacters = characters.map((character) => {
      return <CharacterTile key={character.id} {...character} />;
    });
  }

  const allCharacters = characters.reduce((memo, current) => {
    if (!memo[current.status]) {
      return { ...memo, [current.status]: [current] };
    } else {
      memo[current.status].push(current);
      return memo;
    }
  }, {});

  const characterDisplay = () => {
    if (!characters[0]) {
      return <h2>Create a new character to start the hunt.</h2>;
    }
    const allCharactersByStatus = characters.reduce((memo, current) => {
      if (!memo[current.status]) {
        return { ...memo, [current.status]: [current] };
      } else {
        memo[current.status].push(current);
        return memo;
      }
    }, {});
    let dividedCharacterDisplay;
    const aliveCharactersOkay = allCharactersByStatus.alive.map((character) => {
      return <CharacterTile key={character.id} {...character} />;
    });
    // if (allCharactersByStatus.alive) {
    //   const aliveCharacters = allCharactersByStatus.alive.map((character) => {
    //     return <CharacterTile key={character.id} {...character} />;
    //   });
    //   dividedCharacterDisplay += (
    //     <div>
    //       <h2>Active Hunters</h2>
    //       <div className="grid-column-4">{aliveCharacters}</div>
    //     </div>
    //   );
    // }
    // if (allCharactersByStatus.deceased) {
    //   const deceasedCharacters = allCharactersByStatus.deceased.map((character) => {
    //     return <CharacterTile key={character.id} {...character} />;
    //   });
    //   // dividedCharacterDisplay += (
    //   //   <div>
    //   //     <h2>The Graveyard</h2>
    //   //     <div className="grid-column-4">{deceasedCharacters}</div>
    //   //   </div>
    //   // );
    // }
    return (
      <div>
        <h2>Active Hunters:</h2>
        <div className="grid-column-4">{aliveCharactersOkay}</div>
      </div>
    );
  };

  console.log(allCharacters);

  return (
    <>
      <div className="basic-margins">
        <div className="clean-box">
          <div className="clean-box">
            <h1>Welcome {user.email}</h1>
            {characterDisplay()}
            {/* <div className="grid-column-4">{allUserCharacters}</div> */}

            <br />
            <br />
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
