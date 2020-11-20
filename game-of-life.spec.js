import { gameOfLife } from "./game-of-life"

describe("live cell has 1 live neighbours, dies", () => {
  const result = gameOfLife(1);
  expect(result).toBe(false);
});