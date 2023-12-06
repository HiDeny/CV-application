export default function DisplayCard({ item }) {
  const fields = Object.entries(item).map(([key, value]) => {
    if (key === 'id') return;
    if (key === 'Date') {
      return (
        <div className="date">
          <p>{key.Start}</p>
          <p>{key.End}</p>
        </div>
      );
    }

    return <p>{value}</p>;
  });

  return (
    <div className="card displayCard" data-id={item.id}>
      {fields}
    </div>
  );
}
