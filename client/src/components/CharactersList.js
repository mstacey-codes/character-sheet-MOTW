import React from "react";
import CharacterTile from "./CharacterTile";

const CharactersList = ({ characters }) => {
  let aliveCharacters;
  if (characters.alive) {
    const allAliveCharacters = characters.alive.map((character) => {
      return <CharacterTile key={character.id} {...character} />;
    });
    aliveCharacters = (
      <>
        <h3>On the hunt:</h3>
        <div className="grid-column-4">{allAliveCharacters}</div>
      </>
    );
  }
  let retiredCharacters;
  if (characters.retired) {
    const allRetiredCharacters = characters.retired.map((character) => {
      return <CharacterTile key={character.id} {...character} />;
    });
    retiredCharacters = (
      <>
        <h3>At home for good:</h3>
        <div className="grid-column-4">{allRetiredCharacters}</div>
      </>
    );
  }

  let deceasedCharacters;
  if (characters.deceased) {
    const allDeceasedCharacters = characters.deceased.map((character) => {
      return <CharacterTile key={character.id} {...character} />;
    });
    deceasedCharacters = (
      <>
        <h3>In the graveyard:</h3>
        <div className="grid-column-4">{allDeceasedCharacters}</div>
      </>
    );
  }

  return (
    <>
      <div>{aliveCharacters}</div>
      <div>{retiredCharacters}</div>
      <div>{deceasedCharacters}</div>
    </>
  );
};

export default CharactersList;
