/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Navigation from './components/Navigation'
import MontagePanneau from './components/MontagePanneau'
import PrevisualisationPanneau from './components/PrevisualisationPanneau'
import BibliothequeMedias from './components/BibliothequeMedias'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
            <Navigation />
            <div className="container mx-auto px-4">
              <MontagePanneau />
              <PrevisualisationPanneau />
              <BibliothequeMedias />
              {/* Ajoutez le reste de votre application ici */}
            </div>
          <Route path='/:id' element={<h1>Page Résultats</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
