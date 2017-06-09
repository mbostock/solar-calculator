var tape = require("tape"),
    solar = require("../");

tape("hours(2017-06-09T13:09:12-0700, 37.7749°N) is 14.74 hours", function(test) {
  test.equal(Math.round(solar.hours(new Date("2017-06-09T13:09:12-0700"), 37.7749) * 100) / 100, 14.72);
  test.end();
});
