import Player from "./Player";

const Game = () => {
  const playerOne = Player();
  const playerTwo = Player();

  let activePlayer = playerOne;
  let inactivePlayer = playerTwo;

  playerOne.placeShipsRandomly();
  playerTwo.placeShipsRandomly();

  function getActivePlayer() {
    return activePlayer;
  }

  function getInactivePlayer() {
    return inactivePlayer;
  }

  function getGameboard(player) {
    return player.gameboard;
  }

  function switchPlayers() {
    activePlayer = activePlayer === playerOne ? playerTwo : playerOne;
    inactivePlayer = inactivePlayer === playerTwo ? playerOne : playerTwo;
  }

  return {
    getActivePlayer,
    getGameboard,
    switchPlayers,
    getInactivePlayer,
  };
};

export default Game;
