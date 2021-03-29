const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],
  getLength() {
     this.array.length
  },

  addLink(value) {
    this.array.push(`( ${value} )`);
    return this;
   },

  removeLink(position) {
    if (this.array[position - 1]) {
      this.array.splice(position - 1, 1);
      return this;
    } else {    
		this.array = [];
		throw new Error();}
  },

  reverseChain() {
   this.array.reverse()
     return this;
  },
  finishChain() {
    const res = this.array.join("~~")
    this.array = [];
    return res;
  }
};

module.exports = chainMaker;
