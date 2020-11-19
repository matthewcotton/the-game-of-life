import { gameOfLife } from "./game-of-life"

describe("Game Of Life", function(){
    it("#1: any live cell with fewer than two live neighbours dies, as if caused by under-population", function(){
        var liveCell = world.getCell(0, 0);
        liveCell.live();
        world.tick();
        expect(liveCell.isDead()).toBeTruthy();
  
        var liveCellWithOneNeighbour = world.getCell(0, 0);
        var cellAtRight = world.getCell(0, 1);
        liveCellWithOneNeighbour.live();
        cellAtRight.live();
        world.tick();
        expect(liveCellWithOneNeighbour.isDead()).toBeTruthy();
        expect(cellAtRight.isDead()).toBeTruthy();
      })
    });