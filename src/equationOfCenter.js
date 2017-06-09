import {radians, sin} from "./math";
import meanAnomaly from "./meanAnomaly";

// Given t in J2000.0 centuries, returns the sun’s equation of the center in degrees.
// https://en.wikipedia.org/wiki/Equation_of_the_center
export default function(t) {
  var m = radians(meanAnomaly(t)), sinm = sin(m), sin2m = sin(m * 2), sin3m = sin(m * 3);
  return sinm * (1.914602 - t * (0.004817 + 0.000014 * t)) + sin2m * (0.019993 - 0.000101 * t) + sin3m * 0.000289;
}
