import { useState } from 'react';

export default function Card({ item, onChange, onRemove }) {
  const [editMode, setEditMode] = useState(true);
  const fields = Object.entries(item).map(([key, value]) =>
    editMode ? (
      <FieldEdit item={key} value={value} onChange={handleFieldChange} />
    ) : (
      <FieldDisplay item={key} value={value} />
    )
  );

  function handleFieldChange(e) {
    const { value, name } = e.target;
    let key = name;
    let updatedValue = value;

    if (name === 'Start' || name === 'End') {
      key = ['Date'];
      const oldDate = item['Date'];
      const newDate = { ...oldDate, [name]: value };
      updatedValue = newDate;
    }

    onChange({ ...item, [key]: updatedValue });
  }

  function handleEditChange() {
    setEditMode(!editMode);
  }

  function handleCardSubmit(e) {
    e.preventDefault();
    handleEditChange();
  }

  if (editMode) {
    return (
      <form onSubmit={handleCardSubmit} className="card">
        <h3 className="card-title">{item.Name || 'Name'}</h3>
        {fields}
        <button
          type="button"
          className="removeBtn"
          onClick={() => onRemove(item)}
        >
          X
        </button>
        <button type="submit" className="saveBtn">
          SAVE
        </button>
      </form>
    );
  }

  return (
    <div className="card">
      <h3 className="card-title">{item.Name || 'Name'}</h3>
      <div className="content">{fields}</div>
      <button className="editBtn" onClick={handleEditChange}>
        Edit
      </button>
    </div>
  );
}

function FieldEdit({ item, value, onChange }) {
  let inputType = 'text';

  if (item === 'id') return;
  if (item === 'Email') inputType = 'email';
  if (item === 'Phone Number') inputType = 'tel';
  if (item === 'Date') {
    return (
      <DateInput
        item={item}
        start={value.Start}
        end={value.End}
        onChange={onChange}
      />
    );
  }

  return (
    <label>
      {item}
      <input
        type={inputType}
        name={item}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

function FieldDisplay({ item, value }) {
  if (item === 'id') return;
  if (item === 'Date') {
    return (
      <div className="date">
        <p>{value.Start}</p>
        <p>{value.End}</p>
      </div>
    );
  }

  return <p>{value}</p>;
}

function DateInput({ start, end, onChange }) {
  return (
    <label className="date">
      Date (Start/End)
      <input
        className="dateStart"
        type="date"
        name="Start"
        value={start}
        onChange={onChange}
        required
      />
      <input
        className="dateEnd"
        type="date"
        name="End"
        value={end}
        onChange={onChange}
      />
    </label>
  );
}
