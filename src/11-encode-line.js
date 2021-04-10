/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(/*str*/) {
  throw new Error('Not implemented');

  // let storage = {};
  // let result = '';
  // const strArr = str.split('');
  // strArr.forEach((el, idx) => {
  //   if (el === strArr[idx - 1]) {
  //     if (!storage[el]) {
  //       storage[el] = 2;
  //     } else {
  //       storage += 1;
  //     }
  //   }
  // });
  // strArr.forEach((el) => {
  //   if (storage[el] && result.charAt(result.length - 1) !== el) {
  //     result += `${storage[el]}${el}`;
  //   } else if (!storage[el]) {
  //     result += el;
  //   }
  // });
  // return result;
}

module.exports = encodeLine;
