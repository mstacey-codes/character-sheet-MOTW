import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

const CharacterCreationForm = ({ user }) => {
  if (!user) {
    return null;
  }

  const [redirect, setRedirect] = useState({
    shouldRedirect: false,
    charId: "",
    hunter: "",
  });

  const [characterData, setCharacterData] = useState({
    userId: user.id,
    name: "",
    hunterIndex: "",
  });
  const [hunterData, setHunterData] = useState([]);
  const [errors, setErrors] = useState({});

  const getHunters = async () => {
    try {
      const response = await fetch("/api/v1/hunters");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setHunterData(body.hunters);
      setCharacterData({ ...characterData, hunterIndex: body.hunters[0].index });
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getHunters();
  }, []);

  if (!hunterData) {
    return null;
  }

  if (characterData.hunterIndex === "") {
    return null;
  }
  const chosenHunter = hunterData.find((element) => {
    return element.index === characterData.hunterIndex;
  });

  const postCharacter = async (newCharacterData) => {
    try {
      const response = await fetch("/api/v1/characters", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(newCharacterData),
      });
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        const body = await response.json();
        setErrors([]);
        setRedirect({
          ...redirect,
          shouldRedirect: true,
          charId: body.character.id,
          hunter: body.character.hunterIndex,
        });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const dropDown = hunterData.map((hunter) => (
    <option key={hunter.id} value={hunter.index}>
      {hunter.name}
    </option>
  ));

  const handleInputChange = (event) => {
    setCharacterData({ ...characterData, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCharacter(characterData);
  };

  if (redirect.shouldRedirect) {
    return <Redirect push to={`/new-character/${redirect.charId}/${redirect.hunter}`} />;
  }

  return (
    <>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <h3>Create a character: </h3>
        <label>
          What is your character's name?
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            value={characterData.name}
          />
        </label>
        <label htmlFor="hunterIndex">
          What type of hunter is your character?
          <select
            id="hunterIndex"
            name="hunterIndex"
            onChange={handleInputChange}
            preview="Select a character"
            value={characterData.hunterIndex}
          >
            {dropDown}
          </select>
          <div>
            <h3>{chosenHunter.description}</h3>
            <h3>{chosenHunter.flavor}</h3>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </label>
      </form>
    </>
  );
};

export default CharacterCreationForm;
