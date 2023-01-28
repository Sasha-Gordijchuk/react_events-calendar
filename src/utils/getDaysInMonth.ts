import { Month } from '../types/month';
import { isLeapYear } from './isLeapYear';

export const getDaysInMonth = (month: Month, year: number) => {
  switch (month) {
    case 'jan':
    case 'mar':
    case 'may':
    case 'jul':
    case 'aug':
    case 'oct':
    case 'dec':
      return 31;

    case 'apr':
    case 'jun':
    case 'sep':
    case 'nov':
      return 30;

    case 'feb': {
      if (isLeapYear(year)) {
        return 29;
      }

      return 28;
    }

    default:
      return NaN;
  }
};
