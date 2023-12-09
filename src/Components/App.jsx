import { useState } from 'react';
import Personal from './Personal/Personal';
import Education from './Education/Education';

function App() {
  const [personal, setPersonal] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const [education, setEducation] = useState([
    {
      id: 0,
      schoolName: 'Test School',
      title: 'Nest',
      date: { start: '', end: '' },
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 0,
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
