import './style.css'

function Input({ title, placeholder, value, onChange }) {
  return (
    <label className="input">
      <span>{title}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default Input
