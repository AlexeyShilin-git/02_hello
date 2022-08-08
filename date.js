const moment = require("moment");
moment().local("ru");

function currentDateTime() {
  return { date: moment(Date.now()).format("YYYY-MM-DD"), time: moment(Date.now()).format("HH:mm:ss") };
}

module.exports = currentDateTime();
