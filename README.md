Equations based on [NOAA’s Solar Calculator](http://www.esrl.noaa.gov/gmd/grad/solcalc/).

Examples:

* [Solar Analemmas](http://bl.ocks.org/mbostock/c5504ab3cd25f93af26a)

## API Reference

<a name="apparentLongitude" href="#apparentLongitude">#</a> solar.<b>apparentLongitude</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/apparentLongitude.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the Sun’s [apparent longitude](https://en.wikipedia.org/wiki/Apparent_longitude) in degrees.

<a name="century" href="#century">#</a> solar.<b>century</b>(<i>date</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/century.js "Source")

Given a [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), returns the fraction number of centures since the J2000.0 epoch, 2000-01-01T12:00:00Z. (No correction is made between Terrestrial Time and UTC.)

<a name="declination" href="#declination">#</a> solar.<b>declination</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/declination.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the Sun’s [declination](https://en.wikipedia.org/wiki/Declination) in degrees.

<a name="equationOfCenter" href="#equationOfCenter">#</a> solar.<b>equationOfCenter</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/equationOfCenter.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the Sun and Earth’s [equation of the center](https://en.wikipedia.org/wiki/Equation_of_the_center) in degrees.

<a name="equationOfTime" href="#equationOfTime">#</a> solar.<b>equationOfTime</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/equationOfTime.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the Sun and Earth’s [equation of time](https://en.wikipedia.org/wiki/Equation_of_time) in minutes.

<a name="hours" href="#hours">#</a> solar.<b>hours</b>(<i>date</i>, <i>latitude</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/hours.js "Source")

Given a [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and a <i>latitude</i> in degrees, returns the number of daylight hours.

<a name="meanAnomaly" href="#meanAnomaly">#</a> solar.<b>meanAnomaly</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/meanAnomaly.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the Sun’s [mean anomaly](https://en.wikipedia.org/wiki/Mean_anomaly) in degrees.

<a name="meanLongitude" href="#meanLongitude">#</a> solar.<b>meanLongitude</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/meanLongitude.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the Sun’s [mean longitude](https://en.wikipedia.org/wiki/Mean_longitude) in degrees.

<a name="noon" href="#noon">#</a> solar.<b>noon</b>(<i>date</i>, <i>longitude</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/noon.js "Source")

Given a [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and a <i>longitude</i> in degrees, returns the time of the [solar noon](https://en.wikipedia.org/wiki/Noon#Solar_noon). (TODO This description isn’t quite right, because the date is first floored to the UTC day boundary and then adjusted based on the specified *longitude*.)

<a name="obliquityOfEcliptic" href="#obliquityOfEcliptic">#</a> solar.<b>obliquityOfEcliptic</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/obliquityOfEcliptic.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the [obliquity of the ecliptic](https://en.wikipedia.org/wiki/Ecliptic#Obliquity_of_the_ecliptic) in degrees.

<a name="orbitEccentricity" href="#orbitEccentricity">#</a> solar.<b>orbitEccentricity</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/orbitEccentricity.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns Earth’s [orbital eccentricity](https://en.wikipedia.org/wiki/Orbital_eccentricity).

<a name="riseHourAngle" href="#riseHourAngle">#</a> solar.<b>riseHourAngle</b>(<i>date</i>, <i>latitude</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/riseHourAngle.js "Source")

Given a [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and a <i>latitude</i> in degrees, returns the [hour angle](https://en.wikipedia.org/wiki/Hour_angle) of sunrise on the given day in degrees.

<a name="rise" href="#rise">#</a> solar.<b>rise</b>(<i>date</i>, <i>latitude</i>, <i>longitude</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/rise.js "Source")

Given a [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and a <i>latitude</i> and <i>longitude</i> in degrees, returns the time of sunrise. (TODO Describe more precisely the date of the returned sunrise.)

<a name="set" href="#set">#</a> solar.<b>set</b>(<i>date</i>, <i>latitude</i>, <i>longitude</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/set.js "Source")

Given a [date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and a <i>latitude</i> and <i>longitude</i> in degrees, returns the time of sunset. (TODO Describe more precisely the date of the returned sunset.)

<a name="trueLongitude" href="#trueLongitude">#</a> solar.<b>trueLongitude</b>(<i>t</i>) [<>](https://github.com/mbostock/solar-calculator/blob/master/src/trueLongitude.js "Source")

Given a time *t* in [J2000.0 centuries](#century), returns the Sun’s [true longitude](https://en.wikipedia.org/wiki/True_longitude) in degrees.
