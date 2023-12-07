import SubCategory from './SubCategory';
import Card from './Card';

export default function Category({ title, data, onChange }) {
  let content;

  if (Array.isArray(data)) {
    content = <SubCategory title={title} data={data} onChange={onChange} />;
  } else {
    content = <Card item={data} onChange={onChange} />;
  }

  return (
    <div className="category">
      <h2 className="category-title">{title}</h2>
      {content}
    </div>
  );
}
