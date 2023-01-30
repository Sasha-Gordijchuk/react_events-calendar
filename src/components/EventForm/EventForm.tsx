import React from 'react';

interface Props {
  setAddingFormIsVisible: (value: boolean) => void
}

export const NewEvent: React.FC<Props> = ({ setAddingFormIsVisible }) => {
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
              className="input"
              type="text"
              placeholder="Titile goes here"
              required
            />
            <h4 className="input-title">Description</h4>
            <textarea className="textarea" />

            <div className="datetime">
              <div>
                <h4 className="input-title">Date*</h4>
                <input className="input date-input" type="date" />
              </div>

              <div>
                <h4 className="input-title">Time begin</h4>
                <input className="input time-input" type="time" />
              </div>

            </div>
          </form>
        </section>
        <footer className="modal-card-foot">
          <button type="button" className="button is-success">
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
