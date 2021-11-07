/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Base condition
  if (haystack == null || needle == null) return -1;

  // Special case
  if (haystack == needle) return 0;

  // length of the needle
  let needleLength = needle.length;

  for (let index = 0; index < haystack.length - needleLength; index++) {
    // Check if the substring equals to the needle
    if (haystack.substring(index, index + needleLength) === needle) {
      return index;
    }
  }
  return -1;
};

const haystack = "hello";
const needle = "ll";
console.log(strStr(haystack, needle));
