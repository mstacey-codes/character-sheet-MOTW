import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatTile = ({ iconClass, icon, statName, modifier }) => {
  return (
    <>
      <li className={`${statName}`}>
        <FontAwesomeIcon className={iconClass} icon={icon} />
        {statName}: {modifier}
      </li>
    </>
  );
};

export default StatTile;
