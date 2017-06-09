// Given t in J2000.0 centuries, returns the sun’s mean longitude in degrees.
// https://en.wikipedia.org/wiki/Mean_longitude
export default function(t) {
  var l = (280.46646 + t * (36000.76983 + t * 0.0003032)) % 360;
  return l < 0 ? l + 360 : l;
}
