export default function SkillCard({ item, handleOnChange, handleItemRemove }) {
  const { id, value } = item;

  return (
    <li className="skillItem">
      <input
        type="text"
        data-id={id}
        value={value}
        maxLength={25}
        onChange={handleOnChange}
      />
      <button
        type="button"
        className="removeBtn"
        onClick={() => handleItemRemove(id)}
      >
        ❌
      </button>
    </li>
  );
}
