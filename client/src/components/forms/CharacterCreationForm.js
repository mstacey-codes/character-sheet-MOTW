import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ErrorList from "../layout/ErrorList";
import translateServerErrors from "../../services/translateServerErrors";

// import AddCharacterInfoForm from "./AddCharacterInfoForm.js";
import LookForm from "./LookForm";
import RatingForm from "./RatingForm";
import ClassTile from "./ClassTile";
import MovesForm from "./MovesForm";

const CharacterCreationForm = ({ user }) => {
  if (!user) {
    return null;
  }

  const [redirect, setRedirect] = useState({
    shouldRedirect: false,
    charId: "",
    hunter: "",
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

  const [moves, setMoves] = useState([]);

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
      console.log(true);
      selected = "selected";
    }
    const hunterIndexClickHandler = (event) => {
      console.log(event.currentTarget.value);
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

  // const [formOptions, setFormOptions] = useState({
  //   look: null,
  //   ratings: null,
  // });

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
        //  moves: body.moves
      });
      // if (body.moves.required_move_slots > 0) {
      //   const requiredMoves = body.moves.required_moves.reduce((accumulator, current) => {
      //     accumulator.push(current.name);
      //     return accumulator;
      //   }, []);
      //   setMoves(requiredMoves);
      // }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getFormOptions(characterData.hunterIndex);
  }, [characterData.hunterIndex]);
  ///
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

  const handleInputChangeMoves = (event) => {
    setMovesData([...movesData, event.currentTarget.name]);
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
          hunter: body.character.hunterIndex,
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
    return <Redirect push to={`/new-character/${redirect.charId}/${redirect.hunter}`} />;
  }

  return (
    <>
      <ErrorList errors={errors} />
      <form onSubmit={handleSubmit}>
        <h3>Create a new character: </h3>
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
        Choose one of the following
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
        <h1>Fill out more information about your character:</h1>
        <div>
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
        <div>
          <RatingForm
            ratings={formOptions.ratings}
            handleInputChangeRating={handleInputChangeRating}
          />
        </div>
        {/* <div>
          <MovesForm moves={formOptions.moves} handleInputChangeMoves={handleInputChangeMoves} />
        </div> */}
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </>
  );
};

export default CharacterCreationForm;
