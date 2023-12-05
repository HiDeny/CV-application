import Input from './Input';
import SubCategory from './SubCategory';

const educationTemplate = (id) => ({
  id,
  Name: 'School1',
  Degree: '',
  Address: '',
  'Start date': '',
  'End date': '',
});

const jobTemplate = (id) => ({
  id,
  Name: '',
  Position: '',
  Responsibility: '',
  Details: '',
  'Start date': '',
  'End date': '',
});

export default function Category({ title, data, onChange }) {
  const fields = !Array.isArray(data)
    ? getFields(data, onChange)
    : data.map((item) => (
        <SubCategory key={item.id} data={item} onSave={handleSubDataSave} />
      ));

  function handleSubDataSave(newData) {
    const oldData = data.find((item) => item.id === newData.id);
    const oldDataIndex = data.indexOf(oldData);

    const updatedData = [...data];
    updatedData[oldDataIndex] = newData;
    onChange(updatedData);
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
      <h2 className={`category-${title}`}>{title}</h2>
      {fields}
      {Array.isArray(data) && (
        <button type="button" onClick={handleAddSubCategory}>
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
    if (typeof value === 'object') {
      return getFields(value, handleChange);
    }
    const id = index + key;
    return getInput(id, key, value, handleChange);
  });
}
