module.exports = function repeater(str, options) {
    let string = String(str);
    let {repeatTimes = 1,
        separator = '+',
        addition = '',
        additionRepeatTimes = 1,
        additionSeparator = '|'
     } = options;

    let arr = new Array(additionRepeatTimes).fill(String(addition));
    let element = `${string}${arr.join(additionSeparator)}`;

    return new Array(repeatTimes).fill(element).join(separator);
};
