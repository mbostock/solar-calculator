// Given t in J2000.0 centuries, returns the sun’s mean anomaly in degrees.
// https://en.wikipedia.org/wiki/Mean_anomaly
export default function(t) {
  return 357.52911 + t * (35999.05029 - 0.0001537 * t);
}
