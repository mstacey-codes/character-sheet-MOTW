import React, { useState } from "react";
import MoveTile from "./MoveTile";

const MovesList = ({ moves }) => {
  const [selectedMove, setSelectedMove] = useState(null);

  const toggleMoveSelect = (index) => {
    if (index === selectedMove) {
      setSelectedMove(null);
    } else {
      setSelectedMove(index);
    }
  };

  const allMoves = moves.map((move) => {
    let selected;
    if (selectedMove === move.index) {
      selected = true;
    }

    const handleClick = () => {
      toggleMoveSelect(move.index);
    };

    return <MoveTile key={move.index} move={move} handleClick={handleClick} selected={selected} />;
  });

  return (
    <>
      <h6>Click on a move to see more information about it.</h6>
      <ul>{allMoves}</ul>
    </>
  );
};

export default MovesList;
