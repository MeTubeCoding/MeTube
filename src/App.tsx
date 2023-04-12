import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css'






const test = document.getElementById('test')

test?.addEventListener('click', () => {
  fetch('http://localhost:5600/demo')
    // .then(response => response.text())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
});


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  const closeMenu = () => {
    setIsMenuOpen(false)
  };

  return (
    <div className="menu-container">
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
        <ul>
          <li>
            <div className="menu-button mt-3 mb-3" onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className='ml-5 md-6 flex items-center'> 
                  <button className="material-icons hover:bg-neutral-700 w-10 h-10 rounded-full active:bg-neutral-800">☰</button>
                  <p className='ml-2'>Close</p>
                </div>
              ) : (
                <div className='ml-5 md-6 flex items-center'>
                  <button className="material-icons hover:bg-neutral-700 w-10 h-10 rounded-full active:bg-neutral-800">☰</button>
                  <p className='ml-2'>Menu</p>
                </div>
              )}
            </div>
            {isMenuOpen && (
              <div>
                <li className='material-icons hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800 text-align:center'>
                  <a href="index.tsx">| Accueil</a>
                </li>

                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <Link to="pages/timeline.tsx">| Recommandations</Link>
                </li>
                
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >| Tendances</a>
                </li>

                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >| Abonnements</a>
                </li>

                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >| Bibliothèque</a>
                </li>

                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >| Historique</a>
                </li>

              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};




// ================================================================================================
// ================================================================================================
// ================================================================================================




function App() {
  return (
    <Router>
      <div className='bg-neutral-800'>
        <div className="text-white font-roboto text-base font-normal leading-6 text-left m-0 p-0">
          <head className="bg-neutral-900 flex justify-between items-center py-4 px-6">
            <a href='App.tsx' className="text-white font-bold text-2xl bg-neutral-700 p-2 rounded-lg active:bg-neutral-800">MeTube</a>
            <div className="flex items-center">
              <input type="text" placeholder="Rechercher sur MeTube..." className='px-2 py-1 rounded-lg text-black mr-2' />
              <button className='bg-neutral-700 active:bg-neutral-800 text-white font-bold py-2 px-4 rounded-lg'>Rechercher</button>
            </div>
          </head>
          <div className='bg-neutral-800'>
            {Menu()}
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App;
