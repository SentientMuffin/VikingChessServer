import * as redis from "redis";
import * as CONSTANTS from "../shared/constants";

const client = redis.createClient({
  socket: {
    host: "127.0.0.1",
    port: 6379
  }
});

client.on("error", err => {
  console.log("Error" + err);
});

const initGame = function () {

  // model for string representation of game state
  let stringRep = "";

  for (let row = 0; row < CONSTANTS.boardHeight; row++) {
    for (let col = 0; col < CONSTANTS.boardWidth; col++) {
      const currentLocation = [col, row];
      stringRep += locationEval(currentLocation);
    }
  }

  client.lPush("game", stringRep);
};

const getState = function () {
  return client.get("game");
};

const locationEval = function (location: number[]) {
  if (CONSTANTS.kingInitialLocation === location) {
    return CONSTANTS.Rep.KingRep;
  }

    // check for kingsUnit
  if (CONSTANTS.kingSideInitialLocation.includes(location)) {
    return CONSTANTS.Rep.KingsUnitRep;
  }

    // check for vikingsUnit
  if (CONSTANTS.vikingSideInitialLocation.includes(location)) {
    return CONSTANTS.Rep.VikingsUnitRep;
  }

  return CONSTANTS.Rep.Empty;
};

export const GameModel = {
  initGame: initGame,
  getState: getState
};
