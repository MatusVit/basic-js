const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {

  // console.log(`${sampleActivity} - ${typeof sampleActivity}`);
  
  if (((typeof sampleActivity) === 'string') 
        && Number.isFinite(+sampleActivity)
        && +sampleActivity < MODERN_ACTIVITY
        && +sampleActivity > 0) {
    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693)
  }
  return false;
};
