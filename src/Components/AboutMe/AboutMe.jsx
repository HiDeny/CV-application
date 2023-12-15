import './AboutMe.css';

export default function AboutMe({ data, updateData }) {
  return (
    <fieldset className="category aboutMe">
      <h2 className="category-title">About Me</h2>

      <div className="fields">
        <p className="hint-required">(Required)</p>
        <textarea
          name="aboutMe"
          value={data}
          placeholder="Something about you..."
          onChange={updateData}
          maxLength="250"
          required
        />
        <p className="hint-required">{data.length}/250</p>
      </div>
    </fieldset>
  );
}
