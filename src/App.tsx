/* eslint-disable prettier/prettier */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'

import { Box } from '@mui/material'
import { VideoList } from './components'
import VideoItem from './components/VideoItem'
import ChannelBanner from './components/ChannelBanner'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Accueil" element={<VideoList />} />

          <Route path="/Live" element={<h1>Page Résultats</h1>} />
          <Route
            path="/videos"
            element={<VideoItem thumbnail={''} title={''} videoId={''} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
