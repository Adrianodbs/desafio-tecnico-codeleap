import { useState, createContext, useEffect } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [signup, setSignup] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [openUpdateModal, setOpenUpdateModal] = useState(false)
  const [deleteItem, setDeleteItem] = useState('')
  const [updatedItem, setUpdatedItem] = useState({ title: '', content: '' })

  //Buscar
  useEffect(() => {
    const postStorage = localStorage.getItem('posts-codeleap')

    if (postStorage) {
      setPosts(JSON.parse(postStorage))
    }
  }, [])

  //Salvar alterações
  useEffect(() => {
    localStorage.setItem('posts-codeleap', JSON.stringify(posts))
  }, [posts])

  return (
    <AppContext.Provider
      value={{
        signup,
        setSignup,
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
        deleteItem,
        setDeleteItem,
        updatedItem,
        setUpdatedItem
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
