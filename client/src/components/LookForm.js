import React from "react";
import LookTile from "./LookTile.js";

const LookForm = (props) => {
  let aura;
  if (props.look.aura) {
    const auraOptions = props.look.aura.map((aura, index) => {
      return (
        <LookTile
          key={index + "aura"}
          id={index + "aura"}
          name="aura"
          look={aura}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    aura = <div>Their aura: {auraOptions}</div>;
  }

  let body;
  if (props.look.body) {
    const bodyOptions = props.look.body.map((body, index) => {
      return (
        <LookTile
          key={index + "body"}
          id={index + "body"}
          name="body"
          look={body}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    body = <div>Their body: {bodyOptions}</div>;
  }

  let clothes;
  if (props.look.clothes) {
    const clothesOptions = props.look.clothes.map((clothes, index) => {
      return (
        <LookTile
          key={index + "clothes"}
          id={index + "clothes"}
          name="clothes"
          look={clothes}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    clothes = <div>Their clothes: {clothesOptions}</div>;
  }

  let eyes;
  if (props.look.eyes) {
    const eyesOptions = props.look.eyes.map((eyes, index) => {
      return (
        <LookTile
          key={index + "eyes"}
          id={index + "eyes"}
          name="eyes"
          look={eyes}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    eyes = <div>Their eyes: {eyesOptions}</div>;
  }

  let face;
  if (props.look.face) {
    const faceOptions = props.look.face.map((face, index) => {
      return (
        <LookTile
          key={index + "face"}
          id={index + "face"}
          name="face"
          look={face}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    face = <div>Their face: {faceOptions}</div>;
  }

  return (
    <>
      When someone looks at your character, what do they notice?
      {aura}
      {body}
      {clothes}
      {eyes}
      {face}
    </>
  );
};

export default LookForm;
