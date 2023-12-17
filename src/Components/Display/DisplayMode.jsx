import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import './Preview.css';

export default function DisplayMode({
  personal,
  aboutMe,
  education,
  experience,
  skills,
  handleEditClick,
}) {
  const [previewColor, setPreviewColor] = useState('#213d62');

  function handleColorChange(e) {
    const hex = e.target.value;
    const { h } = hexToHSL(hex);

    const container = document.querySelector('.displayMode');
    let primary = `hsl(${h},70%,30%)`;
    let secondary = `hsl(${h},50%,80%)`;
    let tertiary = `hsl(${h},30%,90%)`;

    if (h === 0) {
      primary = `hsl(0,0%,30%)`;
      secondary = `hsl(0,0%,80%)`;
      tertiary = `hsl(0,0%,90%)`;
    }

    container.style.setProperty('--color-primary', primary);
    container.style.setProperty('--color-secondary', secondary);
    container.style.setProperty('--color-tertiary', tertiary);

    setPreviewColor(hex);
  }

  return (
    <div className="displayMode">
      <section className="preview">
        <Header personal={personal} />
        <Sidebar personal={personal} skills={skills} education={education} />
        <Main aboutMe={aboutMe} experience={experience} />
      </section>

      <div className="display-options">
        <label htmlFor="color-picker">
          Pick color
          <input
            type="color"
            id="color-picker"
            value={previewColor}
            onChange={handleColorChange}
          />
        </label>

        <button type="button" onClick={() => print()}>
          Print
        </button>
        <button type="button" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </div>
  );
}

function hexToHSL(H) {
  // Convert hex to RGB first
  let r = 0;
  let g = 0;
  let b = 0;

  if (H.length === 4) {
    r = `0x${H[1]}${H[1]}`;
    g = `0x${H[2]}${H[2]}`;
    b = `0x${H[3]}${H[3]}`;
  } else if (H.length === 7) {
    r = `0x${H[1]}${H[2]}`;
    g = `0x${H[3]}${H[4]}`;
    b = `0x${H[5]}${H[6]}`;
  }

  // Then to HSL
  r /= 255;
  g /= 255;
  b /= 255;

  let cmin = Math.min(r, g, b);
  let cmax = Math.max(r, g, b);
  let delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  if (delta === 0) h = 0;
  else if (cmax === r) h = ((g - b) / delta) % 6;
  else if (cmax === g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
}
