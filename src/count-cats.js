const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let count = 0;
  for (let j = 0; j < backyard.length; j++) {
    for(let n = 0; n < backyard[j].length; n++) {
      if (backyard[j][n] === '^^') {
        count++;
      }
    }
  }

  return count;
};
