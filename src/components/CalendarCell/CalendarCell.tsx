import React from 'react';

interface Props {
  day: number
}

export const CalendarCell: React.FC<Props> = ({ day }) => {
  return (
    <td className="table__cell cell">{day}</td>
  );
};
