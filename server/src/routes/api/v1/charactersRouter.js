import express from "express";
import objection from "objection";
import { Character } from "../../../models/index.js";
import cleanUserInput from "../../../services/cleanUserInput.js";

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
  const { userId, name, hunterIndex } = formInput;
  try {
    const newCharacter = await Character.query().insertAndFetch({ userId, name, hunterIndex });
    return res.status(201).json({ character: newCharacter });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default charactersRouter;
