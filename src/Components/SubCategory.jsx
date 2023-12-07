import Card from './Card';
import { educationTemplate, jobTemplate } from './helper';

export default function SubCategory({ title, data, handleChange }) {
  const cards = data.map((item) => (
    <Card
      key={item.id}
      item={item}
      handleChange={handleItemChange}
      handleRemove={handleItemRemove}
    />
  ));

  function handleItemChange(newItem) {
    const oldData = data.find((item) => item.id === newItem.id);
    const oldDataIndex = data.indexOf(oldData);

    const newData = [...data];
    newData[oldDataIndex] = newItem;

    handleChange(newData);
  }

  function handleItemRemove(itemToRemove) {
    const toRemove = data.find((item) => item.id === itemToRemove.id);
    const indexToRemove = data.indexOf(toRemove);

    const updatedArr = [...data];
    updatedArr.splice(indexToRemove, 1);
    handleChange(updatedArr);
  }

  function handleAddSubCategory() {
    const updatedData = [...data];
    const newId = Math.random() * 999;
    const newItem =
      title === 'Education' ? educationTemplate(newId) : jobTemplate(newId);
    updatedData.push(newItem);
    handleChange(updatedData);
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
