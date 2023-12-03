import '../Styles/Input.css';

function Input({ label, name, type, value, handleChange }) {
  return (
    <label>
      {label}
      <input type={type} name={name} value={value} onChange={handleChange} />
    </label>
  );
}

export default Input;
