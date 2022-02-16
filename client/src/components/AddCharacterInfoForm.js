import React, { useState, useEffect } from "react";
import ErrorList from "./layout/ErrorList";
import translateServerErrors from "../services/translateServerErrors";

import RatingForm from "./RatingForm";
import LookForm from "./LookForm";

// take in hunterIndex, characterId, and name as props
const AddCharacterInfoForm = (props) => {
  const fakePropsHunterIndex = "monstrous";

  const [formOptions, setFormOptions] = useState({
    look: null,
    ratings: null,
  });

  const getFormOptions = async (hunterIndex) => {
    try {
      const response = await fetch(`/api/v1/hunters/${hunterIndex}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      console.log("happy");
      const body = await response.json();
      console.log(body);
      setFormOptions({ ...formOptions, look: body.look, ratings: body.ratings });
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getFormOptions(fakePropsHunterIndex);
  }, []);

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

  //   post request (lookData, ratingsData)
  return (
    <>
      <div>
        <LookForm look={formOptions.look} handleInputChangeLook={handleInputChangeLook} />
      </div>
      <div>
        <RatingForm
          ratings={formOptions.ratings}
          handleInputChangeRating={handleInputChangeRating}
        />
        {/* <WeaponForm /> */}
      </div>
    </>
  );
};

export default AddCharacterInfoForm;
