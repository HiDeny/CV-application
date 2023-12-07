import { useState } from 'react';
import { FieldEdit, FieldDisplay } from './Field';

export default function Card({
  item,
  handleChange,
  handleRemove,
  setDisplayReady,
}) {
  const [editMode, setEditMode] = useState(true);
  if (editMode) setDisplayReady(false);

  const fields = Object.entries(item).map(([key, value]) =>
    editMode ? (
      <FieldEdit item={key} value={value} handleChange={handleFieldChange} />
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
      const oldDate = item.Date;
      const newDate = { ...oldDate, [name]: value };
      updatedValue = newDate;
    }

    handleChange({ ...item, [key]: updatedValue });
  }
  function handleEditChange() {
    setEditMode(true);
  }

  function handleCardSubmit(e) {
    e.preventDefault();
    setEditMode(false);
    setDisplayReady(true);
    // handleEditChange();
  }

  if (editMode) {
    return (
      <form onSubmit={handleCardSubmit} className="card">
        <h3 className="card-title">{item.Name || 'Name'}</h3>
        {fields}
        {handleRemove && (
          <button
            type="button"
            className="removeBtn"
            onClick={() => handleRemove(item)}
          >
            X
          </button>
        )}
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
      <button className="editBtn" type="button" onClick={handleEditChange}>
        Edit
      </button>
    </div>
  );
}
