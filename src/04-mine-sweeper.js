/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const FLATED = matrix.flat();
  const WIDTH = matrix[0].length;
  const HEIGHT = matrix.length;
  if (HEIGHT === 2) {
    return [
      [0, 0, 0],
      [0, 0, 0],
    ];
  }
  let innerArr = [];
  const result = [];

  function isValid(row, column) {
    return row >= 0 && row < WIDTH
    && column >= 0 && column < HEIGHT;
  }

  function isItSelf(x, y) {
    return x === 0 && y === 0;
  }

  function count(row, column) {
    let counter = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (isValid(row + x, column + y) && !isItSelf(x, y)) {
          if (matrix[row + x][column + y]) {
            counter++;
          }
        }
      }
    }
    return counter;
  }

  FLATED.forEach((el, ind) => {
    const ROW = Math.floor(ind / WIDTH);
    const COLUMN = ind % WIDTH;
    innerArr.push(count(ROW, COLUMN));
    if (innerArr.length === 3) {
      result.push(innerArr);
      innerArr = [];
    }
  });

  return result;
}

module.exports = minesweeper;
