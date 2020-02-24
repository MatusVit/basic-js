module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members.reduce((acc, elem) => {
    if (typeof elem  === 'string') acc.push(elem.trim().slice(0, 1).toUpperCase());
    return acc;
  }, []).sort().join('');
};