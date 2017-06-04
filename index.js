var J2000 = Date.UTC(2000, 0, 1, 12),
    abs = Math.abs,
    acos = Math.acos,
    asin = Math.asin,
    cos = Math.cos,
    max = Math.max,
    min = Math.min,
    sin = Math.sin,
    tan = Math.tan,
    epsilon = 1e-6,
    pi = Math.PI,
    tau = 2 * pi,
    radians = pi / 180,
    degrees = 180 / pi;

export default function(location) {
  var longitude = location[0],
      minutesOffset = 720 - longitude * 4,
      x = location[0] * radians,
      y = location[1] * radians,
      cy = cos(y),
      sy = sin(y);

  function position(date) {
    var centuries = (date - J2000) / (864e5 * 36525),
        theta = solarDeclination(centuries),
        ctheta = cos(theta),
        stheta = sin(theta),
        azimuth = ((date - d3.utcDay.floor(date)) / 864e5 * tau + equationOfTime(centuries) + x) % tau - pi,
        zenith = acos(max(-1, min(1, sy * stheta + cy * ctheta * cos(azimuth)))),
        azimuthDenominator = cy * sin(zenith);

    if (azimuth < -pi) azimuth += tau;
    if (abs(azimuthDenominator) > epsilon) azimuth = (azimuth > 0 ? -1 : 1) * (pi - acos(max(-1, min(1, (sy * cos(zenith) - stheta) / azimuthDenominator))));
    if (azimuth < 0) azimuth += tau;

    // Correct for atmospheric refraction.
    var atmosphere = 90 - zenith * degrees;
    if (atmosphere <= 85) {
      var te = tan(atmosphere * radians);
      zenith -= (atmosphere > 5 ? 58.1 / te - .07 / (te * te * te) + .000086 / (te * te * te * te * te)
          : atmosphere > -.575 ? 1735 + atmosphere * (-518.2 + atmosphere * (103.4 + atmosphere * (-12.79 + atmosphere * .711)))
          : -20.774 / te) / 3600 * radians;
    }

    // Note: if zenith > 108°, it’s dark.
    return [azimuth * degrees, 90 - zenith * degrees];
  }

  function noon(date) {
    var centuries = (d3.utcDay.floor(date) - J2000) / (864e5 * 36525),
        minutes = (minutesOffset - (equationOfTime(centuries + (minutesOffset - (equationOfTime(centuries - longitude / (360 * 365.25 * 100)) * degrees * 4)) / (1440 * 365.25 * 100)) * degrees * 4) - date.getTimezoneOffset()) % 1440;
    if (minutes < 0) minutes += 1440;
    return new Date(+d3.timeDay.floor(date) + minutes * 60 * 1000);
  }

  return {
    position: position,
    noon: noon
  };
};

function equationOfTime(centuries) {
  var e = eccentricityEarthOrbit(centuries),
      m = solarGeometricMeanAnomaly(centuries),
      l = solarGeometricMeanLongitude(centuries),
      y = tan(obliquityCorrection(centuries) / 2);
  y *= y;
  return y * sin(2 * l)
      - 2 * e * sin(m)
      + 4 * e * y * sin(m) * cos(2 * l)
      - 0.5 * y * y * sin(4 * l)
      - 1.25 * e * e * sin(2 * m);
}

function solarDeclination(centuries) {
  return asin(sin(obliquityCorrection(centuries)) * sin(solarApparentLongitude(centuries)));
}

function solarApparentLongitude(centuries) {
  return solarTrueLongitude(centuries) - (0.00569 + 0.00478 * sin((125.04 - 1934.136 * centuries) * radians)) * radians;
}

function solarTrueLongitude(centuries) {
  return solarGeometricMeanLongitude(centuries) + solarEquationOfCenter(centuries);
}

function solarGeometricMeanAnomaly(centuries) {
  return (357.52911 + centuries * (35999.05029 - 0.0001537 * centuries)) * radians;
}

function solarGeometricMeanLongitude(centuries) {
  var l = (280.46646 + centuries * (36000.76983 + centuries * 0.0003032)) % 360;
  return (l < 0 ? l + 360 : l) / 180 * pi;
}

function solarEquationOfCenter(centuries) {
  var m = solarGeometricMeanAnomaly(centuries);
  return (sin(m) * (1.914602 - centuries * (0.004817 + 0.000014 * centuries))
      + sin(m + m) * (0.019993 - 0.000101 * centuries)
      + sin(m + m + m) * 0.000289) * radians;
}

function obliquityCorrection(centuries) {
  return meanObliquityOfEcliptic(centuries) + 0.00256 * cos((125.04 - 1934.136 * centuries) * radians) * radians;
}

function meanObliquityOfEcliptic(centuries) {
  return (23 + (26 + (21.448 - centuries * (46.8150 + centuries * (0.00059 - centuries * 0.001813))) / 60) / 60) * radians;
}

function eccentricityEarthOrbit(centuries) {
  return 0.016708634 - centuries * (0.000042037 + 0.0000001267 * centuries);
}
