export default function Header({ personal }) {
  const { firstName, lastName, picture } = personal;
  const fullName = `${firstName} ${lastName}`;

  return (
    <section className="header">
      <h1 className="preview-title">{fullName}</h1>
      <div className="preview-picture">
        <img alt={fullName} />
      </div>
    </section>
  );
}
