const CustomError = require("../extensions/custom-error");

const chainMaker = {
  res: [],

  getLength() {
    return this.res.length;
  },

  addLink(value) {
    this.res.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if(position - 1 < 0 || position - 1 >= this.getLength() || position === `${position}`) {
      this.res = [];
      throw new Error();
    }
    this.res.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.res.reverse();
    return this;
  },

  finishChain() {
    const result = this.res.join('~~');
    this.res = [];
    return result;
  }
};

module.exports = chainMaker;
