import React from 'react'
import Home from './pages/home/Home'
import "./style.css"
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import Hacking from './blogs/Hacking'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route link to="/" element={<Home />} />
          <Route Link to="/hacking" element={<Hacking />} />
        </Routes>
      </BrowserRouter>
      <Home/>
    </div>
  )
}

export default App