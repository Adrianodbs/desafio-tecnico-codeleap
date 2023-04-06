import { useContext } from 'react'
import Input from '../../components/Input'
import Post from '../../components/Post'
import './style.css'
import { AppContext } from '../../context/appContext'

function Main() {
  const { title, setTitle, content, setContent, posts, setPosts } =
    useContext(AppContext)

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      title,
      content
    }
    setPosts(prev => [...prev, data])
    console.log(posts)
    setTitle('')
    setContent('')
  }

  function handleDelete(id) {
    const updatedItems = posts.filter(item => item.title !== id)
    setPosts(updatedItems)
  }
  return (
    <div className="main">
      <header className="header">
        <h2>CodeLeap Network</h2>
      </header>
      <div className="container">
        <h3>What’s on your mind?</h3>
        <form onSubmit={handleSubmit}>
          <Input
            title="Title"
            placeholder="Hello world"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Input
            title="Content"
            placeholder="Content here"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
          <button type="submit">Create</button>
        </form>
      </div>
      <div className="content">
        {posts.map((post, i) => (
          <ul key={i}>
            <Post
              onClick={() => handleDelete(post.title)}
              title={post.title}
              content={post.content}
            />
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Main
