import React from "react";

const MoveTile = ({ id, name, description, moveClickHandlerWrapper, handleInputChangeMoves }) => {
  return (
    <>
      <div>
        <label htmlFor={id}>
          <input type="checkbox" name={name} value={name} onChange={handleInputChangeMoves} />
          <strong>{name}</strong>
        </label>
        <p>{description}</p>
      </div>
    </>
  );
};

export default MoveTile;
