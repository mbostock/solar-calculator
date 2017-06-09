var tape = require("tape"),
    solar = require("../");

tape("riseHourAngle(2017-06-09T09:42:42-0700, 37.7749°N) is -110.40°", function(test) {
  test.equal(Math.round(solar.riseHourAngle(new Date("2017-06-09T09:42:42-0700"), 37.7749) * 100)  / 100, -110.40);
  test.end();
});
