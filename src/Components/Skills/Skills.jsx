import { useState } from 'react';

export default function Skills({ data, updateData }) {
  const content = data.map((skill, index) => (
    <Skill index={index} value={skill} handleOnChange={handleOnChange} />
  ));

  function handleOnChange(e) {
    const { value, dataset } = e.target;
    const { index } = dataset;

    const newData = [...data];
    newData[index] = value;

    updateData(newData);
  }

  return (
    <div className="category skills">
      <h2 className="category-title">Skills</h2>
      <ul>{content}</ul>
      <button type="button">Add</button>
    </div>
  );
}

function Skill({ index, value, handleOnChange }) {
  const [editMode, setEditMode] = useState(true);

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <li>
      {editMode ? (
        <>
          <input
            data-index={index}
            type="text"
            id="skill"
            value={value}
            onChange={handleOnChange}
          />
          <button type="button" onClick={toggleEditMode}>
            Save
          </button>
          <button type="button">X</button>
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
