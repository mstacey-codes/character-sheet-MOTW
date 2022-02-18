import express from "express";
import objection from "objection";
import { Stats, Look } from "../../../models/index.js";
const { ValidationError } = objection;

import cleanUserInput from "../../../services/cleanUserInput.js";

const characterInfoRouter = new express.Router({ mergeParams: true });

characterInfoRouter.post("/", async (req, res) => {
  const { stats, look } = req.body;
  const { charId } = req.params;
  const { charm, cool, sharp, tough, weird } = stats;
  const { aura, body, clothes, eyes, face } = look;

  try {
    const newStats = await Stats.query().insertAndFetch({
      charm,
      cool,
      sharp,
      tough,
      weird,
      characterId: charId,
    });
    const newLook = await Look.query().insertAndFetch({
      aura,
      body,
      clothes,
      eyes,
      face,
      characterId: charId,
    });
    // return res.status(201).json({ newStats });
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    return res.status(500).json({ errors: error });
  }
});

export default characterInfoRouter;
