import './Personal.css';

export default function Personal({ data, updateData }) {
  const { firstName, lastName, email, phone, website } = data;

  return (
    <fieldset className="category personal">
      <legend>1/5</legend>
      <h2 className="category-title">Personal Information</h2>

      <div className="fields">
        <label htmlFor="firstName">
          <p>
            First Name <span className="hint-required">(Required)</span>
          </p>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            maxLength={20}
            placeholder=""
            onChange={updateData}
            required
          />
        </label>

        <label htmlFor="lastName">
          <p>
            Last Name <span className="hint-required">(Required)</span>
          </p>
          <input
            type="text"
            id="lastName"
            name="lastName"
            maxLength={20}
            value={lastName}
            placeholder=""
            onChange={updateData}
            required
          />
        </label>

        <label htmlFor="email">
          <p>
            E-mail <span className="hint-required">(Required)</span>
          </p>
          <input
            type="email"
            id="email"
            name="email"
            maxLength={25}
            value={email}
            placeholder=""
            onChange={updateData}
            required
          />
        </label>

        <label htmlFor="phone">
          <p>
            Phone <span className="hint-required">(Required)</span>
          </p>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            maxLength={20}
            placeholder=""
            onChange={updateData}
            required
          />
        </label>

        <label htmlFor="website">
          <p>
            Website <span className="hint-required">(Social)</span>
          </p>
          <input
            type="text"
            id="website"
            name="website"
            maxLength={25}
            value={website}
            onChange={updateData}
          />
        </label>

        <label htmlFor="picture">
          Picture
          <input
            type="file"
            accept="image/*"
            id="picture"
            name="picture"
            onChange={updateData}
          />
        </label>
      </div>
    </fieldset>
  );
}
