const { NotImplementedError } = require('../lib');

function countCats(matrix) {
  let count = 0;
  for (const row of matrix) {
    for (const item of row) {
      if (item === '^^') {
        count++;
      }
    }
  }
  return count;
}

module.exports = {
  countCats
};