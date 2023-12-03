import { useState } from 'react';
import Category from './CategoryComponent';

function CVEdit() {
  const [personalInfo, setPersonalInfo] = useState({
    'First Name': '',
    'Last Name': '',
    Email: '',
    'Phone Number': '',
  });

  const [educationInfo, setEducationInfo] = useState([
    {
      Name: 'School1',
      Degree: '',
      Address: '',
      'Start date': '',
      'End date': '',
    },
    {
      Name: 'School2',
      Degree: '',
      Address: '',
      'Start date': '',
      'End date': '',
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      Name: '',
      Position: '',
      Responsibility: '',
      Details: '',
      'Start date': '',
      'End date': '',
    },
  ]);

  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
    const updatedInfo = { ...personalInfo, [name]: value };
    setPersonalInfo(updatedInfo);
  }

  function handleEducationInfoChange(id, value) {
    const copyArr = [...educationInfo];
    copyArr[id] = value;
    setEducationInfo(copyArr);
  }

  function handleExperienceInfoChange(id, value) {
    const copyArr = [...experienceInfo];
    copyArr[id] = value;
    setExperienceInfo(copyArr);
  }

  return (
    <>
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
    </>
  );
}

export default CVEdit;
