import { useState } from 'react';

export default function Card({ item, handleChange, handleRemove }) {
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
          handleChange={handleChange}
          handleRemove={handleRemove}
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

function Form({ item, handleSubmit, handleChange, handleRemove }) {
  const { name, position, responsibility, date } = item;

  function handleItemChange(e) {
    const { value, name } = e.target;
    const newItem = { ...item };

    if (name === 'start' || name === 'end') {
      newItem.date = { ...newItem.date, [name]: value };
    } else {
      newItem[name] = value;
    }

    handleChange(newItem);
  }

  function handleClickRemove(e) {
    const container = e.target.parentElement.parentElement;
    container.classList.add('cardRemove');
    setTimeout(() => {
      handleRemove(item.id);
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
            onChange={handleItemChange}
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
            onChange={handleItemChange}
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
            maxLength="200"
            onChange={handleItemChange}
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
              onChange={handleItemChange}
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
              onChange={handleItemChange}
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
      <div className="content">
        <div className="text">
          <p>{name}</p>
          <p>{position}</p>
          {responsibility && (
            <div className="responsibility">
              <p>{responsibility}</p>
            </div>
          )}
        </div>

        <div className="date">
          <p>
            {date.start} / {date.end ? date.end : 'Now'}
          </p>
        </div>
      </div>

      <button type="button" onClick={handleEditClick} className="editBtn">
        EDIT
      </button>
    </div>
  );
}
