const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let resultCount = 0;
      if (Array.isArray(arr)) {
        let count = 0;
        for (let i = 0; i < arr.length; i++) {
          count = Math.max(this.calculateDepth(arr[i]), count)
        }
        resultCount = count + 1;
      }
      return resultCount;
  }
  
};
