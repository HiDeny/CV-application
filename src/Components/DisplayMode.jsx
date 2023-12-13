export default function DisplayMode({
  personal,
  education,
  experience,
  skills,
}) {
  const fullName = `${personal.firstName} ${personal.lastName}`;

  const skillsList = skills.map((item) => (
    <li>
      <p className="skill">{item.value}</p>
    </li>
  ));

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
      <div className="preview">
        <h1 className="title">{fullName}</h1>
        <div className="profile-picture">
          <img src={personal.picture} alt={fullName} />
        </div>

        <section className="contact">
          <h2>Contact</h2>
          <p>{personal.email}</p>
          <p>{personal.phone}</p>
        </section>

        {skills.length > 0 && (
          <section className="skills">
            <h2>Skills</h2>
            <ul>{skillsList}</ul>
          </section>
        )}

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
    </div>
  );
}

// Header - name, pic
// Sidebar - contact, skills(6), schools(3)
// Main - About me, Experiences(3)
