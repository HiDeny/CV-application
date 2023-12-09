import { useState } from 'react';

export default function Education({ data, updateData }) {
  const [editMode, setEditMode] = useState(true);
  const [newData, setNewData] = useState(data);

  function handleSubmit(e) {
    e.preventDefault();
    updateData(newData);
    setEditMode(false);
  }

  function handleSchoolUpdate(updatedSchool) {
    const nextData = newData.map((school) => {
      if (school.id === updatedSchool.id) {
        return updatedSchool;
      }
      return school;
    });

    setNewData(nextData);
  }

  return (
    <div className="category education">
      <h2 className="category-title">Education</h2>
      <div className="cards education">
        {newData.map((school) => (
          <div className="card education">
            {editMode ? (
              <EducationForm
                key={school.id}
                data={school}
                handleChange={handleSchoolUpdate}
                handleSubmit={handleSubmit}
              />
            ) : (
              <EducationView
                key={school.id}
                data={school}
                handleEditClick={() => setEditMode(true)}
              />
            )}
          </div>
        ))}

        <div className="card education add">
          <button type="button">+</button>
        </div>
      </div>
    </div>
  );
}

function EducationForm({ data, handleSubmit, handleChange }) {
  const { schoolName, title, date } = data;

  function handleOnChange(e) {
    const { value, name } = e.target;

    if (name === 'start' || name === 'end') {
      handleChange({ ...data, date: { ...data.date, [name]: value } });
      return;
    }

    handleChange({ ...data, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="schoolName">
        School Name
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={schoolName}
          onChange={handleOnChange}
          required
        />
      </label>

      <label htmlFor="title">
        Title of study
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleOnChange}
          required
        />
      </label>

      <div>
        <p>Date</p>

        <label htmlFor="start">
          Start
          <input
            type="date"
            id="start"
            name="start"
            value={date.start}
            max={date.end}
            onChange={handleOnChange}
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
            onChange={handleOnChange}
          />
        </label>
      </div>

      <button type="submit">SAVE</button>
    </form>
  );
}

function EducationView({ data, handleEditClick }) {
  const { schoolName, title, date } = data;
  return (
    <>
      <p>{schoolName}</p>
      <p>{title}</p>
      <p>
        {date.start} / {date.end ? date.end : 'Now'}
      </p>

      <button type="button" onClick={handleEditClick}>
        EDIT
      </button>
    </>
  );
}
