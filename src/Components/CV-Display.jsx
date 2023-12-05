export default function CVDisplay({
  personalInfo,
  educationInfo,
  experienceInfo,
}) {
  const fullName = `${personalInfo['First Name']} ${personalInfo['Last Name']}`;

  const schoolList = educationInfo.map((school) => (
    <div>
      <h3>{school.Degree}</h3>
      <p>{school.Name}</p>
      <p>
        {school['Start date']} - {school['End date']}
      </p>
      <p>Address: {school.Address}</p>
    </div>
  ));

  const experiencesList = experienceInfo.map((job) => (
    <div>
      <h3>
        {job.Name} - {job.Position}
      </h3>
      <p>
        {job['Start date']} - {job['End date']}
      </p>
      <p>Responsibility: {job.Responsibility}</p>
      <p>Details: {job.Address}</p>
    </div>
  ));

  return (
    <div className="CV-display">
      <h1>CV application</h1>

      <section className="personalDetails">
        <h2>Personal Information</h2>
        <p className="name">{fullName}</p>
        <section className="contact">
          <p>{personalInfo.Email}</p>
          <p>{personalInfo['Phone Number']}</p>
        </section>
      </section>

      <section className="education">
        <h2>Education</h2>
        {schoolList}
      </section>

      <section className="experience">
        <h2>Experience</h2>
        {experiencesList}
      </section>
    </div>
  );
}
