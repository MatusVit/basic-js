module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!arr.some((item) => Array.isArray(item))) return 1;

        return arr.reduce((acc, elm) => {
          let count = 1;
          if (Array.isArray(elm)) {
            count += this.calculateDepth(elm);
          }
    
          if (count > acc) acc = count;
          return acc;
        }, 1)
    }
};