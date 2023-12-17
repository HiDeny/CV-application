import { v4 as uuid } from 'uuid';

const exampleData = {
  personal: {
    id: uuid(),
    firstName: 'First',
    lastName: 'Last',
    email: 'email@address.com',
    phone: '123 456 789',
    website: 'example.com',
    picture: '',
  },
  aboutMe:
    'Nostrud dolore laboris ea elit laborum minim nostrud elit anim. In do qui in elit proident proident excepteur tempor pariatur ullamco. Non culpa voluptate pariatur minim anim sunt. Cillum velit cupidatat irure qui dolor reprehenderit nulla eungiaigc.',
  education: [
    {
      id: uuid(),
      name: 'School Name',
      title: 'Title Of Education',
      date: { start: '2000-01-01', end: '2010-01-01' },
    },
    {
      id: uuid(),
      name: 'School Name 2',
      title: 'Title Of Education 2',
      date: { start: '2000-01-01', end: '2010-01-01' },
    },
  ],
  experience: [
    {
      id: uuid(),
      name: 'Company Name',
      position: 'Position',
      responsibility:
        'Nostrud dolore laboris ea elit laborum minim nostrud elit anim. In do qui in elit proident proident ',
      date: { start: '2000-01-01', end: '2010-01-01' },
    },
    {
      id: uuid(),
      name: 'Company Nam 2',
      position: 'Position 2',
      responsibility:
        'Nostrud dolore laboris ea elit laborum minim nostrud elit anim. In do qui in elit proident proident ',
      date: { start: '2000-01-01', end: '2010-01-01' },
    },
  ],
  skills: [
    { id: uuid(), value: 'Talking' },
    { id: uuid(), value: 'Thinking' },
    { id: uuid(), value: 'Walking' },
  ],
};

export default function Example({ setExampleData, clearExampleData }) {
  return (
    <section className="example-section">
      <div className="example-buttons">
        <button
          type="button"
          className="exampleBtn"
          onClick={() => setExampleData(exampleData)}
        >
          Example
        </button>
        <button type="button" className="exampleBtn" onClick={clearExampleData}>
          Clear
        </button>
      </div>
      <p className="hint-example-section">Swipe up for example</p>
    </section>
  );
}
