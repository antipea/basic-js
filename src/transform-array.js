const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  if (Array.isArray(arr) === false) {
    throw new Error();
  }

  let  newArr = [];
  for ( let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
      continue;
    } else if (arr[i] === '--discard-prev') {
      if (arr[i - 2] !== '--discard-next') {
        newArr.pop();
      }
    } else if (arr[i] === '--double-next') {
      if (arr[i + 1] !== undefined) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === '--double-prev') {
      if (arr[i - 2] === '--discard-next') {
        continue;
      }
      if (arr[i - 1] !== undefined) {
        newArr.push(arr[i - 1]);
      }
    } else {
      newArr.push(arr[i]);
    }
    if (arr[i - 1] === '--discard-next') {
      newArr.pop();
    }
  }

  return newArr;
};
