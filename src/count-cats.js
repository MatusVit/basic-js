module.exports = function countCats(matrix) {
  // throw 'Not implemented';
  // remove line with error and write your code here
  // console.log(matrix);
  return matrix.flat().reduce((acc, elm) => {
    if (elm === '^^') return acc += 1;
    return acc; 
  }, 0)
};
