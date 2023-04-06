import Input from '../../components/Input'
import Post from '../../components/Post'
import './style.css'

function Main() {
  return (
    <div className="main">
      <header className="header">
        <h2>CodeLeap Network</h2>
      </header>
      <div className="container">
        <h3>What’s on your mind?</h3>
        <Input title="Title" placeholder="Hello world" />
        <Input title="Content" placeholder="Content here" />
        <button>Create</button>
      </div>
      <div className="content">
        <Post />
      </div>
    </div>
  )
}

export default Main
