import century from "./century";
import day from "./day";
import equationOfTime from "./equationOfTime";

export default function(date, longitude) {
  var t = century(+day(date) + (12 - longitude * 24 / 360) * 36e5), // Guess local noon.
      t0 = t - longitude / (360 * 36525),
      offset = 720 - longitude * 4 - equationOfTime(t0), // minutes
      t1 = t + offset / (1440 * 36525),
      local = 720 - longitude * 4 - equationOfTime(t1); // minutes
  return new Date(+day(date) + local * 1000 * 60);
}
