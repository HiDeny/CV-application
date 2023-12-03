import { useState } from 'react';
import Category from './CategoryComponent';
import GeneralInfo from './General-Info';
import EducationInfo from './Education-Info';
import ExperienceInfo from './Experience-Info';

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

  function handleEducationInfoChange(e) {
    const { name, value } = e.target;
    console.log(e);
    const copyArr = [...educationInfo];
    copyArr[name] = value;
    console.log(copyArr);
    setEducationInfo(copyArr);
  }

  function handleExperienceInfoChange(e) {
    const { name, value } = e.target;
    const updatedInfo = { ...experienceInfo, [name]: value };
    setExperienceInfo(updatedInfo);
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
      {/* <GeneralInfo /> */}
      {/* <EducationInfo /> */}
      {/* <ExperienceInfo /> */}
    </>
  );
}

export default CVEdit;
