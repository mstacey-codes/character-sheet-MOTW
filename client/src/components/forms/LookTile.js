import React from "react";

const LookTile = ({ look, name, id, handleInputChangeLook, isChecked }) => {
  return (
    <div>
      <label>
        <input
          type="radio"
          name={name}
          value={look}
          onChange={handleInputChangeLook}
          checked={isChecked}
        />{" "}
        {look}
      </label>
    </div>
  );
};
export default LookTile;
