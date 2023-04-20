/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChaineHeader from './components/ChaineHeader'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChaineHeader />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
