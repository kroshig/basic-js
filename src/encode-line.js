const { NotImplementedError } = require("../lib");

function encodeLine(str) {
  return str.replace(/(.)\1+/g, (match) => match.length + match[0]);
}

module.exports = {
  encodeLine,
};
