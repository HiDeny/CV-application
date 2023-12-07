import Card from './Card';
import { educationTemplate, jobTemplate } from './helper';

export default function SubCategory({ title, data, onChange }) {
  const cards = data.map((item) => (
    <Card
      key={item.id}
      item={item}
      onChange={handleItemChange}
      onRemove={handleItemRemove}
    />
  ));

  function handleItemChange(newItem) {
    const oldData = data.find((item) => item.id === newItem.id);
    const oldDataIndex = data.indexOf(oldData);

    const newData = [...data];
    newData[oldDataIndex] = newItem;

    onChange(newData);
  }

  function handleItemRemove(itemToRemove) {
    const toRemove = data.find((item) => item.id === itemToRemove.id);
    const indexToRemove = data.indexOf(toRemove);

    const updatedArr = [...data];
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
    <>
      {cards}
      <button className="addBtn" type="button" onClick={handleAddSubCategory}>
        Add
      </button>
    </>
  );
}
