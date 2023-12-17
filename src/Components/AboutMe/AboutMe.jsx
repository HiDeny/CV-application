import './AboutMe.css';

export default function AboutMe({ data, updateData }) {
  return (
    <fieldset className="category aboutMe">
      <legend>2/5</legend>
      <h2 className="category-title">About Me</h2>

      <div className="fields">
        <p className="hint-required">(Required)</p>
        <textarea
          name="aboutMe"
          value={data}
          placeholder="Something about you..."
          onChange={updateData}
          maxLength="250"
          rows={8}
          required
        />
        <p className="hint-required">{data.length}/250</p>
      </div>
    </fieldset>
  );
}
