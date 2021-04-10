/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  const numLength = (num).toString().length;
  const possibleNum = [];
  for (let i = 0; i < numLength; i++) {
    const temp = (num).toString().split('');
    temp.splice(i, 1);
    possibleNum.push(Number(temp.join('')));
  }
  return possibleNum.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;
