import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandPeace,
  faBrain,
  faDumbbell,
  faCrow,
  faClover,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import StatTile from "./StatTile";

const StatsTile = ({ stats }) => {
  console.log(stats);
  const setStatsModifiers = [
    {
      iconClass: "fa-solid fa-star small-pad",
      icon: faStar,
      statName: "Charm",
      modifier: stats.charm,
    },
    {
      iconClass: "fa-solid fa-hand-peace small-pad",
      icon: faHandPeace,
      statName: "Cool",
      modifier: stats.cool,
    },
    {
      iconClass: "fa-solid fa-brain small-pad",
      icon: faBrain,
      statName: "Sharp",
      modifier: stats.sharp,
    },
    {
      iconClass: "fa-solid fa-dumbbell small-pad",
      icon: faDumbbell,
      statName: "Tough",
      modifier: stats.tough,
    },
    {
      iconClass: "fa-solid fa-crow small-pad",
      icon: faCrow,
      statName: "Weird",
      modifier: stats.weird,
    },
  ];

  const characterModifiers = setStatsModifiers.map((stat) => {
    return (
      <StatTile
        key={stat.statName}
        statName={stat.statName}
        iconClass={stat.iconClass}
        icon={stat.icon}
        modifier={stat.modifier}
      />
    );
  });

  let harmIconClassName;
  let harmIcon;
  if (stats.harm >= 4) {
    harmIconClassName = "fa-solid fa-heart";
    harmIcon = faHeart;
  }

  return (
    <>
      <div>
        <div className="grid-column-3">
          <ul className="no-bullets">{characterModifiers}</ul>
        </div>
        <ul className="no-bullets">
          <li>
            {/* <FontAwesomeIcon className="fa-solid fa-clover" icon={faClover} /> */}
            Luck: {stats.luck}/7
          </li>
          {/* <FontAwesomeIcon className={harmIconClassName} icon={harmIcon} />{" "} */}
          <li>Harm: {stats.harm}/7</li>
          <li>Experience: {stats.experience % 5}</li>
        </ul>
      </div>
    </>
  );
};

export default StatsTile;
