var tape = require("tape"),
    solar = require("../");

tape("equationOfTime(2017-06-09T09:42:42-0700) is 0.66 minutes", function(test) {
  test.equal(Math.round(solar.equationOfTime(solar.century(new Date("2017-06-09T09:42:42-0700"))) * 100) / 100, 0.66);
  test.end();
});
