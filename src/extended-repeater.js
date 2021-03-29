const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
 
  if (!options.hasOwnProperty('repeatTimes')) {options.repeatTimes = 1}
  if (!options.hasOwnProperty('separator')) {options.separator = "+"}
  if (options.hasOwnProperty('addition') && options.addition == null) {options.addition = "null"}
  if (!options.hasOwnProperty('additionRepeatTimes')) {options.additionRepeatTimes = 1}
  if (!options.hasOwnProperty('additionSeparator')) {options.additionSeparator = "|"}
  
  
  let arrAdd = []
  arrAdd.length = options.additionRepeatTimes
  let addAddition = arrAdd.fill(options.addition).join(options.additionSeparator)
  
  let resArr = []
  resArr.length = options.repeatTimes
  let resStr = resArr.fill(str + addAddition).join(options.separator)
  
  return resStr
  
  
  };  