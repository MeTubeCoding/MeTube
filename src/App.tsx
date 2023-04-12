import React, { useState } from 'react'
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
            <div className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className='ml-10 md-6'> 
                  <button className="material-icons hover:bg-neutral-700 w-10 h-10 rounded-lg active:bg-neutral-800">☰</button>
                  <p>Close</p>
                </div>
              ) : (
                <div className='ml-5 md-6'>
                  <button className="material-icons hover:bg-neutral-700 w-10 h-10 rounded-lg active:bg-neutral-800">☰</button>
                  <p>Menu</p>
                </div>
              )}
            </div>
            {isMenuOpen && (
              <div>
                <li className='material-icons hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="index.tsx" className='text-align:center'>Accueil</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="pages/timeline.tsx">Recommandations</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >Tendances</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >Abonnements</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >Bibliothèque</a>
                </li>
                <li className='hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800'>
                  <a href="#" >Historique</a>
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
    <div>
      <div className="bg-neutral-900 text-white font-roboto text-base font-normal leading-6 text-left m-0 p-0">
        <div className="flex justify-between items-center py-4 px-6">
          <a href='App.tsx' className="text-white font-bold text-2xl bg-neutral-700 p-3 rounded-lg active:bg-neutral-800">MeTube</a>
          <div className="flex items-center">
            <input type="text" placeholder="Rechercher sur MeTube..." className='px-2 py-1 rounded-lg text-black mr-2' />
            <button className='bg-neutral-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Rechercher</button>
          </div>
        </div>
        <div>
          {Menu()}
        </div>
      </div>
    </div>
  )
}

export default App;
