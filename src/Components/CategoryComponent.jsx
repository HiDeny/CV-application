import Input from './Input';
import SubCategory from './SubCategory';

export default function Category({ title, data, onChange }) {
  const fields = !Array.isArray(data)
    ? getFields(data, onChange)
    : data.map((item, index) => (
        <SubCategory id={index} data={item} onChange={onChange} />
      ));

  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      {fields}
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
