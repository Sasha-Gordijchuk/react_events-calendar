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
}

export const CalendarCell: React.FC<Props> = ({
  today,
  day,
  month,
  year,
}) => {
  const [events] = useLocalStorage('events');
  const [date, setDate] = useState<Date>(new Date(year, month, day));
  const [isToday, setIsToday] = useState<boolean>(false);
  const [filtredEvents, setFiltredEvents] = useState([]);

  const filter = (array: never[]) => {
    if (array) {
      const filtredArray = array.filter((item: any) => (
        item.date === normalizeDate(date)));

      return filtredArray;
    }

    return [];
  };

  useEffect(() => {
    const filtredEv = filter(events);

    setFiltredEvents(filtredEv);
    setDate(new Date(year, month, day));

    console.log(filtredEvents);
  }, []);

  useEffect(() => {
    if (date
      && (today.toString().slice(0, 15) === date.toString().slice(0, 15))
    ) {
      setIsToday(true);
    }
  }, []);

  return (
    <div className={isToday
      ? 'table__cell cell cell--today'
      : 'table__cell cell'}
    >
      {filtredEvents && (
        <div className="cell__events">
          {filtredEvents.map((event: IEvent) => (
            <EventItem
              key={event.id}
              event={event}
            />

          ))}
        </div>
      )}
      <p className="cell__number">{day}</p>
      <p className="cell__day-name">{date.toString().slice(0, 2)}</p>
    </div>
  );
};
