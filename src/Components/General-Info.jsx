import { useState } from 'react';
import Input from './Input';
import '../Styles/General-Info.css';

function GeneralInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <div className="General-Info">
      <h2 className="category-title">General</h2>
      <Input
        label="First Name"
        name="firstName"
        type="text"
        value={firstName}
        handleChange={handleFirstNameChange}
      />
      <Input
        label="Last Name"
        name="lastName"
        type="text"
        value={lastName}
        handleChange={handleLastNameChange}
      />
      <Input
        label="E-Mail"
        name="email"
        type="email"
        value={email}
        handleChange={handleEmailChange}
      />
      <Input
        label="Phone Number"
        name="phoneNumber"
        type="tel"
        value={phoneNumber}
        handleChange={handlePhoneNumberChange}
      />
    </div>
  );
}

export default GeneralInfo;
