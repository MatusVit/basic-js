module.exports = function getSeason(date) {
    if (date === undefined) return 'Unable to determine the time of year!';
    if ( isNaN(date) ) throw new Error();
    
    const month = date.getMonth();
    if (month < 2 || month === 11) return 'winter';
    if (month > 1 && month < 5) return 'spring';
    if (month > 4 && month < 8) return 'summer';
    if (month > 7 && month < 11) return 'autumn';
     
};
