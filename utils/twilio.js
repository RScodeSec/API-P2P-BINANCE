const cliente = require("twilio")(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
);

const sendSMS = (estate = false, mydata) => {
  if (estate) {
    cliente.messages
      .create({
        to: process.env.MY_PHONE_NUMBER,
        from: process.env.PHONE_NUMBER_TWILIO,
        body: `Price USDT ${mydata} `,
      })
      .then((message) => console.log(message.sid));
  }
};
module.exports = {
  sendSMS,
};
