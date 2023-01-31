/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
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
  const [daysCount, setDaysCount] = useState<number>(0);
  const days: number[] = [];

  useEffect(() => {
    setDaysCount(getDaysInMonth(
      currentMonth, currentYear,
    ));
  }, [currentMonth, currentYear]);

  for (let i = 0; i < daysCount; i++) {
    days.push(i + 1);
  }

  return (
    <div className="table">
      <div className={`table__body table__body--start-day-${getStartDay(currentMonth, currentYear)}`}>
        {days.map(day => (
          <CalendarCell
            key={day}
            today={today}
            day={day}
            month={currentMonth}
            year={currentYear}
          />
        ))}

      </div>
    </div>
  );
};
