import { gameOfLife } from "./game-of-life"

describe ("cell", () => {
it("live cell has 1 live neighbours, dies", () => {
  const result = gameOfLife("1");
  expect(result).toBe(false);
})


it("live cell with fewer than 2 live neighbours, dies", () => {
  const result = gameOfLife("2")
  expect(result).toBe(true);
})
});