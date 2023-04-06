import { useContext } from 'react'
import Input from '../../components/Input'
import './style.css'
import { AppContext } from '../../context/appContext'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const { signup, setSignup } = useContext(AppContext)
  const navigate = useNavigate()

  function handleSignup() {
    if (signup === 'codeleap') {
      navigate('/main')
    } else {
      alert('Usuário não cadastrado')
    }
  }
  return (
    <div className="container">
      <h2>
        Welcome to CodeLeap network!{' '}
        <small style={{ fontSize: '11px', color: 'red' }}>
          Username: codeleap
        </small>
      </h2>

      <Input
        title="Please enter your username"
        placeholder="John doe"
        value={signup}
        onChange={e => setSignup(e.target.value)}
      />

      <button onClick={handleSignup}>ENTER</button>
    </div>
  )
}

export default Signup
