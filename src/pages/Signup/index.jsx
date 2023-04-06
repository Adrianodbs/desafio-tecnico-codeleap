import Input from '../../components/Input'
import './style.css'

function Signup() {
  return (
    <div className="container">
      <h2>Welcome to CodeLeap network!</h2>
      <Input title="Please enter your username" placeholder="John doe" />
      <button>ENTER</button>
    </div>
  )
}

export default Signup
