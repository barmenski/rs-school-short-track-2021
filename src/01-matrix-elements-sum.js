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
  const result = [];
  let resultSum = 0;
  if (!matrix[1]) {
    return 0;
  }
  for (let stroka = 0; stroka < matrix.length - 1; stroka++) {
    for (let elem = 0; elem < matrix[stroka].length; elem++) {
      if (matrix[stroka + 1][elem] >= 0) {
        result.push(matrix[stroka][elem]);
      }
    }
  }
  for (let j = 0; j < matrix[matrix.length - 1].length; j++) {
    if (matrix[matrix.length - 2][j] > 0) {
      result.push(matrix[matrix.length - 1][j]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    resultSum += result[i];
  }
  return resultSum;
}

module.exports = getMatrixElementsSum;
