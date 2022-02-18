import React from "react";

const LookTile = ({ look, name, id, handleInputChangeLook }) => {
  return (
    <li>
      <label htmlFor={id} />
      <input type="radio" name={name} value={look} onChange={handleInputChangeLook} /> {look}
    </li>
  );
};
export default LookTile;
