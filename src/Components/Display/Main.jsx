import { format } from "date-fns";

export default function Main({ aboutMe, experience }) {
  return (
    <div className="mainContent">
      <section className="aboutMe">
        <h2 className="preview-title">ABOUT ME</h2>
        <pre>{aboutMe}</pre>
      </section>

      {experience.length > 0 && (
        <section className="experience">
          <h2 className="preview-title">EXPERIENCE</h2>
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
      <div className="date">
        <p>
          {format(new Date(date.start), 'dd. MM. yyyy')} /{' '}
          {date.end ? format(new Date(date.end), 'dd. MM. yyyy') : 'Present'}
        </p>
      </div>
      {responsibility && (
        <div className="preview-responsibility">
          <p>{responsibility}</p>
        </div>
      )}
    </li>
  );
}
