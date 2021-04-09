/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(str1, str2) {
  const arrayStr1 = str1.split('');
  const arrayStr2 = str2.split('');
  const result = [];
  arrayStr1.forEach((el) => {
    if (arrayStr2.includes(el)) {
      const includesIndex = arrayStr2.indexOf(el);
      arrayStr2.splice(includesIndex, 1);
      result.push(el);
    }
  });
  return result.length;
}

module.exports = getCommonCharacterCount;
