require("dotenv").config();
const Binance = require("./utils/fech");
const { minPrice, ggg } = require("./utils/logic");

const main = async () => {
  const binance = new Binance();
  const result = await binance.getDataBinance();

  const priceOptimum = minPrice(result);
  console.log(priceOptimum);
  console.log(ggg());
};

main();
