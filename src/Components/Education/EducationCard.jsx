export default function EducationCard({ item, handleChange, handleRemove }) {
  const { name, title, date } = item;

  function handleFieldChange(e) {
    const { value, name } = e.target;

    if (name === 'start' || name === 'end') {
      handleChange({ ...item, date: { ...item.date, [name]: value } });
      return;
    }

    handleChange({ ...item, [name]: value });
  }

  function handleClickRemove(e) {
    const container = e.target.parentElement;
    container.classList.add('cardRemove');
    setTimeout(() => {
      handleRemove(item);
    }, 500);
  }

  return (
    <fieldset className="card education">
      <div className="fields">
        <label htmlFor="schoolName">
          <p>
            School Name <span className="hint-required">(Required)</span>
          </p>
          <input
            type="text"
            id="schoolName"
            name="name"
            value={name}
            placeholder=""
            onChange={handleFieldChange}
            required
          />
        </label>

        <label htmlFor="educationTitle">
          <p>
            Title of study <span className="hint-required">(Required)</span>
          </p>
          <input
            type="text"
            id="educationTitle"
            name="title"
            value={title}
            placeholder=""
            onChange={handleFieldChange}
            required
          />
        </label>

        <div className="date">
          <label htmlFor="educationStart">
            <p>
              Start <span className="hint-required">(Required)</span>
            </p>
            <input
              type="date"
              id="educationStart"
              name="start"
              value={date.start}
              max={date.end}
              onChange={handleFieldChange}
              required
            />
          </label>

          <label htmlFor="educationEnd">
            End
            <input
              type="date"
              id="educationEnd"
              name="end"
              value={date.end}
              min={date.start}
              onChange={handleFieldChange}
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
