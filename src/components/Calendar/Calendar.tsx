import React from 'react';
import { CalendarCell } from '../CalendarCell';

export const Calendar: React.FC = () => {
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button type="button">+</button>

        <div className="month">
          <button type="button">{'<'}</button>
          <p>January 2023</p>
          <button type="button">{'>'}</button>
        </div>
      </div>

      <CalendarCell />
    </div>
  );
};
