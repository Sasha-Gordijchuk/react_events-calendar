/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { getStringMonth } from '../../utils/getStringMonth';
import { CalendarTable } from '../CalendarTable';

export const Calendar: React.FC = () => {
  const today = new Date(Date.now());
  const [currentMonth, setCurrentMonth] = useLocalStorage('month', today.getMonth());
  const [currentYear] = useLocalStorage('year', today.getFullYear());

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

  return (
    <div className="calendar">
      <div className="calendar__header header">
        <button
          type="button"
          className="button is-info"
        >
          +
        </button>

        <div className="header__months-switcher">
          <button
            type="button"
            className="header__arrow-button"
            onClick={() => handleChangeMonthPrev()}
          >
            {'<'}
          </button>
          <p className="header__corrent-mounth">
            {`${getStringMonth(currentMonth)} ${currentYear}`}
          </p>
          <button
            type="button"
            className="header__arrow-button"
            onClick={() => handleChangeMonthNext()}
          >
            {'>'}
          </button>
        </div>
      </div>

      <CalendarTable
        today={today}
        currentMonth={currentMonth}
        currentYear={currentYear}
      />
    </div>
  );
};
