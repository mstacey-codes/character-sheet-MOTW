import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import StatsList from "./StatsList.js";
import MovesList from "./MovesList.js";
import LookList from "./LookList.js";
import BasicMoveList from "./BasicMovesList.js";
import ButtonInformation from "../../constants/ButtonInformation.json";
import StatChangeButton from "./StatButton.js";

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
  if (characterData.moves.length === 0 && characterData.userId === currentUser.id) {
    linkToMoveForm = <Link to={`/new-character/${characterId}`}>Fill out your moves</Link>;
  }

  const modifyStats = async (statType, currentStat, action) => {
    // let change;
    // if (action === "increment") {
    //   change = 1;
    // } else {
    //   change = -1;
    // }
    // const newValue = currentStat + change;
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
        // body: JSON.stringify({ [statType]: newValue }),
        body: JSON.stringify({ modifyStatsData }),
      });
      if (!response.ok) {
        setErrors([]);
      } else {
        const body = await response.json();
        console.log(body);
        setCharacterData({ ...characterData, stats: body.character.stats });
      }
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  const onSubmitHandler = (event, relevantStat, action) => {
    event.preventDefault();
    console.log("submit", relevantStat, action);
    modifyStats(relevantStat, characterData.stats[relevantStat], action);
  };

  const allButtons = ButtonInformation.buttonInfo.map((button) => {
    if (button.id === 3 && characterData.stats.harm === 0) {
      return null;
    } else {
      return (
        <StatChangeButton
          key={button.id}
          text={button.text}
          relevantStat={button.relevantStat}
          action={button.action}
          onSubmit={(e) => onSubmitHandler(e, button.relevantStat, button.action)}
        />
      );
    }
  });

  let statChangeButtons;
  if (characterData.userId === currentUser.id) {
    statChangeButtons = allButtons;
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
              <div className="center">{statChangeButtons}</div>
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
