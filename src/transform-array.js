module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    if (arr.length === 0) return arr;

    const transformArray = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                transformArray.pop();
                break;
            case '--double-next':
                if ((i + 1) !== arr.length) transformArray.push(arr[i + 1]);
                break;
            case '--double-prev':
                if ((i - 1) >= 0) transformArray.push(arr[i - 1]);  
                break;
            default:
                transformArray.push(arr[i]);
        }
    }

    return transformArray;
}
