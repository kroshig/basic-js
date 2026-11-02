const { NotImplementedError } = require("../lib");

function getMatrixElementsSum(matrix) {
  let sum = 0;
  const cols = matrix[0].length;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) {
        break;
      }
      sum += matrix[i][j];
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
