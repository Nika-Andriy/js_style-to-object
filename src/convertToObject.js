'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString.trim().split(';').filter(Boolean);

  return Object.fromEntries(
    pairs.map((pair) => {
      const [key, value] = pair.split(':', 2);

      return [key.trim(), value ? value.trim() : ''].filter((el) => el !== '');
    }),
  );
}

module.exports = convertToObject;
