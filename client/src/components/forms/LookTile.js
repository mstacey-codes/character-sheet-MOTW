import React from "react";

const LookTile = ({ look, name, id, handleInputChangeLook, isChecked }) => {
  return (
    <div>
      <label htmlFor={id} />
      <input
        type="radio"
        name={name}
        value={look}
        onChange={handleInputChangeLook}
        checked={isChecked}
      />{" "}
      {look}
    </div>
  );
};
export default LookTile;
