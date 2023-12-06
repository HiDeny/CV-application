import { useState } from 'react';
import { getFields } from './helper';

export default function SubCategory({ data, subData, onChange }) {
  const [newSubData, setNewSubData] = useState(subData);
  const fields = getFields(newSubData, handleSubDataChange);

  function handleSubDataChange(e) {
    const { value, name } = e.target;
    let key = name;
    let updatedValue = value;

    if (name === 'Start' || name === 'End') {
      key = ['Date'];
      const oldDate = newSubData['Date'];
      const newDate = { ...oldDate, [name]: value };
      updatedValue = newDate;
    }

    setNewSubData({ ...newSubData, [key]: updatedValue });
  }

  function handleSubDataSave(e) {
    e.preventDefault();
    const oldData = data.find((item) => item.id === subData.id);
    const oldDataIndex = data.indexOf(oldData);

    const updatedData = [...data];
    updatedData[oldDataIndex] = newSubData;
    onChange(updatedData);
  }

  function handleSubDataRemove() {
    const updatedArr = [...data];
    const toRemove = data.find((item) => item.id === newSubData.id);
    const indexToRemove = updatedArr.indexOf(toRemove);

    updatedArr.splice(indexToRemove, 1);
    onChange(updatedArr);
  }

  return (
    <form className="subCategory" onSubmit={handleSubDataSave}>
      <h3 className="subCategory-title">{newSubData.Name || 'Name'}</h3>
      <div className="content">{fields}</div>
      <button type="button" className="removeBtn" onClick={handleSubDataRemove}>
        REMOVE
      </button>
      <button type="submit" className="removeBtn">
        SAVE
      </button>
    </form>
  );
}
