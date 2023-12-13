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
    <div className="category personal">
      <h2 className="category-title">Personal Information</h2>
      {editMode ? (
        <Form
          key={data.id}
          data={newData}
          handleChange={setNewData}
          handleSubmit={handleSubmit}
        />
      ) : (
        <View
          key={data.id}
          data={data}
          handleEditClick={() => setEditMode(true)}
        />
      )}
    </div>
  );
}

function Form({ data, handleSubmit, handleChange }) {
  const { firstName, lastName, email, phone } = data;

  function handleOnChange(e) {
    const { name, value } = e.target;

    if (name === 'picture') {
      const newPicture = URL.createObjectURL(e.target.files[0]) || '';
      handleChange({ ...data, [name]: newPicture });
      return;
    }

    handleChange({ ...data, [name]: value });
  }

  return (
    <>
      <form onSubmit={handleSubmit} id="personalForm">
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            placeholder=""
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
            placeholder=""
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
            placeholder=""
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
            placeholder=""
            onChange={handleOnChange}
            required
          />
        </label>

        <label htmlFor="picture">
          Picture
          <input
            type="file"
            accept="image/*"
            id="picture"
            name="picture"
            onChange={handleOnChange}
          />
        </label>
      </form>
      <button type="submit" form="personalForm">
        SAVE
      </button>
    </>
  );
}

function View({ data, handleEditClick }) {
  const { firstName, lastName, email, phone, picture } = data;
  return (
    <>
      <div className="view">
        <div className="content">
          <p>
            👤 {firstName} {lastName}
          </p>
          <p>✉️ {email}</p>
          <p>📞 {phone}</p>
          {{ picture } && <p>✔️ Picture</p>}
        </div>
      </div>
      <button type="button" onClick={handleEditClick}>
        EDIT
      </button>
    </>
  );
}
