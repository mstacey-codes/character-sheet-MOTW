import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StatTile = ({ iconClass, icon, statName, modifier }) => {
  return (
    <>
      <li className={`${statName} stat-grid`}>
        <div>
          <FontAwesomeIcon className={iconClass} icon={icon} />
        </div>
        <h5>
          <strong>
            {statName}: {modifier}
          </strong>
        </h5>
      </li>
    </>
  );
};

export default StatTile;
