import SubCategory from './SubCategory';
import Card from './Card';
import { educationTemplate, jobTemplate } from './helper';

export default function Category({ title, data, onChange }) {
  let content;

  if (Array.isArray(data)) {
    content = <SubCategory data={data} onChange={onChange} />;
  } else {
    content = <Card item={data} onChange={onChange} />;
  }

  function handleAddSubCategory() {
    const updatedData = [...data];
    const newId = Math.random() * 999;
    const newItem =
      title === 'Education' ? educationTemplate(newId) : jobTemplate(newId);
    updatedData.push(newItem);
    onChange(updatedData);
  }

  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      {content}
      {Array.isArray(data) && (
        <button className="addBtn" type="button" onClick={handleAddSubCategory}>
          Add
        </button>
      )}
    </div>
  );
}
