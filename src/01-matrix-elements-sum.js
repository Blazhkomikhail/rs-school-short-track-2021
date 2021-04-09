/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const flatedMatrix = matrix.flat();
  const itemsNumber = matrix[0].length;
  return flatedMatrix.reduce((acc, current, index) => {
    const numberAbove = flatedMatrix[index - itemsNumber];
    return numberAbove !== 0 ? acc + current : acc + 0;
  }, 0);
}

module.exports = getMatrixElementsSum;
