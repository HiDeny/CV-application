import Input from './Input';

function Category({ title, data, onChange }) {
  const fields = getFields(data, onChange);

  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      {fields}
    </div>
  );
}

export default Category;

function getInput(key, value, handleChange) {
  return (
    <Input
      key={key}
      label={key}
      name={key}
      type="text"
      value={value}
      handleChange={handleChange}
    />
  );
}

function getFields(data, handleChange) {
  return Object.entries(data).map(([key, value]) => {
    if (typeof value === 'object') {
      return getFields(value, handleChange);
    }
    return getInput(key, value, handleChange);
  });
}
