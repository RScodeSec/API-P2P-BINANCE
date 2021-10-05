require("dotenv").config();
const Binance = require("./utils/fech");
const { minPrice } = require("./utils/logic");

const main = async () => {
  const binance = new Binance();
  const result = await binance.getDataBinance();
  //console.log(result);
  const priceOptimum = minPrice(result);
  console.log(priceOptimum);
};

main();
