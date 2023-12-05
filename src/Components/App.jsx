import { useState } from 'react';
import Category from './CategoryComponent';
import CVDisplay from './CV-Display';

function CV() {
  // Profile picture

  const [personalInfo, setPersonalInfo] = useState({
    'First Name': '',
    'Last Name': '',
    Email: '',
    'Phone Number': '',
  });

  // Skills

  const [educationInfo, setEducationInfo] = useState([
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

  const [experienceInfo, setExperienceInfo] = useState([
    // {
    //   Name: '',
    //   Position: '',
    //   Responsibility: '',
    //   Details: '',
    //   'Start date': '',
    //   'End date': '',
    // },
  ]);

  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
    const updatedInfo = { ...personalInfo, [name]: value };
    setPersonalInfo(updatedInfo);
  }

  function handleEducationInfoChange(newData) {
    setEducationInfo(newData);
  }

  function handleExperienceInfoChange(newData) {
    setExperienceInfo(newData);
  }

  return (
    <>
      <CVDisplay
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        experienceInfo={experienceInfo}
      />

      <div className="CV-edit">
        <Category
          title="Personal Information"
          data={personalInfo}
          onChange={handlePersonalInfoChange}
        />
        <Category
          title="Education"
          data={educationInfo}
          onChange={handleEducationInfoChange}
        />
        <Category
          title="Experience"
          data={experienceInfo}
          onChange={handleExperienceInfoChange}
        />
      </div>
    </>
  );
}

export default CV;
