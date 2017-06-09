var tape = require("tape"),
    solar = require("../");

tape("declination(2017-06-09T09:42:42-0700) is 22.98°", function(test) {
  test.equal(Math.round(solar.declination(solar.century(new Date("2017-06-09T09:42:42-0700"))) * 100) / 100, 22.98);
  test.end();
});
