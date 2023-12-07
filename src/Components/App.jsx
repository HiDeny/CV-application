import { useState } from 'react';
import Category from './Category';
import DisplayMode from './DisplayMode';

function App() {
  // Profile picture

  const [personal, setPersonal] = useState({
    'First Name': '',
    'Last Name': '',
    Email: '',
    'Phone Number': '',
  });

  // Skills

  const [education, setEducation] = useState([
    {
      id: 0,
      Name: 'Test School',
      Degree: 'Nest',
      Date: { Start: '', End: '' },
    },
  ]);

  // About Me

  const [experience, setExperience] = useState([]);

  function handlePersonalChange(newData) {
    setPersonal(newData);
  }

  function handleEducationChange(newData) {
    setEducation(newData);
  }

  function handleExperienceChange(newData) {
    setExperience(newData);
  }

  return (
    <>
      {/* <DisplayMode
        personal={personal}
        education={education}
        experience={experience}
      /> */}

      <div className="EditMode">
        <Category
          title="Personal Information"
          data={personal}
          handleChange={handlePersonalChange}
        />
        <Category
          title="Education"
          data={education}
          handleChange={handleEducationChange}
        />
        <Category
          title="Experience"
          data={experience}
          handleChange={handleExperienceChange}
        />
      </div>
    </>
  );
}

export default App;
