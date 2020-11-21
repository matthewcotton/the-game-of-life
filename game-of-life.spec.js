import { gameOfLife } from "./game-of-life"

describe ("cell", () => {
it("live cell has 1 live neighbours, dies", () => {
  const result = gameOfLife("1");
  expect(result).toBe(false);
})
});