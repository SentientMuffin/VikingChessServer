import { db } from "../shared/db";
import * as CONSTANTS from "../shared/constants";

const initGame = function () {

  // model for string representation of game state
  let stringRep = "";

  for (let row = 0; row < CONSTANTS.boardHeight; row++) {
    for (let col = 0; col < CONSTANTS.boardWidth; col++) {
      const currentLocation = [col, row];
      stringRep += locationEval(currentLocation);
    }
  }
  db.set("game", stringRep);
};

const getState = async function () {
  return await db.get("game");
};

const locationMatch = (location: number[], check: number[]) => {
  return location[0] === check[0] && location[1] === check[1];
};

const locationEval = function (location: number[]) {
  if (CONSTANTS.kingInitialLocation === location) {
    return CONSTANTS.Rep.KingRep;
  }

    // check for kingsUnit
  if (CONSTANTS.kingSideInitialLocation
    .some(item => locationMatch(item, location))) {
    return CONSTANTS.Rep.KingsUnitRep;
  }

    // check for vikingsUnit
  if (CONSTANTS.vikingSideInitialLocation
    .some(item => locationMatch(item, location))) {
    return CONSTANTS.Rep.VikingsUnitRep;
  }

  return CONSTANTS.Rep.Empty;
};

export const GameModel = {
  initGame: initGame,
  getState: getState
};
