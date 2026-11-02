const { NotImplementedError } = require("../lib");

function deleteDigit(n) {
  const str = String(n);
  let max = 0;

  for (let i = 0; i < str.length; i++) {
    const current = Number(str.slice(0, i) + str.slice(i + 1));
    if (current > max) {
      max = current;
    }
  }

  return max;
}

module.exports = {
  deleteDigit,
};
