const { NotImplementedError } = require("../lib");

function renameFiles(names) {
  const result = [];
  const used = {};

  for (const name of names) {
    if (used[name]) {
      let k = used[name];
      let newName = `${name}(${k})`;
      while (used[newName]) {
        k++;
        newName = `${name}(${k})`;
      }
      used[name] = k + 1;
      used[newName] = 1;
      result.push(newName);
    } else {
      used[name] = 1;
      result.push(name);
    }
  }

  return result;
}

module.exports = {
  renameFiles,
};
