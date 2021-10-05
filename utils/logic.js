/* 
choose the lowest price
*/
const minPrice = (prices = []) => {
  let priceNumber = prices.map((i) => Number(i));
  let min = Math.min(...priceNumber);
  console.log(priceNumber);
  return min;
};

module.exports = {
  minPrice,
};
