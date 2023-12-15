import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import './display.css';

export default function DisplayMode({
  personal,
  aboutMe,
  education,
  experience,
  skills,
  handleEditClick,
}) {
  return (
    <div className="displayMode">
      <section className="preview">
        <Header personal={personal} />
        <Sidebar personal={personal} skills={skills} education={education} />
        <Main aboutMe={aboutMe} experience={experience} />
      </section>
      <button type="button" onClick={() => print()}>
        Print
      </button>
      <button type="button" onClick={() => navigator.share()}>
        Share
      </button>
      <button type="button" onClick={handleEditClick}>
        Edit
      </button>
    </div>
  );
}
