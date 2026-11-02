const { NotImplementedError } = require("../lib");

function sortByHeight(arr) {
  const sorted = arr.filter((x) => x !== -1).sort((a, b) => a - b);
  let idx = 0;
  return arr.map((x) => (x === -1 ? -1 : sorted[idx++]));
}

module.exports = {
  sortByHeight,
};
