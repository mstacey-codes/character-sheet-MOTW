import React from "react";

const ClassTile = (props) => {
  return (
    <div className="class-tile">
      <label htmlFor={props.index}>
        <h4
          className={`${props.selected} flavor`}
          onClick={props.hunterIndexClickHandler}
          name={props.name}
          value={props.index}
        >
          {props.hunter.name}
        </h4>
      </label>
    </div>
  );
};

export default ClassTile;
