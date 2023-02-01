/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { getStringMonth } from '../../utils/getStringMonth';
import { CalendarTable } from '../CalendarTable';
import { EventForm } from '../EventForm';

export const Calendar: React.FC = () => {
  const today = new Date(Date.now());
  const [currentMonth, setCurrentMonth] = useLocalStorage('month', today.getMonth());
  const [currentYear, setCurrentYear] = useLocalStorage('year', today.getFullYear());
  const [addingFormIsVisible, setAddingFormIsVisible] = useState<boolean>(false);

  const handleChangeMonthNext = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleChangeMonthPrev = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleChangeMonth = (event: any) => {
    setCurrentMonth((+event.target.value.slice(5)) - 1);
    setCurrentYear(+event.target.value.slice(0, 4));
  };

  return (
    <div className="calendar">
      <div className="calendar__header header">
        <button
          type="button"
          className="button is-info is-rounded"
          onClick={() => setAddingFormIsVisible(true)}
        >
          +
        </button>

        <div className="header__months-switcher">
          <button
            type="button"
            className="button is-black is-inverted"
            onClick={() => handleChangeMonthPrev()}
          >
            {'<'}
          </button>
          <p className="header__current-mounth">
            {`${getStringMonth(currentMonth)} ${currentYear}`}
          </p>
          <button
            type="button"
            className="button is-black is-inverted"
            onClick={() => handleChangeMonthNext()}
          >
            {'>'}
          </button>

          <input
            type="month"
            className="button header__month-input"
            onChange={(event) => handleChangeMonth(event)}
          />
        </div>
      </div>

      <CalendarTable
        today={today}
        currentMonth={currentMonth}
        currentYear={currentYear}
      />

      {
        addingFormIsVisible && (
          <EventForm
            event={null}
            setFormIsVisible={setAddingFormIsVisible}
          />
        )
      }
    </div>
  );
};
