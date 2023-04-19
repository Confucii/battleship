import Gameboard from "./Gameboard";

const Player = () => {
  const gameboard = Gameboard();

  function attack(enemy, x, y) {
    return enemy.gameboard.receiveAttack(x, y);
  }

  function makeRandomAttack(enemy) {
    let randomX;
    let randomY;

    do {
      randomX = Math.floor(Math.random() * 10);
      randomY = Math.floor(Math.random() * 10);
    } while (!attack(enemy, randomX, randomY));

    return true;
  }

  function placeShipsRandomly() {
    const arrLength = [2, 3, 3, 4, 5];
    const arrAxis = ["row", "column"];

    arrLength.forEach((elem) => {
      let randomX;
      let randomY;
      let randomAxis;

      do {
        randomX = Math.floor(Math.random() * 10);
        randomY = Math.floor(Math.random() * 10);
        randomAxis = Math.floor(Math.random() * 2);
      } while (
        !gameboard.placeShip(randomX, randomY, elem, arrAxis[randomAxis])
      );
    });

    return true;
  }

  return {
    gameboard,
    attack,
    makeRandomAttack,
    placeShipsRandomly,
  };
};

export default Player;
