import './style.css'

function Input({ title, placeholder }) {
  return (
    <label className="input">
      <span>{title}</span>
      <input type="text" placeholder={placeholder} />
    </label>
  )
}

export default Input
