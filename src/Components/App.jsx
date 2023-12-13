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

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

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

  function setFakeData() {
    updatePersonal({
      id: uuid(),
      firstName: 'First',
      lastName: 'Last',
      email: 'email@address.com',
      phone: '123 456 789',
      picture: '',
    });

    updateEducation([
      {
        id: uuid(),
        name: 'Test School',
        title: 'Nest',
        date: { start: '', end: '' },
      },
      {
        id: uuid(),
        name: 'Test School',
        title: 'Nest',
        date: { start: '', end: '' },
      },
    ]);

    updateExperience([
      {
        id: uuid(),
        name: 'Company Name',
        position: 'Position',
        responsibility:
          'Enim cillum excepteur eiusmod dolor cillum minim irure ad id velit est reprehenderit voluptate cupidatat consequat. Eu pariatur sint consequat incididunt dolor ullamco incididunt aliquip. Cupidatat laboris laborum non sunt occaecat sint. Nostrud deserunt ut cupidatat. Esse eu aute mollit culpa enim ut aute.',
        date: { start: '', end: '' },
      },
    ]);

    updateSkills([
      { id: uuid(), value: 'Talking' },
      { id: uuid(), value: 'Thinking' },
      { id: uuid(), value: 'Walking' },
    ]);
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
      <button type="button" className="fakeButton" onClick={setFakeData}>
        FAKE
      </button>
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
          skills={skills}
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
