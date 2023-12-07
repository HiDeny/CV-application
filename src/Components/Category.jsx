import SubCategory from './SubCategory';
import Card from './Card';

export default function Category({ title, data, handleChange }) {
  const content = Array.isArray(data) ? (
    <SubCategory title={title} data={data} handleChange={handleChange} />
  ) : (
    <Card item={data} handleChange={handleChange} />
  );

  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      {content}
    </div>
  );
}
