import { v4 as uuid } from 'uuid';
import SkillCard from './SkillCard';
import './Skills.css';

export default function Skills({ data, updateData }) {
  function handleOnChange(e) {
    const { value, dataset } = e.target;
    const { id } = dataset;

    const nextData = data.map((item) => {
      if (item.id === id) return { ...item, value };
      return item;
    });

    updateData(nextData);
  }

  function handleItemRemove(toRemoveId) {
    updateData((prevSkills) =>
      prevSkills.filter((item) => item.id !== toRemoveId)
    );
  }

  function handleClickAdd() {
    updateData((prevSkills) => [...prevSkills, { id: uuid(), value: '' }]);
  }

  const content = data.map((skill) => (
    <SkillCard
      key={skill.id}
      item={skill}
      handleOnChange={handleOnChange}
      handleItemRemove={handleItemRemove}
    />
  ));

  return (
    <fieldset className="category skills">
      <legend>5/5</legend>
      <h2 className="category-title">Skills</h2>
      <ul className="fields">{content}</ul>
      <button
        type="button"
        onClick={handleClickAdd}
        className="addBtn"
        disabled={data.length >= 6}
      >
        +
      </button>
    </fieldset>
  );
}
