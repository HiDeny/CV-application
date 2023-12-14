export default function Main({ aboutMe, experience }) {
  return (
    <div className="mainContent">
      <section className="aboutMe">
        <h2>About Me</h2>
        <p>{aboutMe}</p>
      </section>

      {experience.length > 0 && (
        <section className="experience">
          <h2>Experience</h2>
          <ul>
            {experience.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function ExperienceItem({ item }) {
  const { position, name, date, responsibility } = item;
  return (
    <li>
      <h3 className="">{position}</h3>
      <p>{name}</p>
      <p>
        {date.start}-{date.end ? date.end : 'Present'}
      </p>
      {responsibility && (
        <>
          <h4>Responsibility: </h4>
          <p>{responsibility}</p>
        </>
      )}
    </li>
  );
}
