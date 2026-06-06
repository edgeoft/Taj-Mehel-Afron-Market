/**
 * Formats a given price in the (Rs) format.
 *
 * @param {number} price The price to be formatted.
 * @returns {string} The formatted price.
 */
export const formatPriceInRs = (price: number): string => {
  // Check if the price is a number
  if (typeof price !== 'number') {
    throw new Error('Price must be a number');
  }
  // Use the toLocaleString method to format the price
  const formattedPrice = price.toLocaleString('en-NP');

  // Add 'Rs. ' to the beginning of the formatted price
  return 'Rs. ' + formattedPrice;
};
