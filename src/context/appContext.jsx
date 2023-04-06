import { useState, createContext } from 'react'

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
