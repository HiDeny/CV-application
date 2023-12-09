import { useState } from 'react';

export default function Personal({ data, updateData }) {
  const [editMode, setEditMode] = useState(true);
  const [newData, setNewData] = useState(data);

  function handleSubmit(e) {
    e.preventDefault();
    updateData(newData);
    setEditMode(false);
  }

  return (
    <div className="category">
      <h2>Personal Information</h2>
      {editMode ? (
        <PersonalForm
          data={newData}
          handleChange={setNewData}
          handleSubmit={handleSubmit}
        />
      ) : (
        <PersonalView data={data} handleEditClick={() => setEditMode(true)} />
      )}
    </div>
  );
}

function PersonalForm({ data, handleSubmit, handleChange }) {
  const { firstName, lastName, email, phone } = data;

  function handleOnChange(e) {
    const { name, value } = e.target;
    handleChange({ ...data, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">
        First Name
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleOnChange}
          required
        />
      </label>

      <label htmlFor="lastName">
        Last Name
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleOnChange}
          required
        />
      </label>

      <label htmlFor="email">
        E-mail
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleOnChange}
          required
        />
      </label>

      <label htmlFor="phone">
        Phone
        <input
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleOnChange}
          required
        />
      </label>

      <button type="submit">SAVE</button>
    </form>
  );
}

function PersonalView({ data, handleEditClick }) {
  const { firstName, lastName, email, phone } = data;
  return (
    <div>
      <p>
        {firstName} {lastName}
      </p>
      <p>{email}</p>
      <p>{phone}</p>

      <button type="button" onClick={handleEditClick}>
        EDIT
      </button>
    </div>
  );
}
