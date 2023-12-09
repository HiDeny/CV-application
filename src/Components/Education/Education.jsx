import { v4 as uuid } from 'uuid';
import Card from './Card';

export default function Education({ data, updateData }) {
  function handleChange(updatedItem, remove = false) {
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
      schoolName: '',
      title: '',
      date: { start: '', end: '' },
    };

    updateData([...data, newItem]);
  }

  return (
    <div className="category education">
      <h2 className="category-title">Education</h2>
      <div className="cards education">
        {data.map((item) => (
          <Card key={item.id} item={item} handleChange={handleChange} />
        ))}
      </div>
      <button type="button" className="addBtn" onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
}
