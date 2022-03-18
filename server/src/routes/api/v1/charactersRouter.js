import express from "express";
import objection from "objection";
import { Character } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";
import CharacterSerializer from "../../serializers/CharacterSerializer.js";
import characterMovesRouter from "./characterMovesRouter.js";

const { ValidationError } = objection;

const charactersRouter = new express.Router();

charactersRouter.get("/", async (req, res) => {
  try {
    const characters = await Character.query();
    return res.status(200).json({ characters });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

charactersRouter.post("/", async (req, res) => {
  const formInput = cleanUserInput(req.body);
  const { userId, name, hunterIndex, aura, body, clothes, eyes, face, rating } = formInput;
  const { charm, cool, sharp, tough, weird } = rating;
  try {
    const newCharacter = await Character.query().insertAndFetch({
      userId,
      name,
      hunterIndex,
      charm,
      cool,
      sharp,
      tough,
      weird,
      aura,
      body,
      clothes,
      eyes,
      face,
    });
    return res.status(201).json({ character: newCharacter });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

charactersRouter.get("/:charId", async (req, res) => {
  const characterIndex = req.params.charId;
  try {
    const character = await Character.query().findById(characterIndex);
    const serializedCharacter = await CharacterSerializer.getDetails(character);
    return res.status(200).json({ character: serializedCharacter });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

charactersRouter.patch("/:charId", async (req, res) => {
  const characterIndex = req.params.charId;
  const character = await Character.query().findById(characterIndex);

  if (req.body.modifyStatsData) {
    const { stat, action } = req.body.modifyStatsData;
    const currentStatFromDb = character[stat];
    let actionEffect = 1;
    if (action === "decrement") {
      actionEffect = -1;
    }
    const replaceStat = { [stat]: currentStatFromDb + actionEffect };
    try {
      console.log("pause");
      await character.$query().patchAndFetch(replaceStat);
      // console.log("character: ", character);
      const serializedCharacter = await CharacterSerializer.getDetails(character);
      return res.status(200).json({ character: serializedCharacter });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: error });
    }
  }

  if (req.body.changeCharacterStatus) {
    const newStatus = req.body.changeCharacterStatus.status;
    try {
      console.log("killing you quietly");
      await character.$query().patchAndFetch({ status: newStatus });
      const serializedCharacter = await CharacterSerializer.getDetails(character);
      console.log("character: ", character);

      return res.status(200).json({ character: serializedCharacter });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ errors: error });
    }
  }
});

charactersRouter.use("/:charId/moves", characterMovesRouter);

export default charactersRouter;
