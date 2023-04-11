import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main from './pages/Main';

function App() {
  return (
    <div className = "App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>

        <Route path='/:id' element={<h1>Page Résultats</h1>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
