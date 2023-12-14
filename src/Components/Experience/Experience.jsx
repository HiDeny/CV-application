import { v4 as uuid } from 'uuid';
import Card from './Card';

export default function Experience({ data, updateData }) {
  function handleChange(updatedItem) {
    updateData((prevData) =>
      prevData.map((item) => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      })
    );
  }

  function handleRemove(idToRemove) {
    updateData((prevData) => prevData.filter((item) => item.id !== idToRemove));
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
        updateData((prevData) => [...prevData, newItem]);
      }, 340);
      return;
    }
    updateData((prevData) => [...prevData, newItem]);
  }

  return (
    <div className="category experience">
      <h2 className="category-title">Experience</h2>
      <div className="cards experience">
        {data.length < 1 && <ExampleCard />}
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            handleChange={handleChange}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <button
        type="button"
        className="addBtn"
        onClick={handleClickAdd}
        disabled={data.length > 3}
      >
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
