import { v4 as uuid } from 'uuid';
import ExperienceCard from './ExperienceCard';
import './Experience.css';

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
    const container = document.querySelector('.experience');
    const exampleCard = container.querySelector('.card.example');
    const newItem = {
      id: uuid(),
      name: '',
      position: '',
      responsibility: '',
      date: { start: '', end: '' },
    };

    if (exampleCard) {
      exampleCard.classList.add('remove');

      setTimeout(() => {
        updateData((prevData) => [...prevData, newItem]);
      }, 340);
      return;
    }
    updateData((prevData) => [...prevData, newItem]);
  }
  const content = data.map((item) => (
    <ExperienceCard
      key={item.id}
      item={item}
      handleChange={handleChange}
      handleRemove={handleRemove}
    />
  ));

  return (
    <fieldset className="category experience">
      <legend>4/5</legend>
      <h2 className="category-title">Experience</h2>
      <div className="cards experience">
        {data.length < 1 && <ExampleCard />}
        {content}
      </div>
      <button
        type="button"
        className="addBtn"
        onClick={handleClickAdd}
        disabled={data.length >= 3}
      >
        +
      </button>
    </fieldset>
  );
}

function ExampleCard() {
  return (
    <div className="card experience example">
      <div className="fields">
        <p>COMPANY NAME</p>
        <p>POSITION</p>
        <p>RESPONSIBILITY</p>
        <p>STARTED / ENDED</p>
      </div>
      <p className="hint-example">(THIS IS AN EXAMPLE)</p>
    </div>
  );
}
