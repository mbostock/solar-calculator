var epoch = Date.UTC(2000, 0, 1, 12); // J2000.0

export default function(date) {
  return (date - epoch) / 315576e7;
}
