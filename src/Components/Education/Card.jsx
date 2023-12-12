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
  const { name, title, date } = item;

  function handleFieldChange(e) {
    const { value, name } = e.target;

    if (name === 'start' || name === 'end') {
      handleChange({ ...item, date: { ...item.date, [name]: value } });
      return;
    }

    handleChange({ ...item, [name]: value });
  }

  function handleClickRemove(e) {
    const container = e.target.parentElement.parentElement;
    container.classList.add('cardRemove');
    setTimeout(() => {
      handleChange(item, true);
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <div className="text">
          <label htmlFor="schoolName">
            School Name
            <input
              type="text"
              id="schoolName"
              name="name"
              value={name}
              placeholder=""
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
              placeholder=""
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className="date">
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
      </div>

      <button type="submit">SAVE</button>
      <button type="button" className="removeBtn" onClick={handleClickRemove}>
        x
      </button>
    </form>
  );
}

function View({ item, handleEditClick }) {
  const { name, title, date } = item;
  return (
    <div className="view">
      <div className="content">
        <div className="text">
          <p>{name}</p>
          <p>{title}</p>
        </div>
        <div className="date">
          <p>
            {date.start} / {date.end ? date.end : 'Now'}
          </p>
        </div>
      </div>

      <button type="button" onClick={handleEditClick}>
        EDIT
      </button>
    </div>
  );
}
