import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
  faStar,
  faHandPeace,
  faBrain,
  faDumbbell,
  faCrow,
} from "@fortawesome/free-solid-svg-icons";

const DiceBox = ({ result, clearResult }) => {
  if (!result) {
    return null;
  }

  let classDie;
  let iconDie;

  const myDice = result.dice.map((die, index) => {
    if (die === 1) {
      classDie = "fa-solid fa-dice-one fa-3x small-pad";
      iconDie = faDiceOne;
    } else if (die === 2) {
      classDie = "fa-solid fa-dice-two fa-3x small-pad";
      iconDie = faDiceTwo;
    } else if (die === 3) {
      classDie = "fa-solid fa-dice-three fa-3x small-pad";
      iconDie = faDiceThree;
    } else if (die === 4) {
      classDie = "fa-solid fa-dice-four fa-3x small-pad";
      iconDie = faDiceFour;
    } else if (die === 5) {
      classDie = "fa-solid fa-dice-five fa-3x small-pad";
      iconDie = faDiceFive;
    } else if (die === 6) {
      classDie = "fa-solid fa-dice-six fa-3x small-pad";
      iconDie = faDiceSix;
    } else if (die === "charm") {
      classDie = "fa-solid fa-star fa-3x small-pad";
      iconDie = faStar;
    } else if (die === "cool") {
      classDie = "fa-solid fa-hand-peace fa-3x small-pad";
      iconDie = faHandPeace;
    } else if (die === "sharp") {
      classDie = "fa-solid fa-brain fa-3x small-pad";
      iconDie = faBrain;
    } else if (die === "tough") {
      classDie = "fa-solid fa-dumbbell fa-3x small-pad";
      iconDie = faDumbbell;
    } else if (die === "weird") {
      classDie = "fa-solid fa-crow fa-3x small-pad";
      iconDie = faCrow;
    }
    console.log("class", classDie, "icon", iconDie);
    return (
      <>
        <FontAwesomeIcon key={`die${index}`} className={`${classDie} ${die}`} icon={iconDie} />
      </>
    );
  });

  return (
    <>
      <div className="dice-pad">{myDice}</div>
      <br />
      <div>
        <h6>{result.message}</h6>
      </div>
      <div>
        <h6>{result.result}</h6>
      </div>
      <div>
        <button type="button" onClick={clearResult}>
          <strong>Clear</strong>
        </button>
      </div>
    </>
  );
};
<i class="fa-solid fa-dice-five"></i>;

export default DiceBox;
