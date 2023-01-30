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
    <div className="table">
      <div className="table__head">
        <p className="table__day">Monday</p>
        <p className="table__day">Tuesday</p>
        <p className="table__day">Wednesday</p>
        <p className="table__day">Thurstday</p>
        <p className="table__day">Friday</p>
        <p className="table__day">Saturnday</p>
        <p className="table__day">Sunday</p>
      </div>
      <div className={`table__body table__body--start-day-${getStartDay(currentMonth, currentYear)}`}>
        {days.map(day => (
          <CalendarCell
            key={day}
            day={day}
          />
        ))}

      </div>
    </div>
  );
};
