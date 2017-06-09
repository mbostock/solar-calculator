import century from "./century";
import declination from "./declination";
import {acos, cos, degrees, radians, tan} from "./math";

export default function(date, latitude) {
  var phi = radians(latitude), theta = radians(declination(century(date)));
  return -degrees(acos(cos(radians(90.833)) / (cos(phi) * cos(theta)) - tan(phi) * tan(theta)));
}
