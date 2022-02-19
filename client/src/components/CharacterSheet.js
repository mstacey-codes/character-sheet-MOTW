import React from "react";
import DiceBox from "./DiceBox.js";
import StatsList from "./StatsList.js";

const CharacterSheet = (props) => {
  return (
    <>
      <h1>Your name here</h1>
      <h3>Your look here</h3>
      <h3>Your unique stuff here</h3>
      <h2> Your stats here</h2>
      <StatsList />
      <DiceBox />
    </>
  );
};

export default CharacterSheet;
