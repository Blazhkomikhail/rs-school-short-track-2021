/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  const regsArr = new Set();
  let splitedDomains = [];
  splitedDomains = domains.map((el) => el.split('.'));
  /* create regexps */
  splitedDomains.forEach((domain) => {
    regsArr.add(`${domain[domain.length - 1]}`);
    if (domain.length === 2) {
      regsArr.add(`${domain[0]}.${domain[1]}`);
    } else {
      regsArr.add(`${domain[0]}.${domain[1]}.${domain[2]}`);
    }
  });
  regsArr.forEach((regexp) => {
    let counter = 0;
    domains.forEach((domain) => {
      if (new RegExp(regexp).test(domain)) {
        counter++;
      }
    });
    const prepairKey = `.${regexp.split('.').reverse().join('.')}`;
    result[prepairKey] = counter;
  });
  return result;
}

module.exports = getDNSStats;
