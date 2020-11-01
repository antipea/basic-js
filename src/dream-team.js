const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let  newName = '';
  for ( let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      newName = `${newName}${members[i].trim().slice(0,1).toUpperCase()}`;
    }
  }

  return newName.split('').sort().join('');
};
