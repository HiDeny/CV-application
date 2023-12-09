import { useState } from 'react';

export default function Card({ item, handleChange, handleSubmit }) {
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
          handleChange={handleChange}
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

function Form({ item, handleSubmit, handleChange }) {
  const { schoolName, title, date } = item;

  function handleFieldChange(e) {
    const { value, name } = e.target;

    if (name === 'start' || name === 'end') {
      handleChange({ ...item, date: { ...item.date, [name]: value } });
      return;
    }

    handleChange({ ...item, [name]: value });
  }

  function handleClickRemove() {
    handleChange(item, true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="schoolName">
        School Name
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={schoolName}
          onChange={handleFieldChange}
          required
        />
      </label>

      <label htmlFor="title">
        Title of study
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleFieldChange}
          required
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
            onChange={handleFieldChange}
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
            onChange={handleFieldChange}
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
  const { schoolName, title, date } = item;
  return (
    <div className="view">
      <div className="content">
        <p>{schoolName}</p>
        <p>{title}</p>
        <p>
          {date.start} / {date.end ? date.end : 'Now'}
        </p>
      </div>

      <button type="button" onClick={handleEditClick}>
        EDIT
      </button>
    </div>
  );
}
