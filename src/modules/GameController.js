import Player from "./Player";
import ScreenController from "./ScreenController";

const GameController = () => {
  const screen = ScreenController();

  const playerOne = Player();
  const playerTwo = Player();

  playerOne.placeShipsRandomly();
  playerTwo.placeShipsRandomly();

  screen.renderOwnBoard(playerOne);
  screen.renderEnemyBoard(playerTwo);

  setTimeout(() => {
    playerOne.makeRandomAttack(playerTwo);
    screen.renderEnemyBoard(playerTwo);
  }, 300);
};

export default GameController;
