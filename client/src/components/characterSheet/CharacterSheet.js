import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import StatsList from "./StatsList.js";
import MovesList from "./MovesList.js";
import LookList from "./LookList.js";
import BasicMoveList from "./BasicMovesList.js";

const CharacterSheet = (props) => {
  if (!props.user) {
    return null;
  }

  const currentUser = props.user;
  const characterId = props.match.params.charId;

  const [characterData, setCharacterData] = useState({});

  const getCharacter = async () => {
    try {
      const response = await fetch(`/api/v1/characters/${characterId}`);
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`;
        const error = new Error(errorMessage);
        throw error;
      }
      const body = await response.json();
      setCharacterData(body.character);
      return body.character.hunterIndex;
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  if (!characterData.look || !characterData.stats || !characterData.moves) {
    return null;
  }

  // let classTraits;
  // if (characterData.classTraits.mission) {
  //   classTraits = <>The Chosen has a mission: {characterData.classTraits.mission}</>;
  // }
  let basicMoves;
  if (characterData.userId === currentUser.id) {
    basicMoves = <BasicMoveList stats={characterData.stats} />;
  } else {
    basicMoves = (
      <p>
        For the protection of all characters, only the user associated with a character may play as
        them.
      </p>
    );
  }

  let linkToMoveForm;
  if (characterData.moves.length === 0) {
    linkToMoveForm = <Link to={`/new-character/${characterId}`}>Fill out your moves</Link>;
  }

  return (
    <>
      <div className="table-top">
        <br />
        <br />
        <div className="character-sheet basic-margins">
          <h1>
            {characterData.name} {characterData.hunterType}
          </h1>
          <br />
          <br />
          <LookList look={characterData.look} />

          <div className="grid-column-3-character">
            <div className="column">
              <h4 className="flavor">Stats</h4>
              <StatsList stats={characterData.stats} />
            </div>
            <div className="column">
              <div>
                <h4 className="flavor">General Moves</h4>
                {basicMoves}
                {/* <BasicMoveList stats={characterData.stats} /> */}
              </div>
            </div>
            <div className="column">
              <div>
                <h4 className="flavor">Character Moves</h4>
                <MovesList moves={characterData.moves} />
                {linkToMoveForm}
              </div>
              <div>
                <h4>Gear</h4>
                <br />
              </div>
              <div>
                <h4>Extra Character Information</h4>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CharacterSheet);
