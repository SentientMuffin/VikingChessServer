import express, {Request, Response} from "express";
import * as gameController from "./GameController";

const router = express.Router();

router.get('/status', (req: Request, res: Response) => {
  gameController.status(req, res);
});

router.post('/start', (req: Request, res: Response) => {
  gameController.start(req, res);
});      

export { router as gameRouter };
