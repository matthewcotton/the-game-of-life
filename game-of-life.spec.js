import { gameOfLife } from "./game-of-life"

describe("Game OF Life Tests", () => {

    describe("live cell has 1 live neighbours, dies", () => {
        let input = [
            [false, true, false],
            [false, true, false],
            [false, false, false]
        ];
        const result = gameOfLife(input);
        expect(result[1][1]).toBe(false);
    });
});