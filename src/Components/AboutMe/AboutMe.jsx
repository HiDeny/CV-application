import { useState } from 'react';
import './AboutMe.css';

export default function AboutMe({ data, updateData }) {
  const [editMode, setEditMode] = useState(true);
  const [newData, setNewData] = useState(data);

  function handleSubmit(e) {
    e.preventDefault();
    updateData(newData);
    toggleEditMode();
  }

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <div className="category aboutMe">
      <h2 className="category-title">About Me</h2>
      {editMode ? (
        <Form
          data={newData}
          handleChange={setNewData}
          handleSubmit={handleSubmit}
        />
      ) : (
        <View data={data} handleEditClick={toggleEditMode} />
      )}
    </div>
  );
}

function Form({ data, handleSubmit, handleChange }) {
  function handleOnChange(e) {
    const { value } = e.target;

    handleChange(value);
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="aboutMeForm">
        <textarea
          id="aboutMeForm"
          name="aboutMe"
          value={data}
          placeholder="Something about you..."
          onChange={handleOnChange}
          required
        />
      </form>
      <button type="submit" form="aboutMeForm">
        SAVE
      </button>
    </>
  );
}

function View({ data, handleEditClick }) {
  return (
    <>
      <div className="view">
        <pre>{data}</pre>
      </div>
      <button type="button" onClick={handleEditClick}>
        EDIT
      </button>
    </>
  );
}
