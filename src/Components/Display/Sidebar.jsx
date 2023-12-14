export default function Sidebar({ personal, skills, education }) {
  const { email, phone } = personal;

  return (
    <section className="sidebar">
      <section className="contact">
        <h2>Contact</h2>
        <p>{email}</p>
        <p>{phone}</p>
      </section>

      {skills.length > 0 && (
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      )}

      {education.length > 0 && (
        <section className="education">
          <h2>Education</h2>
          <ul>
            {education.map((item) => (
              <SchoolItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}

function SkillItem({ item }) {
  return (
    <li>
      <p className="skill">{item.value}</p>
    </li>
  );
}

function SchoolItem({ item }) {
  const { title, name, date } = item;
  return (
    <li>
      <h3 className="title">{title}</h3>
      <p className="schoolName">{name}</p>
      <p>
        {date.start} to {date.end ? date.end : 'Present'}
      </p>
    </li>
  );
}
