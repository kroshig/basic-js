const { NotImplementedError } = require("../lib");

function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          if (matrix[r + dr] && matrix[r + dr][c + dc]) {
            count++;
          }
        }
      }
      result[r][c] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper,
};
