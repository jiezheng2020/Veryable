export default function getDate(date) {
  let newDate = new Date(date);
  let month = newDate.getUTCMonth() + 1;
  let day = newDate.getDate().toString();
  let year = newDate.getFullYear().toString().slice(2);
  let hour = newDate.getUTCHours();
  let minutes = newDate.getUTCMinutes();
  let abbr = "AM";

  if (minutes < 10) minutes = `0${minutes.toString()}`;
  if (hour > 12) {
    hour = hour - 12;
    abbr = "PM";
  }
  return `${month}/${day}/${year} ${hour}:${minutes} ${abbr}`;
}
