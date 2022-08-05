import express, {Request, Response} from "express";
import * as gameController from "./game.controller";

const router = express.Router();

router.get("/status", (req: Request, res: Response) => {
  gameController.status(req, res);
});

router.get("/start", (req: Request, res: Response) => {
  gameController.start(req, res);
});

export { router as gameRouter };
