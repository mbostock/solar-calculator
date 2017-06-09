import noon from "./noon";
import riseHourAngle from "./riseHourAngle";

export default function(date, latitude, longitude) {
  date = noon(date, longitude);
  return new Date(+date + riseHourAngle(date, latitude) * 4 * 1000 * 60);
}
