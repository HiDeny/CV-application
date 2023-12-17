import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Example from './Example';
import Personal from './Personal/Personal';
import AboutMe from './AboutMe/AboutMe';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import DisplayMode from './Display/DisplayMode';

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

  function setExampleData(exampleData) {
    setPersonal(exampleData.personal);
    setAboutMe(exampleData.aboutMe);
    setEducation(exampleData.education);
    setExperience(exampleData.experience);
    setSkills(exampleData.skills);
  }

  function clearExampleData() {
    setPersonal({
      id: uuid(),
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      website: '',
      picture: '',
    });
    setAboutMe('');
    setEducation([]);
    setExperience([]);
    setSkills([
      { id: uuid(), value: '' },
      { id: uuid(), value: '' },
      { id: uuid(), value: '' },
    ]);
  }

  function toggleEditMode() {
    setEditMode((prev) => !prev);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleEditMode();
  }

  return (
    <div id="main-container">
      {editMode ? (
        <>
          <Example
            setExampleData={setExampleData}
            clearExampleData={clearExampleData}
          />

          <form onSubmit={handleSubmit}>
            <Personal data={personal} updateData={updatePersonal} />
            <AboutMe data={aboutMe} updateData={updateAboutMe} />
            <Education data={education} updateData={updateEducation} />
            <Experience data={experience} updateData={updateExperience} />
            <Skills data={skills} updateData={updateSkills} />
            <div className="category create">
              <button type="submit">Create</button>
            </div>
          </form>
        </>
      ) : (
        <DisplayMode
          personal={personal}
          aboutMe={aboutMe}
          education={education}
          experience={experience}
          skills={skills}
          handleEditClick={toggleEditMode}
        />
      )}
    </div>
  );
}

export default App;
