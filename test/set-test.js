var d3 = require("d3-time"),
    tape = require("tape"),
    solar = require("../");

tape("set(2017-06-09T09:42:42-0700, 37.7749°N, 122.4194°W) is 2017-06-09T20:30:42-0700", function(test) {
  test.equal(+d3.utcSecond(solar.set(new Date("2017-06-09T09:42:42-0700"), 37.7749, -122.4194)), +new Date("2017-06-09T20:30:52-0700"));
  test.end();
});
