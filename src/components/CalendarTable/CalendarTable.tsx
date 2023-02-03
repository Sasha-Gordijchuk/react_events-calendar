/* eslint-disable no-plusplus */
import React, { useEffect, useState } from 'react';
import { IEvent } from '../../types/event';
import { getDaysInMonth } from '../../utils/getDaysInMonth';
import { getStartDay } from '../../utils/getStartDay';
import { normalizeDate } from '../../utils/normalizeDate';
import { CalendarCell } from '../CalendarCell';

interface Props {
  today: Date;
  currentMonth: number;
  currentYear: number;
  events: IEvent[];
  setEvents: (value: IEvent[]) => void
}

export const CalendarTable: React.FC<Props> = ({
  today,
  currentMonth,
  currentYear,
  events,
  setEvents,
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

  const filter = (array: IEvent[], day: number) => {
    if (array) {
      const filtredArray = array.filter((item: IEvent) => (
        item.date === normalizeDate(
          new Date(currentYear, currentMonth, day),
        )));

      return filtredArray;
    }

    return [];
  };

  return (
    <div className="table">
      <div className={`table__body table__body--start-day-${getStartDay(currentMonth, currentYear)}`}>
        {days.map(day => {
          const eventsOnThisDay = filter(events, day);

          return (
            <CalendarCell
              key={day}
              today={today}
              day={day}
              month={currentMonth}
              year={currentYear}
              eventsOnThisDay={eventsOnThisDay}
              events={events}
              setEvents={setEvents}
            />
          );
        })}

      </div>
    </div>
  );
};
