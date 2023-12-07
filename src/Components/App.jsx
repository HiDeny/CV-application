import { useState } from 'react';

import DisplayMode from './DisplayMode';
import SubCategory from './SubCategory';
import Card from './Card';

function App() {
  // Profile picture
  const [editMode, setEditMode] = useState(true);
  const [displayReady, setDisplayReady] = useState(false);

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

  function toggleEditMode() {
    setEditMode(!editMode);
  }

  return (
    <>
      <div className={`${!editMode ? 'EditMode hidden' : 'EditMode'}`}>
        <div className="category">
          <h2 className="category-title">Personal Information</h2>
          <Card
            item={personal}
            handleChange={handlePersonalChange}
            handleRemove={false}
            setDisplayReady={setDisplayReady}
          />
        </div>

        <div className="category">
          <h2 className="category-title">Education</h2>
          <SubCategory
            title="Education"
            data={education}
            handleChange={handleEducationChange}
            setDisplayReady={setDisplayReady}
          />
        </div>

        <div className="category">
          <h2 className="category-title">Experience</h2>
          <SubCategory
            title="Experience"
            data={experience}
            handleChange={handleExperienceChange}
            setDisplayReady={setDisplayReady}
          />
        </div>
        <div className="category create">
          <button
            type="button"
            disabled={!displayReady}
            onClick={() => setEditMode(false)}
          >
            Create
          </button>
        </div>
      </div>

      <DisplayMode
        personal={personal}
        education={education}
        experience={experience}
        hidden={editMode}
        onClickEdit={() => setEditMode(true)}
      />
    </>
  );
}

export default App;
