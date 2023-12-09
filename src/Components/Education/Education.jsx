import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Education({ data, updateData }) {
  function handleSchoolChange(updatedSchool, remove = false) {
    let nextData;

    if (remove) {
      nextData = data.filter((school) => school.id !== updatedSchool.id);
    } else {
      nextData = data.map((school) => {
        if (school.id === updatedSchool.id) {
          return updatedSchool;
        }
        return school;
      });
    }

    updateData(nextData);
  }

  function handleClickAdd() {
    const container = document.querySelector('.cards.education');
    console.log(container.scrollWidth); // 316
    // container.scrollLeft = container.scrollWidth - 632;
    container.scrollLeft = container.scrollWidth - 550;

    const newSchool = {
      id: uuid(),
      schoolName: '',
      title: '',
      date: { start: '', end: '' },
    };

    updateData([...data, newSchool]);
  }

  return (
    <div className="category education">
      <h2 className="category-title">Education</h2>
      <div className="cards education">
        {data.map((school) => (
          <Card
            key={school.id}
            school={school}
            handleSchoolChange={handleSchoolChange}
          />
        ))}

        <div className="card education add">
          <button type="button" onClick={handleClickAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function Card({ school, handleSchoolChange, handleSubmit }) {
  const [editMode, setEditMode] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(!editMode);
  }

  return (
    <div className="card education">
      {editMode ? (
        <EducationForm
          key={school.id}
          data={school}
          handleSchoolChange={handleSchoolChange}
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
  );
}

function EducationForm({ data, handleSubmit, handleSchoolChange }) {
  const { schoolName, title, date } = data;

  function handleChange(e) {
    const { value, name } = e.target;

    if (name === 'start' || name === 'end') {
      handleSchoolChange({ ...data, date: { ...data.date, [name]: value } });
      return;
    }

    handleSchoolChange({ ...data, [name]: value });
  }

  function handleClickRemove() {
    handleSchoolChange(data, true);
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
          onChange={handleChange}
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
          onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">SAVE</button>
      <button type="button" className="removeBtn" onClick={handleClickRemove}>
        x
      </button>
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
