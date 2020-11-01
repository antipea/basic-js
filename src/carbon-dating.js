const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!sampleActivity) {
    return false;
  } else if (!(typeof sampleActivity === "string")) {
    return false;
  } else if (isNaN(parseFloat(sampleActivity))) {
    return false;
  }
  if (parseFloat(sampleActivity) >= MODERN_ACTIVITY || parseFloat(sampleActivity) <= 0) {
    return false;
  }
  const year = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/(0.693/HALF_LIFE_PERIOD));

  return year;
};
