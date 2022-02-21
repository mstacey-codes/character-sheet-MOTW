import React from "react";

import MoveTile from "./MoveTile";

const MovesForm = ({ moves, handleInputChangeMoves }) => {
  console.log(moves);

  const requiredMovesList = moves.required_moves.map((move) => {
    return (
      <>
        <strong key={move.name}>{move.name}</strong>
        <p>{move.description}</p>
      </>
    );
  });

  const optionalMovesList = moves.optional_moves.map((move) => {
    const moveClickHandlerWrapper = () => {
      let newMoves = [...movesData];
      if (newMoves.includes(moves.name)) {
        let moveIndex = newMoves.indexOf(move.name);
        newMoves.splice(moveIndex, 1);
        return setMovesData(newMoves);
      } else {
      }
      return setMovesData([...movesData, moves.name]);
    };
    return (
      <MoveTile
        key={move.name}
        id={move.name}
        name={move.name}
        description={move.description}
        handleInputChangeMoves={handleInputChangeMoves}
      />
    );
  });
  return (
    <>
      <h2>Choose your moves</h2>
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
