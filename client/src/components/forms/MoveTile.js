import React from "react";

const MoveTile = ({ id, name, description, checked, handleInputChangeMoves }) => {
  return (
    <>
      <div>
        <label htmlFor={id}>
          <input
            type="checkbox"
            name={name}
            value={id}
            id={id}
            onChange={handleInputChangeMoves}
            checked={checked}
          />
          <strong>{name}</strong>
        </label>
        <p>{description}</p>
      </div>
    </>
  );
};

export default MoveTile;
