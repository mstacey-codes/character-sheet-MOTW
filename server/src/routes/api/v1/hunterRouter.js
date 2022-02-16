import express from "express";
import motwClient from "../../../apiClient/motwClient.js";
import { Hunter } from "../../../models/index.js";

const huntersRouter = new express.Router();

huntersRouter.get("/", async (req, res) => {
  try {
    const hunters = await Hunter.query();
    return res.status(200).json({ hunters });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

huntersRouter.get("/:index", async (req, res) => {
  console.log(req.params);
  const hunterIndex = req.params.index;

  try {
    const hunterResponse = await motwClient.getHunterData(hunterIndex);
    const hunterData = JSON.parse(hunterResponse);
    return res.set({ "Content-Type": "application/json" }).status(200).json(hunterData);
  } catch (error) {
    return res.status(401).json({ errors: error });
  }
});

export default huntersRouter;
