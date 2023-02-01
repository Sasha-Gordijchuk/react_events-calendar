/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { IEvent } from '../../types/event';
import { EventForm } from '../EventForm';

interface Props {
  event: IEvent
}

export const EventItem: React.FC<Props> = ({ event }) => {
  const [editFormIsVisible, setEditFormIsVisible] = useState<boolean>(false);

  const handleEdit = () => {
    setEditFormIsVisible(true);
  };

  return (
    <>
      <button
        type="button"
        className="cell__event"
        onClick={() => handleEdit()}
      >
        {event.title}
      </button>

      {editFormIsVisible
        && (
          <EventForm
            setFormIsVisible={setEditFormIsVisible}
            event={event}
          />
        )}
    </>
  );
};
