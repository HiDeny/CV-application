import { useState } from 'react';
import Input from './Input';

function EducationInfo() {
  const [schoolName, setSchoolName] = useState('');
  const [title, setTitle] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');
  const [address, setAddress] = useState('');

  function handleSchoolNameChange(e) {
    setSchoolName(e.target.value);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleDateStartChange(e) {
    setDateStart(e.target.value);
  }
  function handleDateEndChange(e) {
    setDateEnd(e.target.value);
  }

  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  return (
    <div className="Education-Info">
      <h2 className="category-title">Education</h2>
      <Input
        label="School Name"
        name="schoolName"
        type="text"
        value={schoolName}
        handleChange={handleSchoolNameChange}
      />
      <Input
        label="Title of study"
        name="studyTitle"
        type="text"
        value={title}
        handleChange={handleTitleChange}
      />
      <Input
        label="Start of study"
        name="schoolStart"
        type="date"
        value={dateStart}
        handleChange={handleDateStartChange}
      />
      <Input
        label="End of study"
        name="schoolEnd"
        type="date"
        value={dateEnd}
        handleChange={handleDateEndChange}
      />
      <Input
        label="Address"
        name="schoolAddress"
        type="text"
        value={address}
        handleChange={handleAddressChange}
      />
    </div>
  );
}

export default EducationInfo;
