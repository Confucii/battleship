const Ship = (lengthInput) => {
  let hits = 0;
  const length = lengthInput;
  let sunkStatus = false;

  function hit() {
    if (hits !== length) hits += 1;
  }

  function isSunk() {
    sunkStatus = length - hits === 0;
    return sunkStatus;
  }

  return {
    hit,
    isSunk,
    length,
  };
};

export default Ship;
