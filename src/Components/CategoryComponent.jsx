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
  const fields = !Array.isArray(data)
    ? getFields(data, onChange)
    : data.map((item) => (
        <SubCategory
          key={item.id}
          data={item}
          onSave={handleSubDataSave}
          onRemove={handleSubDataRemove}
        />
      ));

  function handleSubDataSave(newData) {
    const oldData = data.find((item) => item.id === newData.id);
    const oldDataIndex = data.indexOf(oldData);

    const updatedData = [...data];
    updatedData[oldDataIndex] = newData;
    onChange(updatedData);
  }

  function handleSubDataRemove(dataToRemove) {
    const updatedArr = [...data];
    const toRemove = data.find((item) => item.id === dataToRemove.id);
    const indexToRemove = updatedArr.indexOf(toRemove);

    updatedArr.splice(indexToRemove, 1);
    onChange(updatedArr);
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
      <div className="fields">{fields}</div>
      {Array.isArray(data) && (
        <button className="addBtn" type="button" onClick={handleAddSubCategory}>
          Add
        </button>
      )}
    </div>
  );
}

function getInput(id, key, value, handleChange) {
  return (
    <Input
      key={id}
      label={key}
      name={key}
      type="text"
      value={value}
      handleChange={handleChange}
    />
  );
}

function getFields(data, handleChange) {
  return Object.entries(data).map(([key, value], index) => {
    const id = index + key;
    return getInput(id, key, value, handleChange);
  });
}
