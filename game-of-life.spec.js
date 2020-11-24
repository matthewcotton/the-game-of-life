import { gameOfLife } from "./game-of-life"

describe ("Game of Life Tests:", () => {
it("live cell has 1 live neighbours, dies", () => {
  const result = gameOfLife("1");
  expect(result).toBe(false);
})

it("live cell with fewer than 2 live neighbours, dies", () => {
  const result = gameOfLife("2");
  expect(result).toBe(true);
})

it("live cell has more than 3 live neighbours, dies", () => {
  const result = gameOfLife("4");
  expect(result).toBe(false);
})
});