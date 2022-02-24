import React from "react";

const BasicMoveTile = (props) => {
  return (
    <ul>
      <strong>
        <p className={props.stat} onClick={props.movePickHandler}>
          {props.name}
        </p>
      </strong>
    </ul>
  );
};

export default BasicMoveTile;
