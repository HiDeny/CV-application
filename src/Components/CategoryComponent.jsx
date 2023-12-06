import Input from './Input';
import SubCategory from './SubCategory';

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
  const fields = getFields(data, onChange);

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
          {fields}
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

function getFields(data, onChange) {
  if (Array.isArray(data)) {
    return data.map((item) => (
      <SubCategory
        key={item.id}
        data={data}
        subData={item}
        onChange={onChange}
      />
    ));
  }

  return Object.entries(data).map(([key, value], index) => {
    const id = index + key;
    return (
      <Input
        key={id}
        label={key}
        name={key}
        type="text"
        value={value}
        handleChange={onChange}
      />
    );
  });
}
