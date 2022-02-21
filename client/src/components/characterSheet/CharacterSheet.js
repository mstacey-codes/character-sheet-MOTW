import React, { useState, useEffect } from "react";
import DiceBox from "./DiceBox.js";
import StatsList from "./StatsList.js";

const CharacterSheet = (props) => {
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
      // setCharacterData({
      //   ...characterData,
      //   name: body.character.name,
      //   stats: body.character.stats,
      // });
      return body.character.hunterIndex;
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`);
    }
  };

  useEffect(() => {
    getCharacter();
  }, []);

  if (!characterData.look || !characterData.stats || !characterData.classTraits) {
    return null;
  }

  const characterLook = Object.entries(characterData.look)
    .reduce((memo, look) => {
      console.log(memo);
      if (look[1] !== null) {
        memo.push(look[1]);
        return memo;
      } else {
        return memo;
      }
    }, [])
    .join(" + ");

  let classTraits;
  if (characterData.classTraits.mission) {
    classTraits = <>The Chosen has a mission: {characterData.classTraits.mission}</>;
  }

  return (
    <>
      <div>
        <h1>{characterData.name}</h1>
        <h2>{characterData.hunterType}</h2>
      </div>
      <div className="grid-column-3">
        <div>
          <p>{characterLook}</p>
          <p>{classTraits}</p>
        </div>
        <div>
          <h3>Stats</h3>
          <StatsList stats={characterData.stats} />
          <DiceBox />
        </div>
      </div>
    </>
  );
};

export default CharacterSheet;
