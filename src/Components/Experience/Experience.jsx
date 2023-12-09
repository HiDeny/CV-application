import { v4 as uuid } from 'uuid';
import Card from './Card';

export default function Experience({ data, updateData }) {
  function handleItemChange(updatedItem, remove = false) {
    let nextData;

    if (remove) {
      nextData = data.filter((item) => item.id !== updatedItem.id);
    } else {
      nextData = data.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      });
    }

    updateData(nextData);
  }

  function handleClickAdd() {
    const newItem = {
      id: uuid(),
      companyName: '',
      position: '',
      date: { start: '', end: '' },
    };

    updateData([...data, newItem]);
  }

  return (
    <div className="category experience">
      <h2 className="category-title">Experience</h2>
      <div className="cards experience">
        {data.map((item) => (
          <Card key={item.id} item={item} handleItemChange={handleItemChange} />
        ))}
      </div>
      <button type="button" className="addBtn" onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
}
