import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Personal from './Personal/Personal';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import DisplayMode from './DisplayMode';
import Skills from './Skills/Skills';

function App() {
  const [editMode, setEditMode] = useState(true);

  const [personal, setPersonal] = useState({
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    picture: '',
  });

  const [education, setEducation] = useState([
    // {
    //   id: uuid(),
    //   name: 'Test School',
    //   title: 'Nest',
    //   date: { start: '', end: '' },
    // },
    // {
    //   id: uuid(),
    //   name: 'Test School',
    //   title: 'Nest',
    //   date: { start: '', end: '' },
    // },
  ]);

  const [experience, setExperience] = useState([
    // {
    //   id: uuid(),
    //   name: 'Company Name',
    //   position: 'Position',
    //   responsibility: '',
    //   date: { start: '', end: '' },
    // },
  ]);

  const [skills, setSkills] = useState([
    { id: uuid(), value: 'Talking' },
    { id: uuid(), value: 'Thinking' },
    { id: uuid(), value: 'Walking' },
  ]);

  function updatePersonal(newData) {
    setPersonal(newData);
  }

  function updateEducation(newData) {
    setEducation(newData);
  }

  function updateExperience(newData) {
    setExperience(newData);
  }

  function updateSkills(newData) {
    setSkills(newData);
  }

  function toggleEditMode() {
    const element = document.querySelector(
      editMode ? '.personal' : '.displayMode'
    );
    setEditMode((prev) => !prev);
    element.scrollIntoView();
  }

  return (
    <>
      {editMode ? (
        <>
          <Personal data={personal} updateData={updatePersonal} />
          <Education data={education} updateData={updateEducation} />
          <Experience data={experience} updateData={updateExperience} />
          <Skills data={skills} updateData={updateSkills} />
        </>
      ) : (
        <DisplayMode
          personal={personal}
          education={education}
          experience={experience}
        />
      )}

      <div className="category create">
        <button type="button" onClick={toggleEditMode}>
          {editMode ? 'Create' : 'Edit'}
        </button>
      </div>
    </>
  );
}

export default App;
