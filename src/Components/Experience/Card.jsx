import { useState } from 'react';

export default function Card({ item, handleItemChange, handleSubmit }) {
  const [editMode, setEditMode] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(!editMode);
  }

  return (
    <div className="card education">
      {editMode ? (
        <Form
          key={item.id}
          item={item}
          handleItemChange={handleItemChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <View
          key={item.id}
          item={item}
          handleEditClick={() => setEditMode(true)}
        />
      )}
    </div>
  );
}

function Form({ item, handleSubmit, handleItemChange }) {
  const { companyName, position, details, date } = item;

  function handleChange(e) {
    const { value, name } = e.target;

    if (name === 'start' || name === 'end') {
      handleItemChange({ ...item, date: { ...item.date, [name]: value } });
      return;
    }

    handleItemChange({ ...item, [name]: value });
  }

  function handleClickRemove() {
    handleItemChange(item, true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="companyName">
        Company name
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={companyName}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="position">
        Position
        <input
          type="text"
          id="position"
          name="position"
          value={position}
          onChange={handleChange}
          required
        />
      </label>

      <label htmlFor="details">
        Details
        <textarea
          type="text"
          id="details"
          name="details"
          value={details}
          onChange={handleChange}
        />
      </label>

      <div>
        <p>Date</p>

        <label htmlFor="start">
          Start
          <input
            type="date"
            id="start"
            name="start"
            value={date.start}
            max={date.end}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="end">
          End
          <input
            type="date"
            id="end"
            name="end"
            value={date.end}
            min={date.start}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">SAVE</button>
      <button type="button" className="removeBtn" onClick={handleClickRemove}>
        x
      </button>
    </form>
  );
}

function View({ item, handleEditClick }) {
  const { companyName, details, position, date } = item;
  return (
    <div className="view">
      <div>
        <p>{companyName}</p>
        <p>{details}</p>
        <p>{position}</p>
        <p>
          {date.start} / {date.end ? date.end : 'Now'}
        </p>
      </div>

      <button type="button" onClick={handleEditClick} className="editBtn">
        EDIT
      </button>
    </div>
  );
}
