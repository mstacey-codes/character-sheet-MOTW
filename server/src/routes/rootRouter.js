import express from "express";
import userSessionsRouter from "./api/v1/userSessionsRouter.js";
import usersRouter from "./api/v1/usersRouter.js";
import clientRouter from "./clientRouter.js";
import charactersRouter from "./api/v1/charactersRouter.js";
import huntersRouter from "./api/v1/hunterRouter.js";
const rootRouter = new express.Router();
rootRouter.use("/", clientRouter);

rootRouter.use("/api/v1/user-sessions", userSessionsRouter);
rootRouter.use("/api/v1/users", usersRouter);
rootRouter.use("/api/v1/characters", charactersRouter);
rootRouter.use("/api/v1/hunters", huntersRouter); //place your server-side routes here

export default rootRouter;
