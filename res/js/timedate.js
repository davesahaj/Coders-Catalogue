// UTC

function timezone(D) {}

function getDuration(T) {
  return parseFloat(T / 3600);
}

function splitTime(D) {
  D = new Date(Date.parse(D));
  let Days = 0;
  let Hours = D.getHours();
  let Minutes = D.getMinutes();

  return { Days: Days, Hours: Hours, Minutes: Minutes };
}
