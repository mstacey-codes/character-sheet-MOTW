import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faHandPeace,
  faBrain,
  faDumbbell,
  faCrow,
  faHeart,
  faHeartBroken,
  faClover,
  faArrowTrendUp,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

import StatTile from "./StatTile";

const StatsTile = ({ stats }) => {
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
  let unstable;
  if (stats.harm <= 4) {
    harmIconClassName = "fa-solid fa-heart fa-xl small-pad";
    harmIcon = faHeart;
  } else {
    harmIconClassName = "fa-solid fa-heart-broken fa-xl small-pad";
    harmIcon = faHeartBroken;
    unstable = (
      <>
        <FontAwesomeIcon
          className="fa-solid fa-circle-exclamation fa-lg"
          icon={faExclamationCircle}
        />
        <h6>
          <strong>Unstable</strong>
        </h6>
      </>
    );
  }

  let levelUpMessage;
  if (stats.experience / 5 >= 1) {
    levelUpMessage = (
      <h6 style={{ marginBottom: "10px" }}>
        This hunter can level up {Math.trunc(stats.experience / 5)} times. Please wait for future
        developments.
      </h6>
    );
  }

  return (
    <>
      <div>
        <div>
          <ul className="no-bullets">{characterModifiers}</ul>
        </div>
        <ul className="no-bullets">
          <li className="stat-grid">
            <FontAwesomeIcon className="fa-solid fa-clover fa-xl small-pad" icon={faClover} />
            <h5>
              <strong>Luck: {stats.luck}/7</strong>
            </h5>
          </li>
          <li className="stat-grid">
            <FontAwesomeIcon className={harmIconClassName} icon={harmIcon} />
            <h5>
              <strong>Harm: {stats.harm}/7</strong>
            </h5>
            {unstable}
          </li>
          <li className="stat-grid">
            <FontAwesomeIcon
              className="fa-solid fa-arrow-trend-up fa-xl small-pad"
              icon={faArrowTrendUp}
            />
            <h5>
              <strong>Experience: {stats.experience % 5}</strong>
            </h5>
          </li>
        </ul>
        {levelUpMessage}
      </div>
    </>
  );
};

export default StatsTile;
