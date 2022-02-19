import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

import AddCharacterInfoForm from "./AddCharacterInfoForm";
import ClassTile from "./ClassTile";

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

  ///
  // if (selectedClassId !== null) {
  //   const foundElement = classDescriptions.find(
  //     (element) => element.id === selectedClassId
  //   );
  //   descriptionText = foundElement.description;
  //   image = foundElement.image;
  //   flavor = foundElement.flavor;
  // }

  const allClasses = hunterData.map((hunter) => {
    let selected = "";
    if (characterData.hunterIndex === hunter.index) {
      console.log(true);
      selected = "selected";
    }
    const hunterIndexClickHandler = (event) => {
      console.log(event.currentTarget.value);
      setCharacterData({ ...characterData, hunterIndex: hunter.index });
    };

    return (
      <ClassTile
        key={hunter.id}
        id={hunter.id}
        // hunterIndex={hunter.index}
        // name="hunterIndex"
        // value={hunter.index}
        index={hunter.index}
        hunter={hunter}
        hunterIndexClickHandler={hunterIndexClickHandler}
        selected={selected}
      />
    );
  });

  ///
  if (characterData.hunterIndex === "") {
    return null;
  }
  const chosenHunter = hunterData.find((hunterElement) => {
    return hunterElement.index === characterData.hunterIndex;
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

  // const dropDown = hunterData.map((hunter) => (
  //   <option key={hunter.id} value={hunter.index}>
  //     {hunter.name}
  //   </option>
  // ));

  const handleInputChange = (event) => {
    setCharacterData({ ...characterData, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCharacter(characterData);
  };

  // if (redirect.shouldRedirect) {
  //   return <Redirect push to={`/new-character/${redirect.charId}/${redirect.hunter}`} />;
  // }

  return (
    <>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <h3>Create a {characterData.hunterIndex} character: </h3>{" "}
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
        {/* <label htmlFor="hunterIndex">
          What type of hunter is your character?
          <select
            id="hunterIndex"
            name="hunterIndex"
            onChange={handleInputChange}
            value={characterData.hunterIndex}
          >
            {dropDown}
          </select> */}{" "}
        {/* </label> */}
        {allClasses}
        <div>
          <h6>{chosenHunter.description}</h6>
          <h6>{chosenHunter.flavor}</h6>
        </div>
        <AddCharacterInfoForm hunterIndex={characterData.hunterIndex} name={characterData.name} />
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default CharacterCreationForm;
