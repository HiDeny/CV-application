export function FieldEdit({ item, value, handleChange }) {
  let inputType = 'text';

  if (item === 'id') return false;
  if (item === 'Email') inputType = 'email';
  if (item === 'Phone Number') inputType = 'tel';
  if (item === 'Details') {
    return <DetailsInput value={value} handleChange={handleChange} />;
  }
  if (item === 'Date') {
    return (
      <DateInput
        item={item}
        start={value.Start}
        end={value.End}
        handleChange={handleChange}
      />
    );
  }

  return (
    <label htmlFor={item}>
      {item}
      <input
        type={inputType}
        id={item}
        name={item}
        value={value}
        onChange={handleChange}
        required
      />
    </label>
  );
}

export function FieldDisplay({ item, value }) {
  if (item === 'id') return false;
  if (item === 'Date') {
    return (
      <div>
        <p>
          {value.Start} / {value.End}
        </p>
      </div>
    );
  }

  return <p>{value}</p>;
}

function DateInput({ start, end, handleChange }) {
  return (
    <label className="date">
      Date (Start/End)
      <input
        className="dateStart"
        type="date"
        name="Start"
        value={start}
        onChange={handleChange}
        required
      />
      <input
        className="dateEnd"
        type="date"
        name="End"
        value={end}
        onChange={handleChange}
      />
    </label>
  );
}

function DetailsInput({ value, handleChange }) {
  return (
    <label>
      Details
      <textarea
        className="details"
        onChange={handleChange}
        value={value}
      ></textarea>
    </label>
  );
}
