'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const pairs = sourceString
    .trim()
    .split(';')
    .map((el) => el.trim())
    .filter(Boolean);

  return Object.fromEntries(
    pairs.map((pair) => {
      const [key, value] = pair.split(':', 2);

      return [key.trim(), value ? value.trim() : ''];
    }),
  );
}

module.exports = convertToObject;
