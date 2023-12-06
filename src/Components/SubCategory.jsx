import DisplayCard from './CardDisplay';
import CardEdit from './CardEdit';
import { educationTemplate, jobTemplate } from './helper';

export default function SubCategory({ title, data, onChange }) {
  const cards = data.map((item) => (
    <>
      <DisplayCard key={item.id} item={item} />
      <button className="editButton" onClick={() => handleEditClick(item)}>
        Edit
      </button>
      <form onSubmit={handleCardSubmit} className="CardEdit">
        <CardEdit key={item.id} item={item} onChange={handleItemChange} />
        <button
          type="button"
          className="removeBtn"
          onClick={() => handleItemRemove(item)}
        >
          REMOVE
        </button>
        <button type="submit" className="removeBtn">
          SAVE
        </button>
      </form>
    </>
  ));

  function handleEditClick(item) {
    const element = document.querySelector(`[data-id="${item.id}"]`);
    element.replaceWith(
      <form onSubmit={handleCardSubmit} className="CardEdit">
        <CardEdit key={item.id} item={item} onChange={handleItemChange} />
        <button
          type="button"
          className="removeBtn"
          onClick={() => handleItemRemove(item)}
        >
          REMOVE
        </button>
        <button type="submit" className="removeBtn">
          SAVE
        </button>
      </form>
    );
    console.log(element);
  }

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

  function handleCardSubmit(e) {
    e.preventDefault();
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
