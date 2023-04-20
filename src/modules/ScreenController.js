function ScreenController() {
  function renderOwnBoard(player) {
    player.gameboard.grid.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        const square = document.querySelector(
          `.player-gameboard .row[data-row="${
            indexRow + 1
          }"] .column[data-column="${indexColumn + 1}"]`
        );

        if (column === -1) {
          square.style.backgroundColor = "green";
        } else if (column === -2) {
          square.style.backgroundColor = "red";
        } else if (typeof column === "object") {
          square.style.backgroundColor = "grey";
        }
      });
    });
  }

  function renderEnemyBoard(player) {
    player.gameboard.grid.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        const square = document.querySelector(
          `.enemy-gameboard .row[data-row="${
            indexRow + 1
          }"] .column[data-column="${indexColumn + 1}"]`
        );

        if (column === -1) {
          square.style.backgroundColor = "green";
        } else if (column === -2) {
          square.style.backgroundColor = "red";
        }
      });
    });
  }

  return {
    renderOwnBoard,
    renderEnemyBoard,
  };
}

export default ScreenController;
