import Input from './Input';

export default function SubCategory({ data, subData, onChange }) {
  const fields = getFields(subData, handleSubDataChange);

  function handleSubDataChange(e) {
    const { value, name } = e.target;
    let key = name;
    let updatedValue = value;

    if (name === 'Start' || name === 'End') {
      key = ['Date'];
      const oldDate = subData['Date'];
      const newDate = { ...oldDate, [key]: value };
      updatedValue = newDate;
    }

    handleSubDataSave({ ...subData, [key]: updatedValue });
  }

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

  return (
    <div className="subCategory">
      <h3 className="subCategory-title">{data.Name || 'Name'}</h3>
      <div className="fields">{fields}</div>
      <button
        className="removeBtn"
        onClick={() => handleSubDataRemove(subData)}
      >
        REMOVE
      </button>
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
    if (key === 'id') return;
    if (key === 'Date') {
      return (
        <label className="date">
          Date
          <Input
            // key={id}
            label={'Start'}
            name={'Start'}
            type="date"
            value={key.Start}
            handleChange={handleChange}
          />
          <Input
            // key={id}
            label={'End'}
            name={'End'}
            type="date"
            value={key.End}
            handleChange={handleChange}
          />
        </label>
      );
    }
    const id = index + key;
    return getInput(id, key, value, handleChange);
  });
}
