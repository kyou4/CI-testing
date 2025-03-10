//The operation should return the sum of the two numbers.
const { addition } = require("./addition");

test(`2 + 10 = 12`, () => {
  expect(addition(2, 3)).toBe(5);
});

test(`-10 + 7  = -3`, () => {
  expect(addition(-10, 7)).toBe(-3);
});

test.skip("-10 + 7 = -3", () => {
  expect(addition(-10, 7)).toBe(-3);
});
