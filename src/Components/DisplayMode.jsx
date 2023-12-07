export default function DisplayMode({
  personal,
  education,
  experience,
  hidden,
  onClickEdit,
}) {
  const fullName = `${personal['First Name']} ${personal['Last Name']}`;

  const schoolList = education.map((school) => (
    <div>
      <h3>{school.Degree}</h3>
      <p>{school.Name}</p>
      <p>
        {school.Date.Start} - {school.Date.End}
      </p>
    </div>
  ));

  const experiencesList = experience.map((job) => (
    <div>
      <h3>
        {job.Name} - {job.Position}
      </h3>
      <p>
        {job.Date.Start} - {job.Date.End}
      </p>
      <p>Responsibility: {job.Responsibility}</p>
      {job.Details && <p>Details: {job.Details}</p>}
    </div>
  ));

  return (
    <div className={`${hidden ? 'DisplayMode hidden' : 'DisplayMode'}`}>
      <h1>CV application</h1>

      <section className="personalDetails">
        <h2>Personal Information</h2>
        <p className="name">{fullName}</p>
        <section className="contact">
          <p>{personal.Email}</p>
          <p>{personal['Phone Number']}</p>
        </section>
      </section>

      {education.length > 0 && (
        <section className="education">
          <h2>Education</h2>
          {schoolList}
        </section>
      )}

      {experience.length > 0 && (
        <section className="experience">
          <h2>Experience</h2>
          {experiencesList}
        </section>
      )}
      <button type="button" onClick={onClickEdit}>
        Edit
      </button>
    </div>
  );
}
