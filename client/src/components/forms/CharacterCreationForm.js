import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "../layout/ErrorList";
import translateServerErrors from "../../services/translateServerErrors";

import LookForm from "./LookForm";
import RatingForm from "./RatingForm";
import ClassTile from "./ClassTile";

const CharacterCreationForm = ({ user }) => {
  if (!user) {
    return null;
  }

  const [redirect, setRedirect] = useState({
    shouldRedirect: false,
    charId: "",
  });

  const [hunterData, setHunterData] = useState([]);

  const [errors, setErrors] = useState({});

  const [formOptions, setFormOptions] = useState({
    look: null,
    ratings: null,
  });

  const [characterData, setCharacterData] = useState({
    userId: user.id,
    name: "",
    hunterIndex: "",
    aura: "",
    body: "",
    clothes: "",
    eyes: "",
    face: "",
    rating: {},
  });

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
      const randomInt = Math.floor(Math.random() * 13);
      setCharacterData({ ...characterData, hunterIndex: body.hunters[randomInt].index });
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

  const allClasses = hunterData.map((hunter) => {
    let selected = "";
    if (characterData.hunterIndex === hunter.index) {
      selected = "selected";
    }
    const hunterIndexClickHandler = (event) => {
      setCharacterData({
        ...characterData,
        hunterIndex: hunter.index,
        aura: "",
        body: "",
        clothes: "",
        eyes: "",
        face: "",
        rating: {},
      });
    };

    return (
      <ClassTile
        key={hunter.id}
        id={hunter.id}
        index={hunter.index}
        hunter={hunter}
        hunterIndexClickHandler={hunterIndexClickHandler}
        selected={selected}
      />
    );
  });

  const getFormOptions = async (thisHunterIndex) => {
    try {
      const response = await fetch(`/api/v1/hunters/${thisHunterIndex}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setFormOptions({
        ...formOptions,
        look: body.look,
        ratings: body.ratings,
      });
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getFormOptions(characterData.hunterIndex);
  }, [characterData.hunterIndex]);

  if (characterData.hunterIndex === "") {
    return null;
  }

  const chosenHunter = hunterData.find((hunterElement) => {
    return hunterElement.index === characterData.hunterIndex;
  });

  const handleInputChange = (event) => {
    event.currentTarget.checked = "true";
    setCharacterData({ ...characterData, [event.currentTarget.name]: event.currentTarget.value });
  };

  const handleInputChangeRating = (event) => {
    setCharacterData({
      ...characterData,
      [event.currentTarget.name]: JSON.parse(event.currentTarget.value),
    });
  };

  if (!formOptions.look || !formOptions.ratings) {
    return <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />;
  }

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
        });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postCharacter(characterData);
  };

  if (redirect.shouldRedirect) {
    return <Redirect push to={`/new-character/${redirect.charId}`} />;
  }

  return (
    <>
      <div className="clean-box">
        <form onSubmit={handleSubmit}>
          <h1>Create a new character: </h1>
          <div className="clean-box">
            <h4>What is your character's name?</h4>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={characterData.name}
              className="small-input"
            />
          </div>
          <div className="clean-box">
            <h4>Choose one of the following</h4>
            <div className="grid-column-4">{allClasses}</div>
            <div className="grid-column-2">
              <div>
                <strong>Someone might introduce the {chosenHunter.name} as...</strong>
                <h6>{chosenHunter.description}</h6>
              </div>
              <div>
                <strong>{chosenHunter.name} might say ...</strong>
                <h6>{chosenHunter.flavor}</h6>
              </div>
            </div>
          </div>
          <h1>Fill out more information about your character:</h1>
          <div className="clean-box">
            <LookForm
              look={formOptions.look}
              handleInputChangeLook={handleInputChange}
              lookState={[
                characterData.aura,
                characterData.body,
                characterData.clothes,
                characterData.eyes,
                characterData.face,
              ]}
            />
          </div>
          <br />
          <div className="clean-box">
            <RatingForm
              ratings={formOptions.ratings}
              ratingState={characterData.rating}
              handleInputChangeRating={handleInputChangeRating}
            />
          </div>
          <div>
            <ErrorList errors={errors} />
            <input className="button center" type="submit" value={`Create ${characterData.name}`} />
          </div>
        </form>
      </div>
    </>
  );
};

export default CharacterCreationForm;
