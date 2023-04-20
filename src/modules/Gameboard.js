import Ship from "./Ship";

const Gameboard = () => {
  const grid = Array(10)
    .fill()
    .map(() => Array(10).fill(0));

  const ships = [];

  function boundsChecker(coordinate, length) {
    return coordinate + length > 10;
  }

  function vicinityChecker(x, y) {
    const squares = [
      grid?.[x - 1]?.[y],
      grid?.[x + 1]?.[y],
      grid?.[x]?.[y + 1],
      grid?.[x]?.[y - 1],
    ];
    return (
      (squares[0] === 0 || squares[0] === undefined) &&
      (squares[1] === 0 || squares[1] === undefined) &&
      (squares[2] === 0 || squares[2] === undefined) &&
      (squares[3] === 0 || squares[3] === undefined)
    );
  }

  function placeShip(x, y, length, axis) {
    const emptySquares = [];

    if (axis === "column") {
      if (boundsChecker(x, length)) {
        return false;
      }

      for (let i = 0; i < length; i += 1) {
        const coordinateX = x + i;
        if (grid[coordinateX][y] === 0 && vicinityChecker(coordinateX, y)) {
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
        if (grid[x][coordinateY] === 0 && vicinityChecker(x, coordinateY)) {
          emptySquares.push([x, coordinateY]);
        } else {
          return false;
        }
      }
    }

    const ship = Ship(length);
    ships.push(ship);

    emptySquares.forEach(([row, column]) => {
      grid[row][column] = ship;
    });

    return true;
  }

  function receiveAttack(x, y) {
    let isHit = false;

    if (grid[x][y] === 0) {
      isHit = true;
      grid[x][y] = -1;
    } else if (typeof grid[x][y] === "object") {
      isHit = true;
      grid[x][y].hit();
      grid[x][y] = -2;
    }

    return isHit;
  }

  function allShipsSunk() {
    if (ships.length > 0) {
      return ships.every((elem) => elem.isSunk());
    }
    return false;
  }

  return {
    placeShip,
    receiveAttack,
    allShipsSunk,
    grid,
  };
};

export default Gameboard;
