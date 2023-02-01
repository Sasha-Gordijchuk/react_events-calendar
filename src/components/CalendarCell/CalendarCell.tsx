/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IEvent } from '../../types/event';
import { normalizeDate } from '../../utils/normalizeDate';
import { EventItem } from '../EventItem';

interface Props {
  today: Date,
  day: number,
  month: number,
  year: number,
  eventsOnThisDay: IEvent[],
  events: IEvent[]
  setEvents: (value: IEvent[]) => void
}

export const CalendarCell: React.FC<Props> = ({
  today,
  day,
  month,
  year,
  eventsOnThisDay,
  events,
  setEvents,
}) => {
  const [date, setDate] = useState<Date>(new Date(year, month, day));
  const [isToday, setIsToday] = useState<boolean>(false);

  useEffect(() => {
    setDate(new Date(year, month, day));
  }, [month, year]);

  useEffect(() => {
    if (date
      && (today.toString().slice(0, 15) === date.toString().slice(0, 15))
    ) {
      setIsToday(true);
    } else {
      setIsToday(false);
    }
  }, [date]);

  return (
    <div className={isToday
      ? 'table__cell cell cell--today'
      : 'table__cell cell'}
    >
      {eventsOnThisDay && (
        <div className="cell__events">
          {eventsOnThisDay.map((event: IEvent) => (
            <EventItem
              key={event.id}
              event={event}
              events={events}
              setEvents={setEvents}
            />

          ))}
        </div>
      )}
      <p className="cell__number">{day}</p>
      <p className="cell__day-name">{date.toString().slice(0, 2)}</p>
    </div>
  );
};
