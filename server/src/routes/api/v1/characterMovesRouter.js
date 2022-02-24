import express from "express";
import objection from "objection";
const { ValidationError } = objection;

import { Ability } from "../../../models/index.js";

const characterMovesRouter = new express.Router({ mergeParams: true });

characterMovesRouter.post("/", async (req, res) => {
  const { moves } = req.body;
  const { charId } = req.params;

  const formattedMovesData = moves.map((move) => {
    return {
      characterId: charId,
      moveIndex: move,
    };
  });

  try {
    if (moves) {
      const insertedMoves = await Ability.query().insertGraph(formattedMovesData);
      return res.status(201).json({ insertedMoves });
    } else {
      const moveError = {
        moves: [{ message: "should be selected" }],
      };
      return res.status(422).json({ errors: moveError });
    }
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    console.log(error);
    return res.status(500).json({ errors: error });
  }
});

export default characterMovesRouter;
