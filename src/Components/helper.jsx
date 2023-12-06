function getFields(data, onChange) {
  return Object.entries(data).map(([key, value], index) => {
    // const id = index + key;

    if (key === 'id') return;
    if (key === 'Date') return DateInput(key, onChange);
    if (key === 'Email') {
      return (
        <label>
          Email
          <input type="email" name="Email" value={value} onChange={onChange} />
        </label>
      );
    }
    if (key === 'Phone Number') {
      return (
        <label>
          Phone Number
          <input
            type="tel"
            name="Phone Number"
            value={value}
            onChange={onChange}
          />
        </label>
      );
    }

    return (
      <label>
        {key}
        <input type="text" name={key} value={value} onChange={onChange} />
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
