import century from "./century";
import declination from "./declination";
import riseHourAngle from "./riseHourAngle";

export default function(date, latitude) {
  var delta = -riseHourAngle(date, latitude);
  if (isNaN(delta)) {
    delta = declination(century(date));
    return (latitude < 0 ? delta < 0.833 : delta > -0.833) * 24;
  }
  return 8 * delta / 60;
}
