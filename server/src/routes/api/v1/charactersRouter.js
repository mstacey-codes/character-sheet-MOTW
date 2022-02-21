import express from "express";
import objection from "objection";
import { Character } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";
import CharacterSerializer from "../../serializers/CharacterSerializer.js";
// import characterInfoRouter from "./characterInfoRouter.js";

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

// charactersRouter.get("/:charId/info", async (req, res) => {
//   const characterIndex = req.params.charId;
//   try {
//     const character = await Character.query().findById(characterIndex);
//     return res.status(200).json({ character });
//   } catch (error) {
//     return res.status(500).json({ errors: error });
//   }
// });

// charactersRouter.use("/:charId/info", characterInfoRouter);

export default charactersRouter;
