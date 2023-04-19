import Ship from "./Ship";

test("Ship can be created", () => {
  const ship = Ship(1);
  expect(ship.isSunk()).toBe(false);
});

test("Ship of length 1 can be sunk", () => {
  const ship = Ship(1);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Ship of length 3 can be sunk", () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Repeated hits don't change the sunken ship state", () => {
  const ship = Ship(1);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});

test("Ship doesn't sink until hit enough times", () => {
  const ship = Ship(3);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(false);
});
