function getFields(data, onChange) {
  return Object.entries(data).map(([key, value], index) => {
    // const id = index + key;
    let inputType = 'text';

    if (key === 'id') return;
    if (key === 'Date') return DateInput(key, onChange);
    if (key === 'Email') inputType = 'email';
    if (key === 'Phone Number') inputType = 'tel';

    return (
      <label>
        {key}
        <input type={inputType} name={key} value={value} onChange={onChange} />
      </label>
    );
  });
}

function DateInput(key, onChange) {
  return (
    <label className="date">
      <label className="date-start">
        Start
        <input type="date" name="Start" value={key.Start} onChange={onChange} />
      </label>
      <label className="date-end">
        End
        <input type="date" name="End" value={key.End} onChange={onChange} />
      </label>
    </label>
  );
}

export { getFields };
