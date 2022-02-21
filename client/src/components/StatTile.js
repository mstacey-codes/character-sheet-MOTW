import React from "react";

const StatTile = ({ statName, modifier }) => {
  const characterStats = {
    charm: 1,
    cool: 2,
    sharp: 0,
    tough: -1,
    weird: 2,
    luck: 7,
    harm: 2,
    experience: 7,
  };

  return (
    <>
      <li>
        {statName}: {modifier}
      </li>
    </>
  );
};

export default StatTile;
