import React from "react";

import MoveTile from "./MoveTile";

const MovesForm = ({ moves, movesData, handleInputChangeMoves, hunterIndex }) => {
  const requiredMovesList = moves.required_moves.map((move) => {
    return (
      <>
        <strong key={move.name}>{move.name}</strong>
        <p>{move.description}</p>
      </>
    );
  });

  const optionalMovesList = moves.optional_moves.map((move) => {
    const formattedMoveName = move.name.replace(/\W/g, "");
    const moveId = hunterIndex + formattedMoveName;

    return (
      <MoveTile
        key={moveId}
        id={moveId}
        name={move.name}
        value={moveId}
        description={move.description}
        handleInputChangeMoves={handleInputChangeMoves}
        checked={movesData.includes(moveId)}
      />
    );
  });

  return (
    <>
      <br />
      <h4>Choose your moves</h4>
      <div>
        This hunter type has {moves.required_move_slots} required moves.
        <div>{requiredMovesList}</div>
      </div>
      <div>
        <p>And must pick {moves.optional_move_slots} move(s)</p>
        {optionalMovesList}
      </div>
    </>
  );
};

export default MovesForm;
