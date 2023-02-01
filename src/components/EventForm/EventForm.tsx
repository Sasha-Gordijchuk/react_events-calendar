/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { IEvent } from '../../types/event';

interface Props {
  setFormIsVisible: (value: boolean) => void
  event: IEvent | null
}

export const EventForm: React.FC<Props> = ({ setFormIsVisible, event }) => {
  const titleField = useRef<HTMLInputElement>(null);
  const descriptionField = useRef<HTMLTextAreaElement>(null);
  const dateField = useRef<HTMLInputElement>(null);
  const timeField = useRef<HTMLInputElement>(null);
  const [events, setEvents] = useLocalStorage('events', []);

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

    const newEvent = {
      id: uuidv4(),
      title: titleField.current?.value,
      description: descriptionField.current?.value,
      date: dateField.current?.value,
      time: timeField.current?.value,
      createdAt: Date.now(),
      updatedAt: null,
    };

    setEvents([...events, newEvent]);

    setFormIsVisible(false);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            {event
              ? 'Edit event'
              : 'Add new event'}
          </p>
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
              value={event?.title}
              onChange={() => setIsTitleError(false)}
              required
            />
            <h4 className="input-title">Description</h4>
            <textarea
              className="textarea"
              ref={descriptionField}
              value={`${event?.description}`}
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
                  value={event?.date}
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
                  value={event?.date}
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
