import { useState } from 'react';

import DisplayMode from './DisplayMode';
import SubCategory from './SubCategory';
import Card from './Card';

function App() {
  // Profile picture\

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

  const [editMode, setEditMode] = useState(true);
  const [displayMode, setDisplayMode] = useState({
    personalReady: false,
    educationReady: true,
    experienceReady: true,
  });

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

  function setReadyPersonal(value) {
    const updatedReady = { ...displayMode, personalReady: value };

    categoryCheck(updatedReady);
    setDisplayMode(updatedReady);
  }

  function setReadyEducation(value) {
    const updatedReady = { ...displayMode, educationReady: value };

    categoryCheck(updatedReady);
    setDisplayMode(updatedReady);
  }

  function setReadyExperience(value) {
    const updatedReady = { ...displayMode, experienceReady: value };

    categoryCheck(updatedReady);
    setDisplayMode(updatedReady);
  }

  function handleScroll(e) {
    console.log(e.target);
    console.log(displayMode);

    // if (!displayMode) {
    //   e.target.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // }
  }

  function categoryCheck(updatedDisplayMode) {
    const { personalReady, educationReady, experienceReady } =
      updatedDisplayMode;
    const educationContainer = document.querySelector('.category.education');
    const experienceContainer = document.querySelector('.category.experience');
    const createContainer = document.querySelector('.category.create');

    if (personalReady === true) {
      educationContainer.classList.remove('hidden');
    } else {
      educationContainer.classList.add('hidden');
      experienceContainer.classList.add('hidden');
      createContainer.classList.add('hidden');
    }

    if (personalReady === true && educationReady === true) {
      experienceContainer.classList.remove('hidden');
    } else {
      experienceContainer.classList.add('hidden');
      createContainer.classList.add('hidden');
    }

    if (
      personalReady === true &&
      educationReady === true &&
      experienceReady === true
    ) {
      createContainer.classList.remove('hidden');
    } else {
      createContainer.classList.add('hidden');
    }
  }

  return (
    <>
      <div className={`${!editMode ? 'EditMode hidden' : 'EditMode'}`}>
        <div className="category personal">
          <h2 className="category-title">Personal Information</h2>
          <Card
            item={personal}
            handleChange={handlePersonalChange}
            handleRemove={false}
            setReady={setReadyPersonal}
          />
        </div>

        <div className="category education hidden">
          <h2 className="category-title">Education</h2>
          <SubCategory
            title="Education"
            data={education}
            handleChange={handleEducationChange}
            setReady={setReadyEducation}
          />
        </div>

        <div className="category experience hidden">
          <h2 className="category-title">Experience</h2>
          <SubCategory
            title="Experience"
            data={experience}
            handleChange={handleExperienceChange}
            setReady={setReadyExperience}
          />
        </div>

        <div className="category create hidden">
          <button
            type="button"
            disabled={!displayMode}
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
