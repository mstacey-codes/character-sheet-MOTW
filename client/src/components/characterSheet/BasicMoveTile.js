import React from "react";

const BasicMoveTile = (props) => {
  return (
    <ul className={props.selectedMove}>
      <label>
        <strong>
          <p
            className={props.stat}
            onClick={props.movePickHandler}
            onMouseOver={props.mouseOverHandler}
            onMouseLeave={props.mouseOffHandler}
          >
            {props.name}
          </p>
        </strong>
      </label>
    </ul>
  );
};

export default BasicMoveTile;
