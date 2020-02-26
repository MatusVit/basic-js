module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    const result = {};
    result.turns = 2 ** disksNumber;
    result.seconds = result.turns / (turnsSpeed / 3600);
    return result;
}