export default function CardEdit({ item, onChange }) {
  const fields = Object.entries(item).map(([key, value]) => (
    <FieldEdit item={key} value={value} onChange={handleFieldChange} />
  ));

  function handleFieldChange(e) {
    const { value, name } = e.target;
    let key = name;
    let updatedValue = value;

    if (name === 'Start' || name === 'End') {
      key = ['Date'];
      const oldDate = item['Date'];
      const newDate = { ...oldDate, [name]: value };
      updatedValue = newDate;
    }

    onChange({ ...item, [key]: updatedValue });
  }

  return (
    <div className="card">
      <h3 className="card-title">{item.Name || 'Name'}</h3>
      <div className="content">{fields}</div>
    </div>
  );
}

function FieldEdit({ item, value, onChange }) {
  let inputType = 'text';

  if (item === 'id') return;
  if (item === 'Date') return <DateInput item={item} onChange={onChange} />;
  if (item === 'Email') inputType = 'email';
  if (item === 'Phone Number') inputType = 'tel';

  return (
    <label>
      {item}
      <input
        type={inputType}
        name={item}
        value={value}
        onChange={onChange}
        required
      />
    </label>
  );
}

function DateInput({ item, onChange }) {
  return (
    <label className="date">
      <label className="date-start">
        Start
        <input
          type="date"
          name="Start"
          value={item.Start}
          onChange={onChange}
        />
      </label>
      <label className="date-end">
        End
        <input type="date" name="End" value={item.End} onChange={onChange} />
      </label>
    </label>
  );
}
