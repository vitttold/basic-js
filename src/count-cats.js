const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(e) {
  // throw new NotImplementedError('Not implemented');
  let newArr = [];
  for (let i = 0; i < e.length; i++) {
    newArr = newArr.concat(e[i]);
}
  newArr = newArr.filter(item => item === "^^");
 return newArr.length
};

module.exports = {
  countCats
};
