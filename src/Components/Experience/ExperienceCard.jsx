export default function ExperienceCard({ item, handleChange, handleRemove }) {
  const { position, responsibility, date } = item;

  function handleItemChange(e) {
    const { value, name } = e.target;
    const newItem = { ...item };

    if (name === 'start' || name === 'end') {
      newItem.date = { ...newItem.date, [name]: value };
    } else {
      newItem[name] = value;
    }

    handleChange(newItem);
  }

  function handleClickRemove(e) {
    const container = e.target.parentElement;
    container.classList.add('cardRemove');
    setTimeout(() => {
      handleRemove(item.id);
    }, 500);
  }

  return (
    <fieldset className="card experience">
      <div className="fields">
        <label htmlFor="companyName">
          <p>
            Company name <span className="hint-required">(Required)</span>
          </p>
          <input
            type="text"
            id="companyName"
            name="name"
            value={item.name}
            onChange={handleItemChange}
            required
          />
        </label>

        <label htmlFor="experiencePosition">
          <p>
            Position <span className="hint-required">(Required)</span>{' '}
          </p>
          <input
            type="text"
            id="experiencePosition"
            name="position"
            value={position}
            onChange={handleItemChange}
            required
          />
        </label>

        <label htmlFor="responsibility">
          <p>Responsibility </p>
          <textarea
            type="text"
            id="responsibility"
            name="responsibility"
            rows={10}
            value={responsibility}
            maxLength="200"
            onChange={handleItemChange}
          />
          <p className="hint-required">{responsibility.length}/200</p>
        </label>

        <div className="date">
          <label htmlFor="start">
            <p>
              Start <span className="hint-required">(Required)</span>
            </p>
            <input
              type="date"
              id="start"
              name="start"
              value={date.start}
              max={date.end}
              onChange={handleItemChange}
              required
            />
          </label>

          <label htmlFor="end">
            End
            <input
              type="date"
              id="end"
              name="end"
              value={date.end}
              min={date.start}
              onChange={handleItemChange}
            />
          </label>
        </div>
      </div>

      <button type="button" className="removeBtn" onClick={handleClickRemove}>
        x
      </button>
    </fieldset>
  );
}
