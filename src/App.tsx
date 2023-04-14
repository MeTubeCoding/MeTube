import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import ChannelCreationPage from './pages/ChannelCreationPage'
import WindowUploadFusion from './pages/WindowUploadFusion'

const App = () => {
  return (
    <div>
      <ChannelCreationPage />
      <WindowUploadFusion />
    </div>
  )
}

export default App
