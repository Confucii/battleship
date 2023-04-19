import Player from "./Player";

describe("Test attack function", () => {
  test("Player can attack enemy gameboard", () => {
    const playerOne = Player();
    const playerTwo = Player();
    expect(playerOne.attack(playerTwo, 0, 0)).toBe(true);
  });

  test("Player can attack enemy ships", () => {
    const playerOne = Player();
    playerOne.gameboard.placeShip(0, 0, 2, "column");
    const playerTwo = Player();
    expect(playerTwo.attack(playerOne, 0, 0)).toBe(true);
  });

  test("Player can destroy all enemy ships", () => {
    const playerOne = Player();
    playerOne.gameboard.placeShip(0, 0, 2, "column");
    const playerTwo = Player();
    playerTwo.attack(playerOne, 0, 0);
    playerTwo.attack(playerOne, 1, 0);
    playerOne.gameboard.placeShip(3, 3, 1, "column");
    playerTwo.attack(playerOne, 3, 3);
    expect(playerOne.gameboard.allShipsSunk()).toBe(true);
  });
});

describe("Test random attack functionality", () => {
  test("Player can attack enemy gameboard", () => {
    const playerOne = Player();
    const playerTwo = Player();
    expect(playerOne.makeRandomAttack(playerTwo)).toBe(true);
  });

  test("Player can attack enemy gameboard 100 times", () => {
    const playerOne = Player();
    const playerTwo = Player();
    for (let i = 0; i < 99; i += 1) {
      playerOne.makeRandomAttack(playerTwo);
    }
    expect(playerOne.makeRandomAttack(playerTwo)).toBe(true);
  });
});

describe("Ships can be spawned randomly", () => {
  test("Ships are spawned properly", () => {
    const playerOne = Player();

    expect(playerOne.placeShipsRandomly()).toBe(true);
  });

  test("Spawned ships can be destroyed", () => {
    const playerOne = Player();
    const playerTwo = Player();
    playerOne.placeShipsRandomly();

    for (let i = 0; i < 100; i += 1) {
      playerTwo.makeRandomAttack(playerOne);
    }

    playerOne.gameboard.printGrid();

    expect(playerOne.gameboard.allShipsSunk()).toBe(true);
  });
});
