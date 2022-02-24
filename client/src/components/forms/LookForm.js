import React from "react";
import LookTile from "./LookTile.js";

const LookForm = (props) => {
  const [auraState, bodyState, clothesState, eyesState, faceState] = props.lookState;
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
          checked={aura === auraState}
        />
      );
    });
    aura = (
      <div>
        <strong>Their aura:</strong> {auraOptions}
      </div>
    );
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
          isChecked={body === bodyState}
        />
      );
    });
    body = (
      <div>
        <strong>Their body:</strong> {bodyOptions}
      </div>
    );
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
          isChecked={clothes === clothesState}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    clothes = (
      <div>
        <strong>Their clothes</strong>: {clothesOptions}
      </div>
    );
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
          isChecked={eyes === eyesState}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    eyes = (
      <div>
        <strong>Their eyes</strong>: {eyesOptions}
      </div>
    );
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
          isChecked={face === faceState}
          handleInputChangeLook={props.handleInputChangeLook}
        />
      );
    });
    face = (
      <div>
        <strong>Their face</strong>: {faceOptions}
      </div>
    );
  }

  return (
    <>
      <h5>When someone looks at your character, what do they notice?</h5>
      <div className="grid-column-3">
        {aura}
        {body}
        {clothes}
        {eyes}
        {face}
      </div>
    </>
  );
};

export default LookForm;
