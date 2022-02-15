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

  return (
    <div>
      <h1>Welcome {user.email}</h1>
      {allUserCharacters}
    </div>
  );
};

export default UserProfile;
