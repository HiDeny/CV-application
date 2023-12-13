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
      name: '',
      position: '',
      responsibility: '',
      date: { start: '', end: '' },
    };

    const container = document.querySelector('.experience');
    const exampleCard = container.querySelector('.card.example');
    if (exampleCard) {
      exampleCard.classList.add('remove');

      setTimeout(() => {
        updateData([...data, newItem]);
      }, 340);
      return;
    }
    updateData([...data, newItem]);
  }

  return (
    <div className="category experience">
      <h2 className="category-title">Experience</h2>
      <div className="cards experience">
        {content.length > 0 ? content : <ExampleCard />}
      </div>
      <button type="button" className="addBtn" onClick={handleClickAdd}>
        +
      </button>
    </div>
  );
}

function ExampleCard() {
  return (
    <div className="card experience example">
      <div className="content">
        <p>COMPANY NAME</p>
        <p>POSITION</p>
        <p>RESPONSIBILITY</p>
        <p>STARTED / ENDED</p>
      </div>
      <p className="hint">(THIS IS AN EXAMPLE)</p>
    </div>
  );
}
