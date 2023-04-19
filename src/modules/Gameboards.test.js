import Gameboard from "./Gameboard";

test("The ship can be placed", () => {
  const gameboard = Gameboard();
  expect(gameboard.placeShip(0, 0, 2, "row")).toBe(true);
  gameboard.printGrid();
});

test("The ship overlapping another ship is not placed", () => {
  const gameboard = Gameboard();
  expect(gameboard.placeShip(0, 0, 2, "row")).toBe(true);
  expect(gameboard.placeShip(0, 0, 2, "row")).toBe(false);
  expect(gameboard.placeShip(0, 0, 2, "column")).toBe(false);
  expect(gameboard.placeShip(1, 0, 2, "column")).toBe(true);
  expect(gameboard.placeShip(1, 0, 2, "column")).toBe(false);
  gameboard.printGrid();
});

test("The ship cannot be placed out of bounds", () => {
  const gameboard = Gameboard();
  expect(gameboard.placeShip(0, 7, 5, "row")).toBe(false);
  expect(gameboard.placeShip(0, 5, 5, "row")).toBe(true);
  expect(gameboard.placeShip(5, 0, 6, "column")).toBe(false);
  expect(gameboard.placeShip(5, 0, 5, "column")).toBe(true);
  gameboard.printGrid();
});
