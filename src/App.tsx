/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavigationBar from './components/NavigationBar'
import VideoPage from './pages/VideoPage'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VideoPage />} />
          <Route path='/:id' element={<h1>Page Résultats</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App