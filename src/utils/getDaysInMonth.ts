import { isLeapYear } from './isLeapYear';

export const getDaysInMonth = (month: number, year: number) => {
  switch (month) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
      return 31;

    case 3:
    case 5:
    case 8:
    case 10:
      return 30;

    case 1: {
      if (isLeapYear(year)) {
        return 29;
      }

      return 28;
    }

    default:
      return NaN;
  }
};
