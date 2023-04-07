import './style.css'

function Input({ title, placeholder, value, onChange, className }) {
  return (
    <label className="input">
      <span>{title}</span>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        required
      />
    </label>
  )
}

export default Input
