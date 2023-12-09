import { useState } from 'react';
import Personal from './Personal/Personal';
import Education from './Education/Education';
import { v4 as uuid } from 'uuid';

function App() {
  const [personal, setPersonal] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState([
    {
      id: uuid(),
      schoolName: 'Test School',
      title: 'Nest',
      date: { start: '', end: '' },
    },
    {
      id: uuid(),
      schoolName: 'Test School',
      title: 'Nest',
      date: { start: '', end: '' },
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: uuid(),
      companyName: 'Test School',
      position: 'Nest',
      date: { start: '', end: '' },
    },
  ]);

  function updatePersonal(newData) {
    setPersonal(newData);
  }

  function updateEducation(newData) {
    setEducation(newData);
  }

  function updateExperience(newData) {
    setExperience(newData);
  }

  return (
    <>
      <Personal data={personal} updateData={updatePersonal} />
      <Education data={education} updateData={updateEducation} />
    </>
  );
}

export default App;
