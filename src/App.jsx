import Signup from './pages/Signup'
import './global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import { AppProvider } from './context/appContext'

function App() {
  return (
    <div className="app">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/main" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App
