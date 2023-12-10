export default function DisplayMode({ personal, education, experience }) {
  const fullName = `${personal.firstName} ${personal.lastName}`;

  const schoolList = education.map((item) => (
    <div>
      <h3>{item.name}</h3>
      <p>{item.title}</p>
      <p>
        {item.date.start} - {item.date.end ? item.date.end : 'Now'}
      </p>
    </div>
  ));

  const experiencesList = experience.map((item) => (
    <div>
      <h3>
        {item.name} - {item.position}
      </h3>
      {item.responsibility && <p>Responsibility: {item.responsibility}</p>}
      <p>
        {item.date.start} - {item.date.end ? item.date.end : 'Now'}
      </p>
    </div>
  ));

  return (
    <div className="displayMode">
      <h1>{fullName}</h1>

      <section className="contact">
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
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
    </div>
  );
}
