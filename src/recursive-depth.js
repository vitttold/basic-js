const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let res = 1;
    let counter = 0;
    for (let e of arr) {
      if (Array.isArray(e)) {
        counter = 1 + this.calculateDepth(e);
      }
      if (counter > res) {
        res = counter;
      }
    }
    return res;
  }
};
