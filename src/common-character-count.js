const { NotImplementedError } = require('../lib');

function getCommonCharacterCount(s1, s2) {
  const arr2 = s2.split('');
  let count = 0;

  for (const char of s1) {
    const index = arr2.indexOf(char);
    if (index !== -1) {
      count++;
      arr2.splice(index, 1);
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};