const { default: axios } = require("axios");
class Binance {
  get paramsBinance() {
    return {
      page: 1,
      rows: 20,
      payTypes: [process.env.PAYTYPES],
      asset: process.env.ASSET,
      tradeType: process.env.TRADETYPE,
      fiat: process.env.FIAT,
      publisherType: null,
      merchantCheck: false,
    };
  }

  async getDataBinance() {
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:91.0) Gecko/20100101 Firefox/91.0",
      Accept: "*/*",
      "Accept-Language": "es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3",
      "Accept-Encoding": "gzip, deflate",
      lang: "es",
      "Content-Type": "application/json",
    };

    const response = await axios.post(
      "https://p2p.binance.com/bapi/c2c/v2/friendly/c2c/adv/search",
      this.paramsBinance,
      { headers: headers }
    );
    //let [{ adv }] = response.data.data;

    return response.data.data.map((element) => element.adv.price);
  }
}

module.exports = Binance;
