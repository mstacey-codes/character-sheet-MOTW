import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();

const clientRoutes = [
  "/",
  "/user-sessions/new",
  "/users/new",
  "/profile",
  "/character-sheet",
  "/character-sheet/:charId/:hunterIndex",
  "/new-character",
  "/new-character/:charId/:hunterIndex",
  "/new-character/:charId/flake",
];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
