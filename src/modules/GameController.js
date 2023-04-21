import Player from "./Player";
import ScreenController from "./ScreenController";

const GameController = () => {
  const screen = ScreenController();

  let playerOne = Player();
  let playerTwo = Player();

  function reset() {
    screen.deleteResetOverlay();
    playerOne = Player();
    playerTwo = Player();
    screen.clearBoards();
    playerOne.placeShipsRandomly();
    screen.renderOwnBoard(playerOne);
    playerTwo.placeShipsRandomly();
    screen.renderEnemyBoard(playerTwo);
  }

  document.querySelectorAll(`.enemy-gameboard .row .column`).forEach((elem) => {
    elem.addEventListener("click", () => {
      if (!elem.classList.contains("clicked")) {
        elem.classList.toggle("clicked");
        playerOne.attack(
          playerTwo,
          elem.parentElement.dataset.row - 1,
          elem.dataset.column - 1
        );
        screen.renderEnemyBoard(playerTwo);
        if (!playerTwo.gameboard.allShipsSunk()) {
          playerTwo.makeRandomAttack(playerOne);
          screen.renderOwnBoard(playerOne);
        } else {
          screen.renderResetOverlay("You win!", reset);
        }
        if (playerOne.gameboard.allShipsSunk()) {
          screen.renderResetOverlay("You lose!", reset);
        }
      }
    });
  });

  playerOne.placeShipsRandomly();
  playerTwo.gameboard.placeShip(0, 0, 1, "row");

  screen.renderOwnBoard(playerOne);
};

export default GameController;
