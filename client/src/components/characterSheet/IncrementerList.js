import React from "react";
import { buttonInfo } from "../../constants/ButtonInformation.json";
import StatButton from "./StatButton";

const IncrementerList = ({
  characterData,
  onChangeStatsSubmitHandler,
  onKillCharacterSubmitHandler,
}) => {
  const statChangeButtons = buttonInfo.map(({ id, text, relevantStat, action }) => {
    if (id === "heal" && characterData.stats.harm === 0) {
      return null;
    }
    if (id === "harm" && characterData.stats.harm === 7) {
      return null;
    }
    if (id === "luck" && characterData.stats.luck === 0) {
      return null;
    } else {
      return (
        <StatButton
          key={id}
          text={text}
          relevantStat={relevantStat}
          action={action}
          onSubmit={(e) => onChangeStatsSubmitHandler(e, button.relevantStat, button.action)}
        />
      );
    }
  });

  let killCharacterButton;
  if (characterData.stats.harm === 7 && characterData.status !== "deceased") {
    killCharacterButton = (
      <form onSubmit={onKillCharacterSubmitHandler}>
        <input
          style={{ color: "red" }}
          className="button"
          type="submit"
          value="Kill This Character"
        />
      </form>
    );
  }
  return (
    <div>
      {statChangeButtons}
      {killCharacterButton}
    </div>
  );
};
export default IncrementerList;
