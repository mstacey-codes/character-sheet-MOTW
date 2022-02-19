import React from "react";

const ClassTile = (props) => {
  return (
    <div className="class-tile">
      <h3
        className={props.selected}
        onClick={props.hunterIndexClickHandler}
        name={props.name}
        value={props.index}
      >
        {props.hunter.name}
      </h3>
    </div>
  );
};

export default ClassTile;
