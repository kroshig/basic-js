const { NotImplementedError } = require("../lib");

class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    for (const item of arr) {
      if (Array.isArray(item)) {
        const currentDepth = 1 + this.calculateDepth(item);
        if (currentDepth > maxDepth) {
          maxDepth = currentDepth;
        }
      }
    }
    return maxDepth;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
