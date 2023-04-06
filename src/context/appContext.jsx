import { useState } from 'react'
import { createContext } from 'react'

export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [signup, setSignup] = useState('')
  return (
    <AppContext.Provider value={{ signup, setSignup }}>
      {children}
    </AppContext.Provider>
  )
}
