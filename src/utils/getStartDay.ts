export const getStartDay = (month: number, year: number) => {
  const date = new Date(year, month, 1);

  return date.getDay();
};
