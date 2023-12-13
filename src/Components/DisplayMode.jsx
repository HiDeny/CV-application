export default function DisplayMode({ personal, education, experience }) {
  const fullName = `${personal.firstName} ${personal.lastName}`;

  const schoolList = education.map((item) => (
    <li>
      <h3 className="title">{item.title}</h3>
      <p className="schoolName">{item.name}</p>
      <p>
        {item.date.start} to {item.date.end ? item.date.end : 'Now'}
      </p>
    </li>
  ));

  const experiencesList = experience.map((item) => (
    <li>
      <h3 className="">{item.position}</h3>
      <p>{item.name}</p>
      <p>
        {item.date.start}-{item.date.end ? item.date.end : 'Now'}
      </p>
      {item.responsibility && (
        <>
          <h4>Responsibility: </h4>
          <p>{item.responsibility}</p>
        </>
      )}
    </li>
  ));

  return (
    <div className="displayMode">
      <h1>{fullName}</h1>
      <img className="profile-picture" src={personal.picture} alt={fullName} />

      <section className="contact">
        <h2>Contact</h2>
        <p>{personal.email}</p>
        <p>{personal.phone}</p>
      </section>

      {education.length > 0 && (
        <section className="education">
          <h2>Education</h2>
          <ul>{schoolList}</ul>
        </section>
      )}

      {experience.length > 0 && (
        <section className="experience">
          <h2>Experience</h2>
          <ul>{experiencesList}</ul>
        </section>
      )}
    </div>
  );
}
