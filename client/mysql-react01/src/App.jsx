import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Add from '../pages/Add';
import Books from "../pages/Books"
import Update from "../pages/Update"
import "../style/style.css"



const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/add" element={<Add />} />
      <Route path='/update/:id' element={<Update />} />
      {/* <Route path="/about" element={<About />} /> */}
    </Routes>
    </BrowserRouter>

    </div>
    
  )
}

export default App