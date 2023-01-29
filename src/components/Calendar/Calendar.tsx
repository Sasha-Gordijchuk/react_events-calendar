/* eslint-disable no-console */
import React from 'react';
import { getStringMonth } from '../../utils/getStringMonth';
import { CalendarTable } from '../CalendarTable';

export const Calendar: React.FC = () => {
  const today = new Date(Date.now());

  console.log(today);

  return (
    <div className="calendar">
      <div className="calendar__header header">
        <button
          type="button"
          className="header__add-button"
        >
          +
        </button>

        <div className="header__month">
          <button type="button" className="header__arrow-button">{'<'}</button>
          <p>
            {`${getStringMonth(today.getMonth())} ${today.getFullYear()}`}
          </p>
          <button type="button" className="header__arrow-button">{'>'}</button>
        </div>
      </div>

      <CalendarTable
        currentDate={today}
      />
    </div>
  );
};
