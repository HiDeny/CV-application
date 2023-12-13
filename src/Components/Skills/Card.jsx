import { useState } from 'react';

export default function Card({ item, handleOnChange, handleItemRemove }) {
  const { id, value } = item;
  const initialEdit = value === '';
  const [editMode, setEditMode] = useState(initialEdit);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  if (editMode) {
    return (
      <CardEdit
        key={id}
        id={id}
        value={value}
        handleChange={handleOnChange}
        handleRemove={handleItemRemove}
        toggleEdit={toggleEditMode}
      />
    );
  }

  return <CardDisplay key={id} value={value} toggleEdit={toggleEditMode} />;
}

function CardEdit({ id, value, handleChange, toggleEdit, handleRemove }) {
  return (
    <li className="skillItem edit">
      <input
        type="text"
        data-id={id}
        value={value}
        maxLength={25}
        onChange={handleChange}
      />
      <div className="buttons">
        <button
          type="button"
          className="saveBtn"
          disabled={value === ''}
          onClick={toggleEdit}
        >
          ✔️
        </button>
        <button
          type="button"
          className="removeBtn"
          onClick={() => handleRemove(id)}
        >
          ❌
        </button>
      </div>
    </li>
  );
}

function CardDisplay({ value, toggleEdit }) {
  return (
    <li className="skillItem display">
      <p>{value}</p>
      <button type="button" className="editBtn" onClick={toggleEdit}>
        ✏️
      </button>
    </li>
  );
}
