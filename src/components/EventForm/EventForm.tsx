import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IEvent } from '../../types/event';
import { normalizeDate } from '../../utils/normalizeDate';

interface Props {
  event: IEvent | null
  setFormIsVisible: (value: boolean) => void
  events: IEvent[]
  setEvents: (value: IEvent[]) => void
}

export const EventForm: React.FC<Props> = ({
  event,
  setFormIsVisible,
  events,
  setEvents,
}) => {
  const titleField = useRef<HTMLInputElement>(null);
  const descriptionField = useRef<HTMLTextAreaElement>(null);
  const dateField = useRef<HTMLInputElement>(null);
  const timeField = useRef<HTMLInputElement>(null);
  const [isTitleError, setIsTitleError] = useState<boolean>(false);
  const [isDateError, setIsDateError] = useState<boolean>(false);

  const handleSubmit = () => {
    if (titleField.current?.value === '') {
      setIsTitleError(true);

      return;
    }

    if (dateField.current?.value === '') {
      setIsDateError(true);

      return;
    }

    const newEvent: IEvent = {
      id: uuidv4(),
      title: titleField.current?.value || '',
      description: descriptionField.current?.value || '',
      date: dateField.current?.value || '',
      time: timeField.current?.value || '',
      createdAt: new Date(Date.now()),
      updatedAt: null,
    };

    if (event) {
      newEvent.id = event.id;
      newEvent.createdAt = event.createdAt;
      newEvent.updatedAt = new Date(Date.now());

      setEvents(events.map((ev: IEvent) => {
        if (ev.id === newEvent.id) {
          return newEvent;
        }

        return ev;
      }));
    } else {
      setEvents([...events, newEvent]);
    }

    setFormIsVisible(false);
  };

  const handleDelete = () => {
    if (event) {
      setEvents(events.filter((ev: IEvent) => ev.id !== event.id));
    }

    setFormIsVisible(false);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <div className="modal-card-title">
            <p>
              {event
                ? 'Edit event'
                : 'Add new event'}
            </p>
            {(event)
              && (
                <p className="subtitle is-6">
                  {event.updatedAt
                    ? `Updated at: ${normalizeDate(event.updatedAt, true)}`
                    : `Created at: ${normalizeDate(event.createdAt, true)}`}
                </p>
              )}
          </div>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={() => setFormIsVisible(false)}
          />
        </header>
        <section className="modal-card-body">
          <form>
            <h4 className="input-title">Title*</h4>
            <input
              className={isTitleError
                ? 'input is-danger'
                : 'input'}
              type="text"
              placeholder="Titile goes here"
              ref={titleField}
              defaultValue={event?.title}
              onChange={() => setIsTitleError(false)}
              required
            />
            <h4 className="input-title">Description</h4>
            <textarea
              className="textarea"
              ref={descriptionField}
              defaultValue={`${event?.description || ' '}`}
              onChange={() => descriptionField}
            />

            <div className="datetime">
              <div>
                <h4 className="input-title">Date*</h4>
                <input
                  className={isDateError
                    ? 'input date-input is-danger'
                    : 'input date-input'}
                  type="date"
                  ref={dateField}
                  defaultValue={event?.date}
                  onChange={() => setIsDateError(false)}
                  required
                />
              </div>

              <div>
                <h4 className="input-title">Time begin</h4>
                <input
                  className="input time-input"
                  type="time"
                  ref={timeField}
                  defaultValue={event?.time}
                />
              </div>

            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button
            type="submit"
            className="button is-success"
            onClick={() => handleSubmit()}
          >
            Save changes
          </button>
          {event
            && (
              <button
                type="button"
                className="button is-danger"
                onClick={() => handleDelete()}
              >
                Delete event
              </button>
            )}
          <button
            type="button"
            className="button"
            onClick={() => setFormIsVisible(false)}
          >
            Cancel
          </button>
        </footer>
      </div>

    </div>
  );
};
