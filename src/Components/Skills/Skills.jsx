import { useState } from 'react';

export default function Skills({ data, updateData }) {
  const content = data.map((skill) => (
    <Skill
      key={skill.id}
      item={skill}
      handleOnChange={handleOnChange}
      handleItemRemove={handleItemRemove}
    />
  ));

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
      <ul>{content}</ul>
      <button type="button">Add</button>
    </div>
  );
}

function Skill({ item, handleOnChange, handleItemRemove }) {
  const [editMode, setEditMode] = useState(true);
  const { id, value } = item;

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <li>
      {editMode ? (
        <>
          <input
            data-id={id}
            type="text"
            id="skill"
            value={value}
            onChange={handleOnChange}
          />
          <button type="button" onClick={toggleEditMode}>
            Save
          </button>
          <button type="button" onClick={() => handleItemRemove(id)}>
            X
          </button>
        </>
      ) : (
        <>
          <p>{value}</p>
          <button type="button" onClick={toggleEditMode}>
            Edit
          </button>
        </>
      )}
    </li>
  );
}
