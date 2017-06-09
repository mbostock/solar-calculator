export default function(date) {
  date = new Date(+date);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
