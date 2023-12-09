import { v4 as uuid } from 'uuid';
import Card from './Card';

export default function Experience({ data, updateData }) {
  const content = data.map((item) => (
    <Card key={item.id} item={item} handleItemChange={handleItemChange} />
  ));

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
        {content.length > 0 ? content : exampleCard()}
      </div>
      <button type="button" className="addBtn" onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
}

function exampleCard() {
  return (
    <div className="card experience example">
      <p>COMPANY NAME</p>
      <p>POSITION</p>
      <p>DETAILS</p>
      <p>STARTED / ENDED</p>
    </div>
  );
}
