/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React from 'react';
import { getDaysInMonth } from '../../utils/getDaysInMonth';
import { getStartDay } from '../../utils/getStartDay';
import { CalendarCell } from '../CalendarCell';

interface Props {
  today: Date;
  currentMonth: number;
  currentYear: number;
}

export const CalendarTable: React.FC<Props> = ({
  today,
  currentMonth,
  currentYear,
}) => {
  const days = [];
  const daysCount = getDaysInMonth(
    currentMonth, currentYear,
  );

  console.log(today);

  for (let i = 0; i < daysCount; i++) {
    days.push(i + 1);
  }

  return (
    <table className={`table table--start-day-${getStartDay(currentMonth, currentYear)}`}>
      {days.map(day => (
        <CalendarCell
          key={day}
          day={day}
        />
      ))}
    </table>
  );
};
