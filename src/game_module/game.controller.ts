import { Request, Response } from "express";

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

export const start = (req: Request, res: Response) => {
  // Setup game state, and put into model
  res.status(200).json(GAME_STATE);
};

export const status = (req: Request, res: Response) => {
  res.status(200).json(GAME_STATE);
};
