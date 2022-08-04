import express from "express";
import { gameRouter } from "./game_module/routes";

const router = express.Router();

router.use("/game", gameRouter);

export { router as ROUTES };
