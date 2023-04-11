/* eslint-disable eol-last */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/editeur'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />

          <Route path='/:id' element={<h1>Page Résultats</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App