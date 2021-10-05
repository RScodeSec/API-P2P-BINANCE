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

  //globalPrice.push(min);

  console.log(priceNumber);
  // console.log(globalPrice);
  return min;
};

const addHistoryPrice = (price) => {
  if (globalPrice.includes(price)) {
    return;
  }
  globalPrice = globalPrice.slice(0, 5);
  globalPrice.unshift(price);

  saveDB();
};

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

const ggg = () => {
  return globalPrice;
};

module.exports = {
  minPrice,
  ggg,
};
