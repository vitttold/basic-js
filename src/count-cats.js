const CustomError = require("../extensions/custom-error");

module.exports = function countCats(e) {
  throw new CustomError('Not implemented');

  let newArr = [];
  for (let i = 0; i < e.length; i++) {
    newArr = newArr.concat(e[i]);
}
  newArr = newArr.filter(item => item === "^^");
  //return newArr.length
};
