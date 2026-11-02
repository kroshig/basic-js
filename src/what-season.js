const { NotImplementedError } = require("../lib");

function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error("Invalid date!");
  }

  let month;
  try {
    date.getTime();
    month = date.getMonth();
  } catch {
    throw new Error("Invalid date!");
  }

  if (month === 11 || month <= 1) return "winter";
  if (month <= 4) return "spring";
  if (month <= 7) return "summer";
  return "autumn";
}

module.exports = {
  getSeason,
};
