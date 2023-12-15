import { v4 as uuid } from 'uuid';
import EducationCard from './EducationCard';
import './Education.css';

export default function Education({ data, updateData }) {
  function handleChange(updatedItem) {
    const nextData = data.map((item) => {
      if (item.id === updatedItem.id) return updatedItem;
      return item;
    });
    updateData(nextData);
  }

  function handleRemove(idToRemove) {
    updateData((prevData) => prevData.filter((item) => item.id !== idToRemove));
  }

  function handleClickAdd() {
    const container = document.querySelector('.education');
    const exampleCard = container.querySelector('.card.example');
    const newItem = {
      id: uuid(),
      name: '',
      title: '',
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
    <EducationCard
      key={item.id}
      item={item}
      handleChange={handleChange}
      handleRemove={handleRemove}
    />
  ));

  return (
    <fieldset className="category education">
      <h2 className="category-title">Education</h2>
      <div className="cards education">
        {data.length < 1 && <ExampleCard />}
        {content}
      </div>
      <button
        type="button"
        className="addBtn"
        onClick={handleClickAdd}
        disabled={data.length >= 4}
      >
        +
      </button>
    </fieldset>
  );
}

function ExampleCard() {
  return (
    <div className="card education example">
      <div className="content">
        <p>SCHOOL NAME</p>
        <p>TITLE</p>
        <p>STARTED / ENDED</p>
      </div>
      <p className="hint-example">(THIS IS AN EXAMPLE)</p>
    </div>
  );
}
