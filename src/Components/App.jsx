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
      Name: '',
      Degree: '',
      Date: { Start: '', End: '' },
      Address: '',
    },
  ]);

  const [experienceInfo, setExperienceInfo] = useState([
    {
      Name: '',
      Position: '',
      Date: { Start: '', End: '' },
      Responsibility: '',
      Details: '',
    },
  ]);

  function handlePersonalInfoChange(e) {
    const { name, value } = e.target;
    const updatedInfo = { ...personalInfo, [name]: value };
    setPersonalInfo(updatedInfo);
  }

  function handleEducationInfoChange(e) {
    const { name, value } = e.target;
    const updatedInfo = { ...educationInfo, [name]: value };
    setEducationInfo(updatedInfo);
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
