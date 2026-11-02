const { NotImplementedError } = require("../lib");

function isMAC48Address(n) {
  return /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(n);
}

module.exports = {
  isMAC48Address,
};
