import React from "react";

const LookList = ({ look }) => {
  const characterLook = Object.entries(look)
    .reduce((memo, look) => {
      if (look[1] !== null) {
        memo.push(look[1]);
        return memo;
      } else {
        return memo;
      }
    }, [])
    .join(" + ");

  return <h5>{characterLook}</h5>;
};

export default LookList;
