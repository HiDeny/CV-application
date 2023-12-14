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
}) {
  return (
    <div className="displayMode">
      <div className="preview">
        <Header personal={personal} />
        <Sidebar personal={personal} skills={skills} education={education} />
        <Main aboutMe={aboutMe} experience={experience} />
      </div>
      <button type="button" onClick={() => print()}>
        Print
      </button>
      <button type="button" onClick={() => navigator.share()}>
        Share
      </button>
    </div>
  );
}

// Header - name, pic
// Sidebar - contact, skills(6), schools(3)
// Main - About me, Experiences(3)
