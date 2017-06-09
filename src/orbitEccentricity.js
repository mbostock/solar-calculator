// Given t in J2000.0 centuries, returns eccentricity.
// https://en.wikipedia.org/wiki/Orbital_eccentricity
export default function(t) {
  return 0.016708634 - t * (0.000042037 + 0.0000001267 * t);
}
