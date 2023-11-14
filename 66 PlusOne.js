/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  lastIndex = digits.length - 1
    while(true) {
      digits[lastIndex] = digits[lastIndex] + 1
      if(digits[lastIndex] >= 10) {
        digits[lastIndex] = 0;
        lastIndex--
        if(lastIndex == -1) {
          digits.push(0)
          digits[0] = 1
          return digits;
        }
      } else return digits;
    }
};
