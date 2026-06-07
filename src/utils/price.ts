/**
 * Formats a given price in Euro (€) format for the Finnish market.
 */
export const formatPriceInRs = (price: number): string => {
  if (typeof price !== 'number') {
    throw new Error('Price must be a number');
  }

  const formattedPrice = price.toLocaleString('fi-FI', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return '€' + formattedPrice;
};
