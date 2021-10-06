const fs = require("fs");
/* 
1. choose the lowest price
2. add to list
*/

let globalPrice = [];
const path = "./db/data.json";

const minPrice = (prices = []) => {
  let priceNumber = prices.map((i) => Number(i));
  let min = Math.min(...priceNumber);
  addHistoryPrice(min);

  //console.log(priceNumber);
  return min;
};

const addHistoryPrice = (price) => {
  if (globalPrice.includes(price)) {
    return;
  }
  globalPrice = globalPrice.slice(0, 10);
  globalPrice.unshift(price);

  saveDB();
};

const evaluatePrice = (prices = [], price) => {
  const copyPrices = [];

  for (let i = 1; i < prices.length; i++) {
    copyPrices.push(prices[i]);
  }
  const mypriceMin = Math.min(...copyPrices);
  if (price <= mypriceMin) {
    // return data;
    //|| price <= price + 0.15
    return true;
  } else {
    return false;
  }
};
/*
----------------Persistent Data----------
*/
const saveDB = () => {
  const payload = {
    prices: globalPrice,
  };
  fs.writeFileSync(path, JSON.stringify(payload));
};

const readDB = (() => {
  if (!fs.existsSync(path)) {
    return;
  }
  const info = fs.readFileSync(path, "utf8");
  const data = JSON.parse(info);
  globalPrice = data.prices;
})();

const sendPricesArr = () => {
  return globalPrice;
};

module.exports = {
  minPrice,
  sendPricesArr,
  evaluatePrice,
};
