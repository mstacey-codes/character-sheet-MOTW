import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandPeace,
  faBrain,
  faDumbbell,
  faCrow,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import StatTile from "./StatTile";

const StatsTile = ({ stats }) => {
  console.log(stats);
  const setStatsModifiers = [
    {
      iconClass: "fa-solid fa-star fa-xl small-pad",
      icon: faStar,
      statName: "Charm",
      modifier: stats.charm,
    },
    {
      iconClass: "fa-solid fa-hand-peace fa-xl small-pad",
      icon: faHandPeace,
      statName: "Cool",
      modifier: stats.cool,
    },
    {
      iconClass: "fa-solid fa-brain fa-xl small-pad",
      icon: faBrain,
      statName: "Sharp",
      modifier: stats.sharp,
    },
    {
      iconClass: "fa-solid fa-dumbbell fa-xl small-pad",
      icon: faDumbbell,
      statName: "Tough",
      modifier: stats.tough,
    },
    {
      iconClass: "fa-solid fa-crow fa-xl small-pad",
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
        <div>
          <ul className="no-bullets">{characterModifiers}</ul>
        </div>
        <ul className="no-bullets">
          <li>
            {/* <FontAwesomeIcon className="fa-solid fa-clover" icon={faClover} /> */}
            <h5>
              <strong>Luck: {stats.luck}/7</strong>
            </h5>
          </li>
          {/* <FontAwesomeIcon className={harmIconClassName} icon={harmIcon} />{" "} */}
          <li>
            <h5>
              <strong>Harm: {stats.harm}/7</strong>
            </h5>
          </li>
          <li>
            <h5>
              <strong>Experience: {stats.experience % 5}</strong>
            </h5>
          </li>
        </ul>
      </div>
    </>
  );
};

export default StatsTile;
