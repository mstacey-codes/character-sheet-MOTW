import React from "react";

const StatChangeButton = (props) => {
  return (
    <div onClick={props.onSubmit}>
      <input className="button" type="submit" value={props.text} />
    </div>
  );
};

export default StatChangeButton;
