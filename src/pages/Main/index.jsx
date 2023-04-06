import { useContext } from 'react'
import Input from '../../components/Input'
import Post from '../../components/Post'
import './style.css'
import { AppContext } from '../../context/appContext'
import ModalDelete from '../../components/Modal'
import UpdateModal from '../../components/UpdateModal'
import { useState } from 'react'

function Main() {
  const {
    title,
    setTitle,
    content,
    setContent,
    posts,
    setPosts,
    openModal,
    setOpenModal,
    openUpdateModal,
    setOpenUpdateModal,
    setDeleteItem,
    deleteItem,
    updatedItem,
    setUpdatedItem
  } = useContext(AppContext)

  function handleSubmit(e) {
    e.preventDefault()
    const data = {
      title,
      content
    }
    setPosts(prev => [...prev, data])
    setTitle('')
    setContent('')
  }

  const handleCancelItem = () => {
    setOpenModal(false)
    setOpenUpdateModal(false)
  }

  const handleClickDelete = id => {
    setDeleteItem(id)
    setOpenModal(true)
  }

  const handleDeleteItem = () => {
    setPosts(prev => {
      const newArray = [...prev]
      return newArray.filter(item => item.title !== deleteItem)
    })
    setOpenModal(false)
  }

  const handleClickUpdate = id => {
    setDeleteItem(id)
    setUpdatedItem({ title: id.title, content: id.content })
    setOpenUpdateModal(true)
  }

  const handleUpdateItem = (updatedTitle, updatedContent) => {
    const updatedItems = posts.map(item => {
      if (item.title === deleteItem) {
        return { ...item, title: updatedTitle, content: updatedContent }
      }
      return item
    })
    setPosts(updatedItems)
    setDeleteItem(null)
    setUpdatedItem({ title: '', content: '' })
    setOpenUpdateModal(false)
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
              deletar={() => handleClickDelete(post.title)}
              update={() => handleClickUpdate(post.title)}
              title={post.title}
              content={post.content}
            />
            {openModal && (
              <ModalDelete
                onClickCancel={handleCancelItem}
                onClickDelete={handleDeleteItem}
              />
            )}
            {openUpdateModal && (
              <UpdateModal
                onClickCancel={handleCancelItem}
                onClickUpdate={() =>
                  handleUpdateItem(updatedItem.title, updatedItem.content)
                }
              />
            )}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default Main
