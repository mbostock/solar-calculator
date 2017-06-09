import century from "./century";
import day from "./day";
import equationOfTime from "./equationOfTime";

export default function(date, longitude) {
  var t = century(+day(date) + (12 - longitude * 24 / 360) * 36e5), // First approximation.
      o1 = 720 - longitude * 4 - equationOfTime(t - longitude / (360 * 36525)), // First correction.
      o2 = 720 - longitude * 4 - equationOfTime(t + o1 / (1440 * 36525)); // Second correction.
  return new Date(+day(date) + o2 * 1000 * 60);
}
