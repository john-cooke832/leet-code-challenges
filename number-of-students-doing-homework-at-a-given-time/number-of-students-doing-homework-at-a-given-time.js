/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  let res = 0;
  for (let i = 0; i < startTime.length; i++){
    if (startTime[i] <= queryTime && queryTime <= endTime[i]) {
      res++;
    }
  }
  return res;
};