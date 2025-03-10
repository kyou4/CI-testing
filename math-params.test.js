const { addition } = require("./addition.js");

test.each([
  [3, 4, 7],
  [5, -10, -5],
  [0, 3, 3],
])(`a+b=c`, (a, b, expected) => {
  expect(addition(a, b)).toBe(expected);
});
