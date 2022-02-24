import React from "react";
import { Link } from "react-router-dom";

const CharactersList = ({ name, hunterType, id }) => {
  return (
    <div>
      <div className="character-tile">
        <strong>
          <Link to={`/character-sheet/${id}`}>{name}</Link>
        </strong>
        <br />
        {hunterType}
      </div>
    </div>
  );
};

export default CharactersList;
