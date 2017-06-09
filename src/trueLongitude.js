import meanLongitude from "./meanLongitude";
import equationOfCenter from "./equationOfCenter";

// Given t in J2000.0 centuries, returns the sun’s true longitude in degrees.
// https://en.wikipedia.org/wiki/True_longitude
export default function(t) {
  return meanLongitude(t) + equationOfCenter(t);
}
