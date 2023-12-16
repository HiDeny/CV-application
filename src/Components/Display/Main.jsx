import { format } from 'date-fns';

export default function Main({ aboutMe, experience }) {
  return (
    <div className="mainContent">
      <section className="aboutMe preview-category">
        <h2 className="preview-category-title">ABOUT ME</h2>
        <div className="decoration-line" />
        <pre className="aboutme-content">{aboutMe}</pre>
      </section>

      {experience.length > 0 && (
        <section className="experience preview-category">
          <h2 className="preview-category-title">EXPERIENCE</h2>
          <div className="decoration-line" />
          <ul className="preview-category-list">
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
    <li className="preview-category-item">
      <h3 className="item-title">{position}</h3>
      <p className="item-name">{name}</p>
      <div className="item-date">
        <p>
          {format(new Date(date.start), 'dd. MM. yyyy')} -{' '}
          {date.end ? format(new Date(date.end), 'dd. MM. yyyy') : 'Present'}
        </p>
      </div>
      {responsibility && (
        <div className="item-responsibility">
          <pre>{responsibility}</pre>
        </div>
      )}
    </li>
  );
}
