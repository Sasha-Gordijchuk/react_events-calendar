import { Month } from '../types/month';
import { isLeapYear } from './isLeapYear';

export const getDaysInMonth = (month: Month, year: number) => {
  switch (month) {
    case 'January':
    case 'March':
    case 'May':
    case 'July':
    case 'August':
    case 'October':
    case 'December':
      return 31;

    case 'April':
    case 'June':
    case 'September':
    case 'November':
      return 30;

    case 'February': {
      if (isLeapYear(year)) {
        return 29;
      }

      return 28;
    }

    default:
      return NaN;
  }
};
