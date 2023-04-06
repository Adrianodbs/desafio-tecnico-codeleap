import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [signup, setSignup] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [posts, setPosts] = useState([])
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
        setPosts
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
