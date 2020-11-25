import { gameOfLife } from "./game-of-life"

describe ("Game of Life Tests:", () => {
it("live cell has 1 live neighbours, dies", () => {
  const result = gameOfLife("1", "alive");
  expect(result).toBe(false);
})

it("live cell has 3 live neighbours, lives", () => {
  const result = gameOfLife("2", "alive");
  expect(result).toBe(true);
})

it("live cell has more than 3 live neighbours, dies", () => {
  const result = gameOfLife("4", "alive");
  expect(result).toBe(false);
})

it("live cell has 3 live neighbours, lives", () => {
  const result = gameOfLife("3", "alive");
  expect(result).toBe(true);
})

it("dead cell with less than 3 neighbours, stays dead", () => {
  const result = gameOfLife("2", "dead");
  expect(result).toBe(true);
})
});