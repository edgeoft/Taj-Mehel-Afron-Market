/**
 * Converts a query string into an array of key-value pairs.
 *
 * @param {string} queryString - The query string to convert.
 * @returns {Array<string>} - An array of strings.
 *
 * @example
 * convertQueryStringIntoArray('foo,bar') => [foo, bar]
 * convertQueryStringIntoArray('invalid query string') => []
 */
export const convertQueryStringIntoArray = (queryString: string) => {
  if (!queryString) {
    return [];
  }

  return queryString?.split(',');
};
