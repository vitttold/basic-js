const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  throw new CustomError('Not implemented');
  function dateSample( sampleActivity ) {
    if (typeof(sampleActivity) !== 'sting' || sampleActivity > MODERN_ACTIVITY
           || sampleActivity <= 0 || isNaN(sampleActivity)) {
    return false ;
  } else {
    return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/( 0.693/HALF_LIFE_PERIOD));
   };
   }}  