import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import ChannelCreationPage from './pages/ChannelCreationPage'

const App = () => {
  const activeProfileName = 'John Doe'

  return (
    <div>
      <ChannelCreationPage profileName={activeProfileName} />
    </div>
  )
}

export default App
