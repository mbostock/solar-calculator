import {cos, degrees, pow, radians, sin, tan} from "./math";
import meanLongitude from "./meanLongitude";
import meanAnomaly from "./meanAnomaly";
import obliquityOfEcliptic from "./obliquityOfEcliptic";
import orbitEccentricity from "./orbitEccentricity";

// Given t in J2000.0 centuries, returns the equation of time in minutes.
// https://en.wikipedia.org/wiki/Equation_of_time
export default function(t) {
  var epsilon = obliquityOfEcliptic(t),
      l0 = meanLongitude(t),
      e = orbitEccentricity(t),
      m = meanAnomaly(t),
      y = pow(tan(radians(epsilon) / 2), 2),
      sin2l0 = sin(2 * radians(l0)),
      sinm = sin(radians(m)),
      cos2l0 = cos(2 * radians(l0)),
      sin4l0 = sin(4 * radians(l0)),
      sin2m = sin(2 * radians(m)),
      Etime = y * sin2l0 - 2 * e * sinm + 4 * e * y * sinm * cos2l0 - 0.5 * y * y * sin4l0 - 1.25 * e * e * sin2m;
  return degrees(Etime) * 4;
}
