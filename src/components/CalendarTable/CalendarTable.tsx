/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React from 'react';
import { getDaysInMonth } from '../../utils/getDaysInMonth';
import { getStringMonth } from '../../utils/getStringMonth';
import { CalendarCell } from '../CalendarCell';

interface Props {
  currentDate: Date;
}

export const CalendarTable: React.FC<Props> = ({ currentDate }) => {
  const days = [];
  const daysCount = getDaysInMonth(
    getStringMonth(currentDate.getMonth()), currentDate.getFullYear(),
  );

  for (let i = 0; i < daysCount; i++) {
    days.push(i + 1);
  }

  console.log(days);

  return (
    <table className="table table--start-day-0">
      {days.map(day => (
        <CalendarCell
          key={day}
          day={day}
        />
      ))}
    </table>
  );
};
