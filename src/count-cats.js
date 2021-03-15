const CustomError = require("../extensions/custom-error");

module.exports = function countCats(e) {
  throw new CustomError('Not implemented');

  let newArr = [];
  let newArr2 = [];
  
  for (let i = 0; i < e.length; i++) {
    newArr = newArr.concat(e[i]);
}
  newArr2 = newArr.filter(item => '^^');
  return newArr2.length
};
