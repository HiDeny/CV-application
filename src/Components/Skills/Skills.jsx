import { v4 as uuid } from 'uuid';
import Card from './Card';

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

  return (
    <div className="category skills">
      <h2 className="category-title">Skills</h2>
      <ul className="list">
        {data.map((skill) => (
          <Card
            key={skill.id}
            item={skill}
            handleOnChange={handleOnChange}
            handleItemRemove={handleItemRemove}
          />
        ))}
      </ul>
      <button
        type="button"
        onClick={handleClickAdd}
        className="addBtn"
        disabled={data.length > 5}
      >
        +
      </button>
    </div>
  );
}
