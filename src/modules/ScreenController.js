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

  function renderResetOverlay(text, callback) {
    const bodySelector = document.querySelector("body");

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    bodySelector.appendChild(overlayDiv);

    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal");

    const modalTitle = document.createElement("h2");
    modalTitle.classList.add("modal-title");
    modalTitle.textContent = text;

    const resetBtn = document.createElement("button");
    resetBtn.classList.add("reset-button");
    resetBtn.addEventListener("click", callback);
    resetBtn.textContent = "Restart";

    modalDiv.appendChild(modalTitle);
    modalDiv.appendChild(resetBtn);

    bodySelector.appendChild(modalDiv);
  }

  function deleteResetOverlay() {
    const overlayDiv = document.querySelector(".overlay");
    const modalDiv = document.querySelector(".modal");
    modalDiv.remove();
    overlayDiv.remove();
  }

  function clearBoards() {
    document
      .querySelectorAll(`.player-gameboard .row .column`)
      .forEach((elem) => {
        const elemRef = elem;
        elemRef.style.backgroundColor = "white";
      });

    document
      .querySelectorAll(`.enemy-gameboard .row .column`)
      .forEach((elem) => {
        const elemRef = elem;
        elemRef.style.backgroundColor = "white";
        elemRef.style.removeProperty("background-color");
        elemRef.classList.remove("clicked");
      });
  }

  return {
    renderOwnBoard,
    renderEnemyBoard,
    renderResetOverlay,
    deleteResetOverlay,
    clearBoards,
  };
}

export default ScreenController;
