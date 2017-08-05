
// ========>> STRING <<========

/**
 * Capitalize the first letter of the string
 * @param  {string} str - Target string
 * @return {string}        - Target string with capitalized first letter
 */
const capitalizeFirstLetter = (str) => {
  const newString = str.trim();
  return newString[0].toUpperCase() + newString.slice(1);
};


// ========>> EXPORT <<========

export default {
  capitalizeFirstLetter
};
