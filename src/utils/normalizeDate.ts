export const normalizeDate = (date: Date, withTime = false) => {
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString();
  let day = date.getDate().toString();
  let time;

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  if (withTime) {
    time = `${date.getHours()}:${date.getMinutes()}`;

    return `${year}-${month}-${day} ${time}`;
  }

  return `${year}-${month}-${day}`;
};
