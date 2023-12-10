import { useState } from 'react';

export default function Card({ item, handleItemChange, handleSubmit }) {
  const [editMode, setEditMode] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(!editMode);
  }

  return (
    <div className="card experience">
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
  const { name, position, responsibility, date } = item;

  function handleChange(e) {
    const { value, name } = e.target;

    if (name === 'start' || name === 'end') {
      handleItemChange({ ...item, date: { ...item.date, [name]: value } });
      return;
    }

    handleItemChange({ ...item, [name]: value });
  }

  function handleClickRemove(e) {
    const container = e.target.parentElement.parentElement;
    container.classList.add('cardRemove');
    setTimeout(() => {
      handleItemChange(item, true);
    }, 500);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <label htmlFor="companyName">
          Company name
          <input
            type="text"
            id="companyName"
            name="name"
            value={name}
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

        <label htmlFor="responsibility">
          Responsibility
          <textarea
            type="text"
            id="responsibility"
            name="responsibility"
            rows={10}
            value={responsibility}
            onChange={handleChange}
          />
        </label>

        <div className="date">
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
      </div>

      <button type="submit">SAVE</button>
      <button type="button" className="removeBtn" onClick={handleClickRemove}>
        x
      </button>
    </form>
  );
}

function View({ item, handleEditClick }) {
  const { name, responsibility, position, date } = item;
  return (
    <div className="view">
      <div>
        <p>{name}</p>
        <p>{position}</p>
        <p className="responsibility">{responsibility}</p>
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
