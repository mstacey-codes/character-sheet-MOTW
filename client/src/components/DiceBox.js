import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from "@fortawesome/free-solid-svg-icons";
import { lowerCase } from "lodash";

const DiceBox = (props) => {
  const rollDice = () => {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);
    return [die1, die2];
  };

  let classDie;
  let iconDie;
  const makeARoll = () => {
    const dice = rollDice();
    // const dice = [1, 1];
    const myDice = dice.map((die, index) => {
      if (die === 1) {
        classDie = "fa-solid fa-dice-one";
        iconDie = faDiceOne;
      }
      if (die === 2) {
        classDie = "fa-solid fa-dice-two";
        iconDie = faDiceTwo;
      }
      if (die === 3) {
        classDie = "fa-solid fa-dice-three";
        iconDie = faDiceThree;
      }
      if (die === 4) {
        classDie = "fa-solid fa-dice-four";
        iconDie = faDiceFour;
      }
      if (die === 5) {
        classDie = "fa-solid fa-dice-five";
        iconDie = faDiceFive;
      }
      if (die === 6) {
        classDie = "fa-solid fa-dice-six";
        iconDie = faDiceSix;
      }
      console.log("class", classDie, "icon", iconDie);
      return <FontAwesomeIcon key={`die${index}`} className={classDie} icon={iconDie} />;
    });
    return myDice;
  };

  return (
    <>
      dice
      {makeARoll()}
      {/* <FontAwesomeIcon className={"fa-solid fa-dice-six"} icon={faDiceSix} /> */}
    </>
  );
};
<i class="fa-solid fa-dice-five"></i>;

export default DiceBox;
