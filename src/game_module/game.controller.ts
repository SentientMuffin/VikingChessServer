import { Request, Response } from "express";
import { GameModel } from "./game.model";

// this should go into a model of some sorts
const GAME_STATE = {
  turn: null,
  nonTurn: null,
  SIDES: {
    Vikings: {
      id: "v",
      units: [],
    },
    Kings: {
      id: "k",
      units: [],
    }
  },
  King: null,
  Selection: {
    selected: false,
    unit: null,
  }
};

export const start = async (req: Request, res: Response) => {
  // Setup game state, and put into model
  GameModel.initGame();
  res.status(200).json(await GameModel.getState());
};

export const status = async (req: Request, res: Response) => {
  res.status(200).json(await GameModel.getState());
};
