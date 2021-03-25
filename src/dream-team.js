const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  throw new CustomError('Not implemented');
  let newArr = members.filter(e => typeof e === 'string');
  newArr = newArr.map(e => e.trim()).map(e => e[0]).map(e => e.toUpperCase());
  newArr = newArr.sort().join("");

return newArr;
};
