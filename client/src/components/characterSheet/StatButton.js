import React from "react";

const StatChangeButton = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input className="button" type="submit" value={props.text} />
    </form>
  );
};

export default StatChangeButton;
