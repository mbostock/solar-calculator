var d3 = require("d3-time"),
    tape = require("tape"),
    solar = require("../");

tape("riseHourAngle is negative for sunrise", function(test) {
  test.equal(+d3.utcSecond(solar.noon(new Date("2017-06-09T09:42:42-0700"), -122.4194)), +new Date("2017-06-09T13:09:12-0700"));
  test.end();
});
