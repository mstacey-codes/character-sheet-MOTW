import React, { useState } from "react";
import BasicMoveTile from "./BasicMoveTile";
import BasicMoveJSON from "../../constants/BasicMoves.json";
import DiceBox from "./DiceBox";

const BasicMoveList = ({ stats }) => {
  const [hovering, setHover] = useState("");
  const [result, setResult] = useState(null);

  const rollDice = () => {
    const die1 = Math.ceil(Math.random() * 6);
    const die2 = Math.ceil(Math.random() * 6);
    return [die1, die2];
  };

  const basicMove = (moveId) => {
    const [die1, die2] = rollDice();
    let foundMove = BasicMoveJSON.basic_moves.find((element) => element.id === moveId);
    const statInUse = stats[foundMove.stat];
    const total = die1 + die2 + statInUse;
    let message = `You used ${foundMove.name} with a ${foundMove.stat} modifier of ${statInUse}. Your total is: ${total} `;
    let result;
    if (total <= 6) {
      result = `${foundMove.failed}`;
    } else if (total >= 7 && total <= 9) {
      result = `${foundMove.partial}`;
    } else {
      result = `${foundMove.success}`;
    }
    const moveResultObject = {
      dice: [die1, die2, foundMove.stat],
      moveName: foundMove.name,
      result: result,
      message: message,
    };
    return moveResultObject;
  };

  let allMoves;
  if (!result) {
    allMoves = BasicMoveJSON.basic_moves.map((move) => {
      const mouseOverHandler = () => {
        setHover(move.id);
      };

      const mouseOffHandler = () => {
        setHover("");
      };

      let selectedMove = "";
      if (hovering === move.id) {
        selectedMove = `select-move ${move.stat}`;
      }

      const movePickHandler = () => {
        setResult(basicMove(move.id));
      };

      return (
        <BasicMoveTile
          key={move.id}
          id={move.id}
          name={move.name}
          stat={move.stat}
          movePickHandler={movePickHandler}
          BasicMoveJSON={BasicMoveJSON}
          mouseOverHandler={mouseOverHandler}
          mouseOffHandler={mouseOffHandler}
          selectedMove={selectedMove}
        />
      );
    });
  }

  const clearResult = () => {
    setResult(null);
  };

  return (
    <>
      <div>
        <DiceBox result={result} clearResult={clearResult} />
      </div>
      <div>{allMoves}</div>
    </>
  );
};
export default BasicMoveList;
