const { NotImplementedError } = require("../lib");

function repeater(str, options = {}) {
  const repeatTimes = options.repeatTimes ?? 1;
  const separator = options.separator ?? "+";
  const addition =
    options.addition !== undefined ? String(options.addition) : "";
  const additionRepeatTimes = options.additionRepeatTimes ?? 1;
  const additionSeparator = options.additionSeparator ?? "|";

  const fullAddition = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);
  return Array(repeatTimes)
    .fill(String(str) + fullAddition)
    .join(separator);
}

module.exports = {
  repeater,
};
