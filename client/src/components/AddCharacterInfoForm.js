import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

import RatingForm from "./RatingForm";
import LookForm from "./LookForm";

// take in hunterIndex, characterId, and name as props
const AddCharacterInfoForm = (props) => {
  const characterId = props.match.params.charId;
  const hunterIndex = props.match.params.hunterIndex;

  const [errors, setErrors] = useState([]);

  const [characterData, setCharacterData] = useState({
    name: "",
  });

  const getCharacter = async () => {
    try {
      const response = await fetch(`/api/v1/characters/${characterId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setCharacterData({
        ...characterData,
        name: body.character.name,
        hunterIndex: body.character.hunterIndex,
      });
      return body.character.hunterIndex;
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getFormOptions = async (hunterIndex) => {
    try {
      const response = await fetch(`/api/v1/hunters/${hunterIndex}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setFormOptions({ ...formOptions, look: body.look, ratings: body.ratings });
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getFormOptions(hunterIndex);
  }, []);

  const [formOptions, setFormOptions] = useState({
    look: null,
    ratings: null,
  });

  const [lookData, setLookData] = useState({
    aura: null,
    body: null,
    clothes: null,
    eyes: null,
    face: null,
  });

  const handleInputChangeLook = (event) => {
    setLookData({ ...lookData, [event.currentTarget.name]: event.currentTarget.value });
  };

  const [ratingsData, setRatingsData] = useState({});

  const handleInputChangeRating = (event) => {
    setRatingsData(JSON.parse(event.currentTarget.value));
  };

  if (!formOptions.ratings || !formOptions.ratings) {
    return null;
  }

  const postCharacter = async (stats, look) => {
    const allCharacterData = { stats: stats, look: look };
    try {
      const response = await fetch(`/api/v1/characters/${characterId}/info`, {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(allCharacterData),
      });
      debugger;

      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json();
          debugger;
          const newErrors = translateServerErrors(body.errors);
          return setErrors(newErrors);
        } else {
          debugger;
          const errorMessage = `${response.status} (${response.statusText})`;
          const error = new Error(errorMessage);
          throw error;
        }
      } else {
        debugger;
        const body = await response.json();
      }
    } catch (error) {
      debugger;
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    postCharacter(ratingsData, lookData);
  };

  return (
    <>
      <h1>Fill out more information about {characterData.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <LookForm look={formOptions.look} handleInputChangeLook={handleInputChangeLook} />
        </div>
        <div>
          <RatingForm
            ratings={formOptions.ratings}
            handleInputChangeRating={handleInputChangeRating}
          />
        </div>
        <div className="button">
          <input className="button" type="submit" value="Submit" />

          <ErrorList errors={errors} />
        </div>
      </form>
    </>
  );
};

export default withRouter(AddCharacterInfoForm);
