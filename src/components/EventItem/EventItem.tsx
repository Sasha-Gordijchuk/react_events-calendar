import React, { useState } from 'react';
import { IEvent } from '../../types/event';
import { EventForm } from '../EventForm';

interface Props {
  event: IEvent
  events: IEvent[]
  setEvents: (value: IEvent[]) => void
}

export const EventItem: React.FC<Props> = ({
  event,
  events,
  setEvents,
}) => {
  const [editFormIsVisible, setEditFormIsVisible] = useState<boolean>(false);

  const handleEdit = () => {
    setEditFormIsVisible(true);
  };

  return (
    <>
      <div
        className="cell__event"
        role="button"
        tabIndex={0}
        aria-hidden="true"
        onClick={() => handleEdit()}
      >
        {event.title}
      </div>

      {editFormIsVisible
        && (
          <EventForm
            event={event}
            setFormIsVisible={setEditFormIsVisible}
            events={events}
            setEvents={setEvents}
          />
        )}
    </>
  );
};
