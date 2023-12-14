import { useState } from 'react';

export default function Personal({ data, updateData }) {
  const [editMode, setEditMode] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setEditMode(false);
  }

  return (
    <div className="category personal">
      <h2 className="category-title">Personal Information</h2>
      {editMode ? (
        <Form
          key={data.id}
          data={data}
          handleChange={updateData}
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
  const { firstName, lastName, email, phone, website } = data;

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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="website">
          Website (social)
          <input
            type="url"
            id="website"
            name="website"
            value={website}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="picture">
          Picture
          <input
            type="file"
            accept="image/*"
            id="picture"
            name="picture"
            onChange={handleChange}
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
  const { firstName, lastName, email, phone, picture, website } = data;
  return (
    <>
      <div className="view">
        <div className="content">
          <p>
            👤 {firstName} {lastName}
          </p>
          <p>✉️ {email}</p>
          <p>📞 {phone}</p>
          {website && (
            <a href={website}> 📇{website.replace(/^https?:\/\//, '')}</a>
          )}
          {picture !== '' && <p>✔️ Picture</p>}
        </div>
      </div>
      <button type="button" onClick={handleEditClick}>
        EDIT
      </button>
    </>
  );
}
