/**
 * Simple implementation of Conway’s Game of Life
 * Returns true for alive cell and false for dead cell 
 * 
 * @param {number} input 
 */
function gameOfLife(aliveNeighbours) {

    // When number of alive neighbours is 2 or higher
    if (aliveNeighbours >= "4") {
        return false
    }

    if (aliveNeighbours >= "2") {
        return true
    }
    // Default return false
    return false;
   }

export { gameOfLife };