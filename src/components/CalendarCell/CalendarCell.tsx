/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IEvent } from '../../types/event';
import { normalizeDate } from '../../utils/normalizeDate';

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
  const [isToday, setIsToday] = useState<boolean>(false);
  const [date, setDate] = useState<Date>(new Date(year, month, day));
  const [events] = useLocalStorage('events');
  const [filtredEvents, setFiltredEvents] = useState([]);

  const filter = (array: never[]) => {
    const filtredArray = array.filter((item: any) => (
      item.date === normalizeDate(date)));

    return filtredArray;
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
  }, [month, year]);

  return (
    <div className={isToday
      ? 'table__cell cell cell--today'
      : 'table__cell cell'}
    >
      {filtredEvents && (
        <div className="cell__events">
          {filtredEvents.map((event: any) => (
            <p className="cell__event">{event.title}</p>
          ))}
        </div>
      )}
      <p className="cell__number">{day}</p>
      <p className="cell__day-name">{date.toString().slice(0, 2)}</p>
    </div>
  );
};
