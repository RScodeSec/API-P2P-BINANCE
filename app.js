require("dotenv").config();
const Binance = require("./utils/fech");
const { minPrice, sendPricesArr, evaluatePrice } = require("./utils/logic");
const { sendSMS } = require("./utils/twilio");
const main = async () => {
  const binance = new Binance();
  const result = await binance.getDataBinance();

  const priceOptimum = minPrice(result);

  //evaluate Min price
  const pricesArr = sendPricesArr();
  const resultMinPrice = evaluatePrice(pricesArr, priceOptimum);
  //twilio
  sendSMS(resultMinPrice, priceOptimum);

  console.log("---------------------------");
  console.log(`arr de precios \n ${pricesArr} `);
  console.log(`Min Price \n ${priceOptimum} `);
  console.log(`Result Evaluation \n ${resultMinPrice} `);
};

setInterval(main(), 60000);
