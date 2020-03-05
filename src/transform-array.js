module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error();
    let transformArray = arr.reduce((acc, elm, index, array) => {
        if (elm === '--double-next') {
            if (array[index + 1]) acc.push(array[index + 1]);
        } else {
            acc.push(elm);
        }
        return acc;
    }, []);

    transformArray = transformArray.reduce((acc, elm, index, array) => {
        if (elm === '--double-prev') {
            if (array[index - 1]) acc.push(array[index - 1]);
        } else {
            acc.push(elm);
        }
        return acc;
    }, []);
   
    transformArray = transformArray.reduce((acc, elm, index, array) => {
        if (elm === '--discard-prev') {
            if (array[index - 1]) acc.slice(index - 1, 1);
        } else {
            acc.push(elm);
        }
        return acc;
    }, []);

    transformArray = transformArray.reduce((acc, elm, index, array) => {
        if (elm === '--discard-next') {
            if (array[index + 1]) array.slice(index + 1, 1);
        } else {
            acc.push(elm);
        }
        return acc;
    }, []);

    return transformArray;
}
