import Ship from "./Ship";

const Gameboard = () => {
  const grid = Array(10)
    .fill()
    .map(() => Array(10).fill(0));

  function boundsChecker(coordinate, length) {
    return coordinate + length > 10;
  }

  function placeShip(x, y, length, axis) {
    const emptySquares = [];
    const ship = Ship(length);

    if (axis === "column") {
      if (boundsChecker(x, length)) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        const coordinateX = x + i;
        if (grid[coordinateX][y] === 0) {
          emptySquares.push([coordinateX, y]);
        } else {
          return false;
        }
      }
    } else if (axis === "row") {
      if (boundsChecker(y, length)) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        const coordinateY = y + i;
        if (grid[x][coordinateY] === 0) {
          emptySquares.push([x, coordinateY]);
        } else {
          return false;
        }
      }
    }

    emptySquares.forEach((elem) => {
      grid[elem[0]][elem[1]] = ship;
    });

    return true;
  }

  function printGrid() {
    let output = "";
    grid.forEach((row) => {
      row.forEach((column) => {
        if (column) {
          output += `${column?.length} `;
        } else {
          output += `${column} `;
        }
      });
      output += "\n";
    });
    console.log(output);
  }

  return {
    placeShip,
    printGrid,
  };
};

export default Gameboard;
