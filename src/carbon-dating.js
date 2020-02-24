const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  const number = parseFloat(sampleActivity);
  if (typeof sampleActivity === 'string' 
      && number
      && number < MODERN_ACTIVITY
      && number > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / number) * HALF_LIFE_PERIOD / 0.693)
  }
  return false;
};
