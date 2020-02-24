module.exports = function countCats(matrix) {
  return matrix.flat().reduce((acc, elm) => {
    if (elm === '^^') return acc += 1;
    return acc; 
  }, 0)
};
