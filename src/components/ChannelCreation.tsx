import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WindowCreateOneChannel from '../pages/WindowCreateOneChannel'
import WindowCreateChannel from '../pages/WindowCreateChannel'
import WindowUploadFusion from '../pages/WindowUploadFusion'

function ChannelCreation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WindowCreateChannel />} />
        <Route path="/create" element={<WindowCreateOneChannel />} />
        <Route path="/upload" element={<WindowUploadFusion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default ChannelCreation
