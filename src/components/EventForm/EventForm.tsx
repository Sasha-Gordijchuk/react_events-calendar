/* eslint-disable no-console */
import React, { useRef, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface Props {
  setAddingFormIsVisible: (value: boolean) => void
}

export const EventForm: React.FC<Props> = ({ setAddingFormIsVisible }) => {
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
      title: titleField.current?.value,
      description: descriptionField.current?.value,
      date: dateField.current?.value,
      time: timeField.current?.value,
      createdAt: Date.now(),
      updatedAt: null,
    };

    console.log(newEvent);

    setEvents([...events, newEvent]);

    setAddingFormIsVisible(false);
  };

  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Add new event</p>
          <button
            type="button"
            className="delete"
            aria-label="close"
            onClick={() => setAddingFormIsVisible(false)}
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
              onChange={() => setIsTitleError(false)}
              required
            />
            <h4 className="input-title">Description</h4>
            <textarea
              className="textarea"
              ref={descriptionField}
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
          <button
            type="button"
            className="button"
            onClick={() => setAddingFormIsVisible(false)}
          >
            Cancel
          </button>
        </footer>
      </div>

    </div>
  );
};
