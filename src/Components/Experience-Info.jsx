import { useState } from 'react';
import Input from './Input';

function ExperienceInfo() {
  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  function handleCompanyNameChange(e) {
    setCompanyName(e.target.value);
  }
  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleResponsibilityChange(e) {
    setResponsibility(e.target.value);
  }

  function handleDateStartChange(e) {
    setDateStart(e.target.value);
  }
  function handleDateEndChange(e) {
    setDateEnd(e.target.value);
  }

  return (
    <div className="Education-Info">
      <h2 className="category-title">Experience</h2>
      <Input
        label="Company name"
        name="companyName"
        type="text"
        value={companyName}
        handleChange={handleCompanyNameChange}
      />
      <Input
        label="Position title"
        name="positionTitle"
        type="text"
        value={title}
        handleChange={handleTitleChange}
      />

      <Input
        label="Main responsibilities"
        name="responsibilities"
        type="text"
        value={responsibility}
        handleChange={handleResponsibilityChange}
      />

      <Input
        label="Start of study"
        name="workStart"
        type="date"
        value={dateStart}
        handleChange={handleDateStartChange}
      />
      <Input
        label="End of study"
        name="workEnd"
        type="date"
        value={dateEnd}
        handleChange={handleDateEndChange}
      />
    </div>
  );
}

export default ExperienceInfo;
