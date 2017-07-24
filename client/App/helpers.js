
// ========>> STRING <<========

/**
 * Capitalize the first letter of the string
 * @param  {string} str - Target string
 * @return {string}        - Target string with capitalized first letter
 */
const capitalizeFirstLetter = str => (
  str[0].toUpperCase() + str.slice(1)
);


// ========>> EXPORT <<========

export default {
  capitalizeFirstLetter
};
