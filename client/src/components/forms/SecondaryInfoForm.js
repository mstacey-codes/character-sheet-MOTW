import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import MovesForm from "./MovesForm";

const ClassInfoForm = (props) => {
  const characterId = props.match.params.charId;

  const [characterData, setCharacterData] = useState({
    name: "",
    stats: {},
    hunterIndex: "",
    hunterType: "",
  });

  const [formOptions, setFormOptions] = useState({
    moves: null,
    gear: null,
  });

  const [movesData, setMovesData] = useState([]);

  const [redirect, setRedirect] = useState({
    shouldRedirect: false,
    destination: `/character-sheet/${characterId}`,
  });

  const getCharacterAndFormOptions = async () => {
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
        stats: body.character.stats,
        hunterIndex: body.character.hunterIndex,
        hunterType: body.character.hunterType,
      });
      const motwApiResponse = await fetch(`/api/v1/hunters/${body.character.hunterIndex}`);
      if (!motwApiResponse.ok) {
        const errorMessage = `${motwApiResponse.status} (${motwApiResponse.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const motwApiBody = await motwApiResponse.json();
      setFormOptions({ ...formOptions, moves: motwApiBody.moves, gear: motwApiBody.gear });
      if (motwApiBody.moves.required_move_slots > 0) {
        const requiredMoves = motwApiBody.moves.required_moves.reduce(
          (accumulator, currentMove) => {
            const formattedMoveName = currentMove.name.replace(/\W/g, "");
            const moveId = body.character.hunterIndex + formattedMoveName;
            accumulator.push(moveId);
            return accumulator;
          },
          []
        );
        setMovesData(requiredMoves);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCharacterAndFormOptions();
  }, []);

  if (!formOptions.moves || !formOptions.gear) {
    return <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />;
  }

  const handleInputChangeMoves = (event) => {
    let newMoves = [...movesData];
    if (newMoves.includes(event.currentTarget.id)) {
      let moveIndex = newMoves.indexOf(event.currentTarget.id);
      newMoves.splice(moveIndex, 1);
      setMovesData(newMoves);
    } else if (
      movesData.length >=
      formOptions.moves.optional_move_slots + formOptions.moves.required_move_slots
    ) {
      return null;
    } else {
      setMovesData([...movesData, event.currentTarget.id]);
    }
  };

  let addMoreMoves = <h4>Please add more moves</h4>;
  if (
    movesData.length ===
    formOptions.moves.optional_move_slots + formOptions.moves.required_move_slots
  ) {
    addMoreMoves = (
      <h4>You have added the maximum number of moves; please uncheck some to add more.</h4>
    );
  }

  const postMoves = async (newMovesData) => {
    try {
      const response = await fetch(`/api/v1/characters/${characterId}/moves`, {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ moves: newMovesData }),
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
        setRedirect({ ...redirect, shouldRedirect: true });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      movesData.length <
      formOptions.moves.optional_move_slots + formOptions.moves.required_move_slots
    ) {
      alert("You must add the correct amount of moves");
    }
    postMoves(movesData);
  };

  if (redirect.shouldRedirect) {
    return <Redirect push to={redirect.destination} />;
  }

  return (
    <>
      <div className="basic-margins clean-box">
        <div className="clean-box">
          <h1>
            I am {characterData.name}, {characterData.hunterType}
          </h1>
          As a reminder, {characterData.name} has the following stats: Charm:{" "}
          {characterData.stats.charm} | Cool: {characterData.stats.cool} | Sharp:{" "}
          {characterData.stats.sharp} | Tough:
          {characterData.stats.tough} | Weird: {characterData.stats.weird} |
          <div>
            <form onSubmit={handleSubmit}>
              <MovesForm
                moves={formOptions.moves}
                hunterIndex={characterData.hunterIndex}
                handleInputChangeMoves={handleInputChangeMoves}
                movesData={movesData}
              />
              {addMoreMoves}
              <div className="center">
                <input className="button" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassInfoForm;
