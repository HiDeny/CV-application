import { useState } from 'react';
import './AboutMe.css';

export default function AboutMe({ data, updateData }) {
  const [editMode, setEditMode] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
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
          data={data}
          handleChange={updateData}
          handleSubmit={handleSubmit}
        />
      ) : (
        <View data={data} handleEditClick={toggleEditMode} />
      )}
    </div>
  );
}

function Form({ data, handleSubmit, handleChange }) {
  return (
    <>
      <form onSubmit={handleSubmit} id="aboutMeForm" className="aboutMeForm">
        <textarea
          id="aboutMeForm"
          name="aboutMe"
          value={data}
          placeholder="Something about you..."
          onChange={handleChange}
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
