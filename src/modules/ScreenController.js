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

  function renderPlacementBoard(gameboard) {
    gameboard.grid.forEach((row, indexRow) => {
      row.forEach((column, indexColumn) => {
        const square = document.querySelector(
          `.placement-gameboard .row[data-row="${
            indexRow + 1
          }"] .column[data-column="${indexColumn + 1}"]`
        );

        if (typeof column === "object") {
          square.style.backgroundColor = "grey";
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

  function renderPlacement() {
    const bodySelector = document.querySelector("body");

    const overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay");

    bodySelector.appendChild(overlayDiv);

    const placementDiv = document.createElement("div");
    placementDiv.classList.add("placement");

    const title = document.createElement("h2");
    title.classList.add("placement-title");
    title.textContent = "Place your ships!";

    const rotateBtn = document.createElement("button");
    rotateBtn.classList.add("rotate-btn");
    rotateBtn.textContent = "Rotate";

    const placementBoard = document.createElement("div");
    placementBoard.classList.add("placement-gameboard");
    for (let i = 1; i <= 10; i += 1) {
      const row = document.createElement("div");
      row.classList.add("row");
      row.setAttribute("data-row", `${i}`);
      for (let j = 1; j <= 10; j += 1) {
        const column = document.createElement("div");
        column.classList.add("column");
        column.setAttribute("data-column", `${j}`);
        row.appendChild(column);
      }
      placementBoard.appendChild(row);
    }

    placementDiv.appendChild(title);
    placementDiv.appendChild(rotateBtn);
    placementDiv.appendChild(placementBoard);

    bodySelector.appendChild(placementDiv);
  }

  function deletePlacement() {
    const overlayDiv = document.querySelector(".overlay");
    const placementDiv = document.querySelector(".placement");
    placementDiv.remove();
    overlayDiv.remove();
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
    renderPlacementBoard,
    renderResetOverlay,
    deleteResetOverlay,
    clearBoards,
    renderPlacement,
    deletePlacement,
  };
}

export default ScreenController;
