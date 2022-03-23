import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import StatsList from "./StatsList.js";
import MovesList from "./MovesList.js";
import LookList from "./LookList.js";
import BasicMoveList from "./BasicMovesList.js";
import IncrementerList from "./IncrementerList.js";

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

  if (
    !characterData.look ||
    !characterData.stats ||
    !characterData.moves ||
    !characterData.status
  ) {
    return null;
  }

  let aliveOrDead;
  if (characterData.status === "deceased") {
    aliveOrDead = { textDecoration: "line-through" };
  }
  // let classTraits;
  // if (characterData.classTraits.mission) {
  //   classTraits = <>The Chosen has a mission: {characterData.classTraits.mission}</>;
  // }

  //Basic Moves
  let basicMoves;
  if (characterData.userId === currentUser.id && characterData.status !== "deceased") {
    basicMoves = <BasicMoveList stats={characterData.stats} />;
  } else if (characterData.status === "deceased") {
    basicMoves = <p>This character is deceased and can no longer be modified</p>;
  } else {
    basicMoves = (
      <p>
        For the protection of all characters, only the user associated with a character may play as
        them.
      </p>
    );
  }

  let linkToMoveForm;
  if (
    characterData.moves.length === 0 &&
    characterData.userId === currentUser.id &&
    characterData.status !== "deceased"
  ) {
    linkToMoveForm = <Link to={`/new-character/${characterId}`}>Fill out your moves</Link>;
  }

  const modifyStats = async (statType, currentStat, action) => {
    const modifyStatsData = {
      stat: statType,
      currentStat: currentStat,
      action: action,
    };
    try {
      const response = await fetch(`/api/v1/characters/${characterId}`, {
        method: "PATCH",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ modifyStatsData }),
      });
      if (!response.ok) {
        setErrors([]);
      } else {
        const body = await response.json();
        setCharacterData({ ...characterData, stats: body.character.stats });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const onChangeStatsSubmitHandler = (event, relevantStat, action) => {
    event.preventDefault();
    modifyStats(relevantStat, characterData.stats[relevantStat], action);
  };

  const changeCharacterStatus = async () => {
    const changeCharacterStatus = {
      status: "deceased",
    };
    try {
      const response = await fetch(`/api/v1/characters/${characterId}`, {
        method: "PATCH",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify({ changeCharacterStatus }),
      });
      if (!response.ok) {
        setErrors([]);
      } else {
        const body = await response.json();
        setCharacterData({ ...characterData, status: body.character.status });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const onKillCharacterSubmitHandler = (event) => {
    event.preventDefault();
    changeCharacterStatus();
  };

  return (
    <>
      <div className="table-top">
        <br />
        <br />
        <div className="character-sheet basic-margins">
          <br />
          <h1 style={aliveOrDead}>
            {characterData.name} {characterData.hunterType}
          </h1>
          <br />
          <LookList look={characterData.look} />

          <div className="grid-column-3-character">
            <div className="column">
              <h4 className="flavor">Stats</h4>
              <StatsList stats={characterData.stats} />
              <div className="center">
                <IncrementerList
                  characterData={characterData}
                  onChangeStatsSubmitHandler={onChangeStatsSubmitHandler}
                  onKillCharacterSubmitHandler={onKillCharacterSubmitHandler}
                />
              </div>
            </div>
            <div className="column">
              <div>
                <h4 className="flavor">General Moves</h4>
                {basicMoves}
              </div>
            </div>
            <div className="column">
              <div>
                <h4 className="flavor">Character Moves</h4>
                <MovesList moves={characterData.moves} />
                {linkToMoveForm}
              </div>
              {/* <div>
                <h4>Gear</h4>
                <br />
              </div>
              <div>
                <h4>Extra Character Information</h4>
                <br />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRouter(CharacterSheet);
