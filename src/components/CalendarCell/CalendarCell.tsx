import React from 'react';

interface Props {
  day: number
}

export const CalendarCell: React.FC<Props> = ({ day }) => {
  return (
    <div className="table__cell cell">
      <p className="cell__number">{day}</p>
    </div>
  );
};
