const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let newStr = '';
  let addition = '';

  str = (str === null) ? 'null' : str.toString();
  if (options !== undefined) {
    if (options.addition === null) {
      addition = 'null';
    } else {
      addition = (options.addition === undefined ) ? '' : options.addition.toString();
    }
    let counter = (options.repeatTimes !== undefined) ? options.repeatTimes : 1;
    let separator = (options.separator !== undefined) ? options.separator : '+';
    let additionSeparator = (options.additionSeparator === undefined) ? '' : options.additionSeparator;
    let additionRepeatTimes = (options.additionRepeatTimes !== undefined) ? options.additionRepeatTimes : 1;
    for (let i = 1; i <= counter; i++) {
      newStr = `${newStr}${str}${addition}`;
      if (additionRepeatTimes > 1) {
        for (let j = 1; j < additionRepeatTimes; j++) {
          newStr = `${newStr}${additionSeparator}${addition}`;
        }
      }
      if (i !== counter) {
        newStr = `${newStr}${separator}`;
      }
    }
  } else {
    newStr = `${str}|+`;
  }

  return newStr;
};
  
