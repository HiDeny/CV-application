import { v4 as uuid } from 'uuid';
import Card from './Card';

export default function Education({ data, updateData }) {
  const content = data.map((item) => (
    <Card key={item.id} item={item} handleChange={handleChange} />
  ));

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
      name: '',
      title: '',
      date: { start: '', end: '' },
    };

    updateData([...data, newItem]);
  }

  return (
    <div className="category education">
      <h2 className="category-title">Education</h2>
      <div className="cards education">
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
    <div className="card education example">
      <div className="content">
        <p>SCHOOL NAME</p>
        <p>TITLE</p>
        <p>STARTED / ENDED</p>
      </div>
      <p className='hint'>(THIS IS AN EXAMPLE)</p>
    </div>
  );
}
