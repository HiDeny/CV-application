export default function Header({ personal }) {
  const { firstName, lastName, picture } = personal;
  const fullName = `${firstName} ${lastName}`;

  return (
    <section className="header">
      <h1 className="title preview-title">{fullName}</h1>
      <div className="profile-picture">
        <img src={picture} alt={fullName} />
      </div>
    </section>
  );
}
