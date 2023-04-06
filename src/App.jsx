import Signup from './pages/Signup'
import './global.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
