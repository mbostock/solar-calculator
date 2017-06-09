import {radians, sin} from "./math";
import trueLongitude from "./trueLongitude";

// Given t in J2000.0 centuries, returns the sun’s apparent longitude in degrees.
// https://en.wikipedia.org/wiki/Apparent_longitude
export default function(t) {
  return trueLongitude(t) - 0.00569 - 0.00478 * sin(radians(125.04 - 1934.136 * t));
}
