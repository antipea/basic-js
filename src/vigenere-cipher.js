const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction = true) {
    if (direction === undefined) throw new Error();
    this.direction = direction;
    this.alphabetArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  }

  encrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error();
    let keyArray = key.toUpperCase().split('');
    let keyPosition = 0;
    let retValue = msg.toUpperCase().split('').map( x => {
      if (this.alphabetArray.indexOf(x) >= 0) {
        let shift = this.alphabetArray.indexOf(keyArray[keyPosition]);
        let newIdx = (shift + this.alphabetArray.indexOf(x)) % this.alphabetArray.length;
        keyPosition = ++keyPosition % keyArray.length;
        return this.alphabetArray[newIdx];
      }
      return x;
    } );
    return this.direction ? retValue.join('') : retValue.reverse().join('');
  }

  decrypt(msg, key) {
    if (msg === undefined || key === undefined) throw new Error();
    let keyArray = key.toUpperCase().split('');
    let keyPosition = 0;
    let retValue = msg.toUpperCase().split('').map( x => {
      if (this.alphabetArray.indexOf(x) >= 0) {
        let shift = this.alphabetArray.indexOf(keyArray[keyPosition]);
        let newIdx = (this.alphabetArray.indexOf(x) - shift);
        if (newIdx < 0) newIdx += this.alphabetArray.length;
        keyPosition = ++keyPosition % keyArray.length;
        return this.alphabetArray[newIdx];
      }
      return x;
    } );
    return this.direction ? retValue.join('') : retValue.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
