import Gameboard from "./Gameboard";

describe("Ship placement", () => {
  test("The ship can be placed", () => {
    const gameboard = Gameboard();
    expect(gameboard.placeShip(0, 0, 2, "row")).toBe(true);
  });

  test("The ship overlapping another ship is not placed", () => {
    const gameboard = Gameboard();
    expect(gameboard.placeShip(0, 0, 2, "row")).toBe(true);
    expect(gameboard.placeShip(0, 0, 2, "row")).toBe(false);
    expect(gameboard.placeShip(0, 0, 2, "column")).toBe(false);
    expect(gameboard.placeShip(2, 0, 2, "column")).toBe(true);
    expect(gameboard.placeShip(1, 0, 2, "column")).toBe(false);
  });

  test("Ships cannot be placed near other ships", () => {
    const gameboard = Gameboard();
    expect(gameboard.placeShip(0, 0, 2, "row")).toBe(true);
    expect(gameboard.placeShip(0, 2, 2, "row")).toBe(false);
    expect(gameboard.placeShip(1, 2, 2, "row")).toBe(false);
    expect(gameboard.placeShip(0, 2, 2, "column")).toBe(false);
    expect(gameboard.placeShip(1, 2, 2, "column")).toBe(false);
  });

  test("The ship cannot be placed out of bounds", () => {
    const gameboard = Gameboard();
    expect(gameboard.placeShip(0, 7, 5, "row")).toBe(false);
    expect(gameboard.placeShip(0, 5, 5, "row")).toBe(true);
    expect(gameboard.placeShip(5, 0, 6, "column")).toBe(false);
    expect(gameboard.placeShip(5, 0, 5, "column")).toBe(true);
  });
});

describe("Hit register", () => {
  test("Registers hits", () => {
    const gameboard = Gameboard();
    gameboard.placeShip(0, 0, 2, "row");
    expect(gameboard.receiveAttack(0, 2)).toBe(true);
  });

  test("Does not hit the same place twice", () => {
    const gameboard = Gameboard();
    gameboard.placeShip(0, 0, 2, "row");
    expect(gameboard.receiveAttack(0, 1)).toBe(true);
    expect(gameboard.receiveAttack(0, 1)).toBe(false);
  });
});

describe("Field win condition", () => {
  test("Works with empty board", () => {
    const gameboard = Gameboard();
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test("Works with unsunk but hit ships", () => {
    const gameboard = Gameboard();
    gameboard.placeShip(0, 0, 2, "row");
    gameboard.receiveAttack(0, 0);
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test("Works with sunken ships", () => {
    const gameboard = Gameboard();
    gameboard.placeShip(0, 0, 2, "row");
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    expect(gameboard.allShipsSunk()).toBe(true);
  });

  test("Works with several ships when only some are sunk", () => {
    const gameboard = Gameboard();
    gameboard.placeShip(0, 0, 2, "row");
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.placeShip(5, 5, 1, "row");
    expect(gameboard.allShipsSunk()).toBe(false);
  });

  test("Works with several sunken ships", () => {
    const gameboard = Gameboard();
    gameboard.placeShip(0, 0, 2, "row");
    gameboard.receiveAttack(0, 0);
    gameboard.receiveAttack(0, 1);
    gameboard.placeShip(5, 5, 1, "row");
    gameboard.receiveAttack(5, 5);
    expect(gameboard.allShipsSunk()).toBe(true);
  });
});
