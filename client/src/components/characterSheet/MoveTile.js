import React from "react";

const MoveTile = ({ move, handleClick, selected }) => {
  let description;
  if (selected) {
    description = move.description;
  }

  return (
    <div class-name="basic-padding">
      <p onClick={handleClick}>
        <strong className={`${move.stat}`}>{move.name}</strong>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default MoveTile;
