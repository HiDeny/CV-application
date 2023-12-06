import SubCategory from './SubCategory';
import { getFields } from './helper';

const educationTemplate = (id) => ({
  id,
  Degree: '',
  Name: '',
  Address: '',
  Date: { Start: null, End: null },
});

const jobTemplate = (id) => ({
  id,
  Name: '',
  Position: '',
  Responsibility: '',
  Details: '',
  Date: { Start: null, End: null },
});

export default function Category({ title, data, onChange }) {
  let fields;

  if (Array.isArray(data)) {
    fields = data.map((item) => (
      <SubCategory
        key={item.id}
        data={data}
        subData={item}
        onChange={onChange}
      />
    ));
  } else {
    fields = getFields(data, onChange);
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
      {Array.isArray(data) ? (
        <>
          <div className="cards">{fields}</div>
          <button
            className="addBtn"
            type="button"
            onClick={handleAddSubCategory}
          >
            Add
          </button>
        </>
      ) : (
        <div className="content">{fields}</div>
      )}
    </div>
  );
}
