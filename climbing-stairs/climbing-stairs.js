/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let prev = 0;
  let cur = 1;

  for (let i = 0; i < n; i++) {
    cur += prev;
    prev = cur - prev;
  }
  return cur;
};