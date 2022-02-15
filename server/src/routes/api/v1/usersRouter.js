import express from "express";
import passport from "passport";
import { User } from "../../../models/index.js";
import UserSerializer from "../../serializers/UsersSerializer.js";

const usersRouter = new express.Router();

usersRouter.get("/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await User.query().findById(userId);
    const serializedUser = await UserSerializer.getSummary(user);
    return res.status(200).json({ user: serializedUser });
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
});

usersRouter.post("/", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  try {
    const persistedUser = await User.query().insertAndFetch({ email, password });
    return req.login(persistedUser, () => {
      return res.status(201).json({ user: persistedUser });
    });
  } catch (error) {
    return res.status(422).json({ errors: error });
  }
});

export default usersRouter;
