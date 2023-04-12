/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

import { Box } from '@mui/material'
import { VideoList } from './components'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/videos' element={<VideoList />} />
          <Route path='/:id' element={<h1>Page Résultats</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
