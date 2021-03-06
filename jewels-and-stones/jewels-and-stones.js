/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let count = 0;
  const map = {};
  for (let i = 0; i < jewels.length; i++) {
    if (!map[jewels[i]]) {
      map[jewels[i]] = 1;
    }
  }
  for (let i = 0; i < stones.length; i++) {
    if (map[stones[i]]) {
      count++;
    }
  }
  return count;
};