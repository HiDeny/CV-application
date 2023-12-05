import { useState } from 'react';
import Category from './CategoryComponent';
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
    // {
    //   Name: 'School1',
    //   Degree: '',
    //   Address: '',
    //   'Start date': '',
    //   'End date': '',
    // },
    // {
    //   Name: 'School2',
    //   Degree: '',
    //   Address: '',
    //   'Start date': '',
    //   'End date': '',
    // },
  ]);

  // About Me

  const [experience, setExperience] = useState([
    // {
    //   Name: '',
    //   Position: '',
    //   Responsibility: '',
    //   Details: '',
    //   'Start date': '',
    //   'End date': '',
    // },
  ]);

  function handlePersonalChange(e) {
    const { name, value } = e.target;
    const updated = { ...personal, [name]: value };
    setPersonal(updated);
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
          onChange={handlePersonalChange}
        />
        <Category
          title="Education"
          data={education}
          onChange={handleEducationChange}
        />
        <Category
          title="Experience"
          data={experience}
          onChange={handleExperienceChange}
        />
      </div>
    </>
  );
}

export default App;
