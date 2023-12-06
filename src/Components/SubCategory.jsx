import Card from './Card';

export default function SubCategory({ data, onChange }) {
  const cards = data.map((item) => (
    <form onSubmit={handleCardSubmit}>
      <Card key={item.id} item={item} onChange={handleItemChange} />
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

  function handleCardSubmit(e) {
    e.preventDefault();
  }

  return cards;
}
