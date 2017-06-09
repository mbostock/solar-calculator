import {cos, radians} from "./math";

// Given t in J2000.0 centuries, returns the obliquity of the Earth’s ecliptic in degrees.
export default function(t) {
  var e0 = 23 + (26 + (21.448 - t * (46.815 + t * (0.00059 - t * 0.001813))) / 60) / 60,
      omega = 125.04 - 1934.136 * t,
      e = e0 + 0.00256 * cos(radians(omega));
  return e;
}
