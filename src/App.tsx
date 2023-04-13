/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavigationBar from './components/NavigationBar'
import VideoPage from './pages/VideoPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<NavigationBar />} />
          <Route path="/videopage" element={<VideoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
