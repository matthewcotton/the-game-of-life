import { gameOfLife } from "./game-of-life"

describe("Game Of Life", function(){
    var world;
  
    describe("World", function(){
      beforeEach(function(){
        world = new World(5, 5);
      });
  
      it("begins with two dimentions", function(){
        expect(world.cells.length).toBe(25);
      });
  
      it('cells are all dead at begging', function(){
        var allDead = true;
        world.cells.each(function(cell) {
          allDead = allDead && cell.isDead;
        });
        expect(allDead).toBeTruthy();
      });
  
      it('returns a cell given the x and y', function(){
        var cell = world.getCell(2, 1);
        expect(cell).toBeDefined();
        expect(cell.x).toBe(2);
        expect(cell.y).toBe(1);
      });
    });
  
    describe("Cell", function(){
      beforeEach(function(){
        world = new World(5, 5);
      });
  
      it("returns neighbours", function(){
        var cell = world.getCell(1, 1);
        expect(cell.neighbours().length).toBe(8);
        expect(cell.neighbours()).toContain(world.getCell(0, 0));
        expect(cell.neighbours()).toContain(world.getCell(0, 1));
        expect(cell.neighbours()).toContain(world.getCell(0, 2));
        expect(cell.neighbours()).toContain(world.getCell(1, 0));
        expect(cell.neighbours()).toContain(world.getCell(1, 2));
        expect(cell.neighbours()).toContain(world.getCell(2, 0));
        expect(cell.neighbours()).toContain(world.getCell(2, 1));
        expect(cell.neighbours()).toContain(world.getCell(2, 2));
  
        var cell = world.getCell(0, 0);
        expect(cell.neighbours().length).toBe(8);
        expect(cell.neighbours()).toContain(world.getCell(4, 4));
        expect(cell.neighbours()).toContain(world.getCell(4, 0));
        expect(cell.neighbours()).toContain(world.getCell(4, 1));
        expect(cell.neighbours()).toContain(world.getCell(0, 4));
        expect(cell.neighbours()).toContain(world.getCell(0, 1));
        expect(cell.neighbours()).toContain(world.getCell(1, 4));
        expect(cell.neighbours()).toContain(world.getCell(1, 0));
        expect(cell.neighbours()).toContain(world.getCell(1, 1));
  
        var cell = world.getCell(4, 1);
        expect(cell.neighbours().length).toBe(8);
        expect(cell.neighbours()).toContain(world.getCell(3, 0));
        expect(cell.neighbours()).toContain(world.getCell(3, 1));
        expect(cell.neighbours()).toContain(world.getCell(3, 2));
        expect(cell.neighbours()).toContain(world.getCell(4, 0));
        expect(cell.neighbours()).toContain(world.getCell(4, 2));
        expect(cell.neighbours()).toContain(world.getCell(0, 0));
        expect(cell.neighbours()).toContain(world.getCell(0, 1));
        expect(cell.neighbours()).toContain(world.getCell(0, 2));
  
        var cell = world.getCell(1, 4);
        expect(cell.neighbours().length).toBe(8);
        expect(cell.neighbours()).toContain(world.getCell(0, 3));
        expect(cell.neighbours()).toContain(world.getCell(0, 4));
        expect(cell.neighbours()).toContain(world.getCell(0, 0));
        expect(cell.neighbours()).toContain(world.getCell(1, 3));
        expect(cell.neighbours()).toContain(world.getCell(1, 0));
        expect(cell.neighbours()).toContain(world.getCell(2, 3));
        expect(cell.neighbours()).toContain(world.getCell(2, 4));
        expect(cell.neighbours()).toContain(world.getCell(2, 0));
      });
  
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
    })
});