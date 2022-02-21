import React from "react";

import StatTile from "./StatTile";

const StatsTile = (props) => {
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

  const setStatsModifiers = [
    {
      statName: "Charm",
      modifier: characterStats.charm,
    },
    {
      statName: "Cool",
      modifier: characterStats.cool,
    },
    {
      statName: "Sharp",
      modifier: characterStats.sharp,
    },
    {
      statName: "Tough",
      modifier: characterStats.tough,
    },
    {
      statName: "Weird",
      modifier: characterStats.weird,
    },
  ];

  const characterModifiers = setStatsModifiers.map((stat) => {
    return <StatTile key={stat.statName} statName={stat.statName} modifier={stat.modifier} />;
  });

  return (
    <>
      <div>
        <div>
          <ul>{characterModifiers}</ul>
        </div>
        {/* Good candidate for data visualization */}
        <li>Luck: {characterStats.luck}/7</li>
        <li>Harm: {characterStats.harm}/7</li>
        <li>Experience: {characterStats.experience % 5}</li>
      </div>
    </>
  );
};

export default StatsTile;
