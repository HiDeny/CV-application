import { format } from 'date-fns';

export default function Sidebar({ personal, skills, education }) {
  const { email, phone, website } = personal;

  return (
    <section className="sidebar">
      <section className="contact preview-category">
        <h2 className="preview-category-title">CONTACT</h2>
        <div className="decoration-line" />
        <ul className="preview-category-list">
          <li className="preview-category-item">
            <p>{email}</p>
          </li>
          <li className="preview-preview-category-item">
            <p>{phone}</p>
          </li>
          <li className="preview-category-item">
            <p>{website}</p>
          </li>
        </ul>
      </section>

      {skills.length > 0 && (
        <section className="skills preview-category">
          <h2 className="preview-category-title">SKILLS</h2>
          <div className="decoration-line" />
          <ul className="preview-category-list">
            {skills.map((item) => (
              <SkillItem key={item.id} item={item} />
            ))}
          </ul>
        </section>
      )}

      {education.length > 0 && (
        <section className="education preview-category">
          <h2 className="preview-category-title">EDUCATION</h2>
          <div className="decoration-line" />
          <ul className="preview-category-list">
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
    <li className="preview-category-item">
      <p className="item-title">{item.value}</p>
    </li>
  );
}

function SchoolItem({ item }) {
  const { title, name, date } = item;
  return (
    <li className="preview-category-item">
      <h3 className="item-title">{title}</h3>
      <p className="item-name">{name}</p>
      <div className="item-date">
        <p>
          {format(new Date(date.start), 'dd. MM. yyyy')} /{' '}
          {date.end ? format(new Date(date.end), 'dd. MM. yyyy') : 'Present'}
        </p>
      </div>
    </li>
  );
}
