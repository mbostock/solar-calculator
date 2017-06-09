import apparentLongitude from "./apparentLongitude";
import {asin, degrees, radians, sin} from "./math";
import obliquityOfEcliptic from "./obliquityOfEcliptic";

// Given t in J2000.0 centuries, returns the solar declination in degrees.
// https://en.wikipedia.org/wiki/Position_of_the_Sun#Declination_of_the_Sun_as_seen_from_Earth
export default function(t) {
  return degrees(asin(sin(radians(obliquityOfEcliptic(t))) * sin(radians(apparentLongitude(t)))));
}
