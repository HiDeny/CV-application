import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Skills({ data, updateData }) {
  const content = data.map((skill) => (
    <Skill
      key={skill.id}
      item={skill}
      handleOnChange={handleOnChange}
      handleItemRemove={handleItemRemove}
    />
  ));

  function handleClickAdd() {
    const nextData = [...data];
    const newSkill = { id: uuid(), value: '' };
    nextData.push(newSkill);
    updateData(nextData);
  }

  function handleItemRemove(toRemoveId) {
    const nextData = data.filter((item) => item.id !== toRemoveId);
    updateData(nextData);
  }

  function handleOnChange(e) {
    const { value, dataset } = e.target;
    const { id } = dataset;

    const nextData = data.map((item) => {
      if (item.id === id) item.value = value;
      return item;
    });

    updateData(nextData);
  }

  return (
    <div className="category skills">
      <h2 className="category-title">Skills</h2>
      <ul className="list">{content}</ul>
      <button type="button" onClick={handleClickAdd} className="addBtn">
        +
      </button>
    </div>
  );
}

function Skill({ item, handleOnChange, handleItemRemove }) {
  const { id, value } = item;
  const initialEdit = value === '';
  const [editMode, setEditMode] = useState(initialEdit);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  const correctClass = `skillItem ${!editMode ? 'display' : 'edit'}`;

  return (
    <li className={correctClass}>
      {editMode ? (
        <>
          <input
            type="text"
            data-id={id}
            value={value}
            onChange={handleOnChange}
          />
          <div className="buttons">
            <button
              type="button"
              className="saveBtn"
              disabled={value === ''}
              onClick={toggleEditMode}
            >
              ✔️
            </button>
            <button
              type="button"
              className="removeBtn"
              onClick={() => handleItemRemove(id)}
            >
              ❌
            </button>
          </div>
        </>
      ) : (
        <>
          <p>{value}</p>
          <button type="button" className="editBtn" onClick={toggleEditMode}>
            ✏️
          </button>
        </>
      )}
    </li>
  );
}
