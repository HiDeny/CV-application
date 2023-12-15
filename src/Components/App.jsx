import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Personal from './Personal/Personal';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import DisplayMode from './Display/DisplayMode';
import Skills from './Skills/Skills';
import AboutMe from './AboutMe/AboutMe';

function App() {
  const [editMode, setEditMode] = useState(true);

  const [personal, setPersonal] = useState({
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    website: '',
    picture: '',
  });

  const [aboutMe, setAboutMe] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([
    { id: uuid(), value: '' },
    { id: uuid(), value: '' },
    { id: uuid(), value: '' },
  ]);

  function updatePersonal(e) {
    const { name, value } = e.target;

    if (name === 'picture') {
      const newPicture = !value ? '' : URL.createObjectURL(e.target.files[0]);
      setPersonal({ ...personal, [name]: newPicture });
      return;
    }

    setPersonal({ ...personal, [name]: value });
  }

  function updateAboutMe(e) {
    const { value } = e.target;
    setAboutMe(value);
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
    setPersonal({
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
        date: { start: new Date('2/1/22'), end: '' },
      },
      {
        id: uuid(),
        name: 'Test School',
        title: 'Nest',
        date: { start: new Date('2/1/22'), end: '' },
      },
    ]);

    updateExperience([
      {
        id: uuid(),
        name: 'Company Name',
        position: 'Position',
        responsibility:
          'Enim cillum excepteur eiusmod dolor cillum minim irure ad id velit est reprehenderit voluptate cupidatat consequat. Eu pariatur sint consequat incididunt dolor ullamco incididunt aliquip. Cupidatat laboris laborum non sunt occaecat sint. Nostrud deserunt ut cupidatat. Esse eu aute mollit culpa enim ut aute.',
        date: { start: new Date('2/1/22'), end: '' },
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

  function handleSubmit(e) {
    e.preventDefault();
    toggleEditMode();
  }

  return (
    <>
      <button type="button" className="fakeButton" onClick={setFakeData}>
        FAKE
      </button>
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <Personal data={personal} updateData={updatePersonal} />
          <AboutMe data={aboutMe} updateData={updateAboutMe} />
          {/* <Education data={education} updateData={updateEducation} /> */}
          {/* <Experience data={experience} updateData={updateExperience} /> */}
          {/* <Skills data={skills} updateData={updateSkills} /> */}
          <div className="category create">
            <button type="submit">Create</button>
          </div>
        </form>
      ) : (
        <DisplayMode
          personal={personal}
          aboutMe={aboutMe}
          education={education}
          experience={experience}
          skills={skills}
        />
      )}

      {/* <div className="category create">
        <button type="button" onClick={toggleEditMode}>
          {editMode ? 'Create' : 'Edit'}
        </button>
      </div> */}
    </>
  );
}

export default App;
