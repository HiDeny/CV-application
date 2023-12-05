import { useState } from 'react';
import Input from './Input';

export default function SubCategory({ data, onSave, onRemove }) {
  const [subData, setSubData] = useState(data);
  const fields = getFields(subData, handleSubDataChange);

  function handleSubDataChange(e) {
    const { value, name } = e.target;
    const updatedInfo = { ...subData, [name]: value };
    setSubData(updatedInfo);
  }

  return (
    <div className="subCategory">
      <h3 className="subCategory-title">{data.Name}</h3>
      {fields}
      <button onClick={() => onSave(subData)}>SAVE</button>
      <button onClick={() => onRemove(subData)}>REMOVE</button>
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
