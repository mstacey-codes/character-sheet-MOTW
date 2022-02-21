import React, { useState, useEffect } from "react";

import MovesForm from "../MovesForm";

const flakeInfoForm = (props) => {
  const characterId = props.match.params.charId;

  const [characterData, setCharacterData] = useState({
    name: "",
    stats: {},
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
        stats: body.character.stats,
      });
      return body.character.hunterIndex;
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  const getFlakeFormOptions = async () => {
    try {
      const response = await fetch("/api/v1/hunters/flake");
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setFormOptions({ ...formOptions, moves: body.moves, weapons: body.weapons });
      if (body.moves.required_move_slots > 0) {
        const requiredMoves = body.moves.required_moves.reduce((accumulator, current) => {
          accumulator.push(current.name);
          return accumulator;
        }, []);
        setMoves(requiredMoves);
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getFlakeFormOptions();
  }, []);

  //POST will Post to a characterFlakeRouter
  //Post requests wil allow posts to a *hunter*s table that will collect all the class specific information for that class - i.e. The Initiate will have spots for sect's good traditions and bad traditions with a characterId as the foreign key, Spooky will have their Dark-Side tags
  //Post requests will allow posts to a moves table that will collect all selected moves regardless of hunter

  const [formOptions, setFormOptions] = useState({
    weapons: null,
    moves: null,
  });

  const [movesData, setMovesData] = useState([]);

  if (!formOptions.moves) {
    return <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" />;
  }

  let cannotAddMoreMoves;
  const handleInputChangeMoves = (event) => {
    let newMoves = [...movesData];
    debugger;
    if (newMoves.includes(event.currentTarget.name)) {
      let moveIndex = newMoves.indexOf(event.currentTarget.name);
      newMoves.splice(moveIndex, 1);
      return setMovesData(newMoves);
    } else if (movesData.length >= formOptions.moves.optional_move_slots) {
      cannotAddMoreMoves = "You need to check yourself";
      console.log(cannotAddMoreMoves);
      return cannotAddMoreMoves;
    } else {
      return setMovesData([...movesData, event.currentTarget.name]);
    }
  };

  return (
    <>
      <h2>I'm {characterData.name} and I am a flake</h2>
      As a reminder, {characterData.name} has the following stats: Charm:{characterData.stats.charm}
      | Cool: {characterData.stats.cool} | Sharp: {characterData.stats.sharp} | Tough:
      {characterData.stats.tough} | Weird: {characterData.stats.weird} |
      <div>
        <MovesForm
          moves={formOptions.moves}
          handleInputChangeMoves={handleInputChangeMoves}
          cannotAddMoreMoves={cannotAddMoreMoves}
        />
      </div>
    </>
  );
};

export default flakeInfoForm;
