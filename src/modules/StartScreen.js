function calculateSquaresToFill(x, y, length, axis) {
  let xRef = Number(x);
  let yRef = Number(y);
  const elements = [];
  if (axis === "row" && yRef + length - 1 <= 10) {
    for (let i = 0; i < length; i += 1) {
      elements.push(
        document.querySelector(
          `.placement-gameboard .row[data-row="${xRef}"] .column[data-column="${yRef}"]`
        )
      );
      yRef += 1;
    }
  } else if (axis === "column" && xRef + length - 1 <= 10) {
    for (let i = 0; i < length; i += 1) {
      elements.push(
        document.querySelector(
          `.placement-gameboard .row[data-row="${xRef}"] .column[data-column="${yRef}"]`
        )
      );
      xRef += 1;
    }
  } else {
    elements.push(
      document.querySelector(
        `.placement-gameboard .row[data-row="${xRef}"] .column[data-column="${yRef}"]`
      )
    );
  }

  return elements;
}

const StartScreen = (screen, player) => {
  const lengths = [5, 4, 3, 3, 2];
  let currentShip = 0;
  let axis = "row";
  const { gameboard } = player;

  screen.renderPlacement();

  document.querySelector(".rotate-btn").addEventListener("click", () => {
    axis = axis === "row" ? "column" : "row";
  });

  document
    .querySelectorAll(`.placement-gameboard .row .column`)
    .forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        const elements = calculateSquaresToFill(
          elem.parentElement.dataset.row,
          elem.dataset.column,
          lengths[currentShip],
          axis
        );

        if (elements.length > 1) {
          elements.forEach((square) => {
            const squareRef = square;
            squareRef.style.backgroundColor = "black";
          });
        } else if (elements.length === 1) {
          elements[0].style.backgroundColor = "red";
        }
      });

      elem.addEventListener("mouseleave", () => {
        const elements = calculateSquaresToFill(
          elem.parentElement.dataset.row,
          elem.dataset.column,
          lengths[currentShip],
          axis
        );
        if (elements.length > 0) {
          elements.forEach((square) => {
            const squareRef = square;
            squareRef.style.backgroundColor = "white";
          });
        }
        screen.renderPlacementBoard(gameboard);
      });

      elem.addEventListener("click", () => {
        if (
          gameboard.placeShip(
            elem.parentElement.dataset.row - 1,
            elem.dataset.column - 1,
            lengths[currentShip],
            axis
          )
        ) {
          screen.renderPlacementBoard(gameboard);
          currentShip += 1;
          if (currentShip === 5) {
            screen.deletePlacement();
            screen.renderOwnBoard(player);
          }
        }
      });
    });

  return gameboard;
};

export default StartScreen;
