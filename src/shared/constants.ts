// ======================= export constants ========================

// Game board dimensions
export const boardWidth = 11;
export const boardHeight = 11;

// Special Spaces, [x, y], top-left is [0, 0]
export const escapeZone = [
  [0, 0],
  [0, boardHeight - 1],
  [boardWidth - 1, 0],
  [boardWidth - 1, boardHeight - 1]
];

export const kingInitialLocation = [5, 5];
export const kingSideInitialLocation = [
  [3, 5], [7, 5], [5, 3], [5, 7],
  [6, 5], [4, 5], [5, 6], [5, 4],
  [6, 6], [4, 6], [6, 4], [4, 4]
];

export const vikingSideInitialLocation = [
  [0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [1, 5],
  [boardWidth - 1, 3], [boardWidth - 1, 4], [boardWidth - 1, 5],
  [boardWidth - 1, 6], [boardWidth - 1, 7], [boardWidth - 2, 5],
  [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [5, 1],
  [3, boardHeight - 1], [4, boardHeight - 1], [5, boardHeight - 1],
  [6, boardHeight - 1], [7, boardHeight - 1], [5, boardHeight - 2]
];

// Unit String Rep
export const Rep = {
  Empty: "E",
  KingRep: "K",
  KingsUnitRep: "k",
  VikingsUnitRep: "v",
  EscapeZoneRep: "z"
};
