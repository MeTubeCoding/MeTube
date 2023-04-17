import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavigationBar from './components/NavigationBar'
import VideoPage from './pages/VideoPage'

function App (): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/short" element={<HomePage />} />
          <Route path="/" element={<NavigationBar />} />
          <Route path="/videopage" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
