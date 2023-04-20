/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ChaineAccueil from './components/ChaineAccueil'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/ChaineAccueil" element={<ChaineAccueil />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
