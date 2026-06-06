/**
 * Creates a URL that can be used to access the contents of a File object.
 *
 * @param {File} value - The File object to create a URL for.
 * @returns {string} A URL that can be used to access the contents of the File object.
 */
export const getImageUrl = (value: File | string) => {
  if (typeof value === 'string') return value;
  const url = URL.createObjectURL(value);
  return url;
};
