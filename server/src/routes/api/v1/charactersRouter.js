import express from "express";
import { Character } from "../../../models/index.js";

const charactersRouter = new express.Router();

charactersRouter.get("/", async (req, res) => {
  try {
    const characters = await Character.query();
    return res.status(200).json({ characters });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

export default charactersRouter;
