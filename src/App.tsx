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
                <button className="material-icons bg-neutral-700 p-5 rounded-lg active:bg-neutral-800">Close</button>
              ) : (
                <button className="material-icons bg-neutral-700 p-5 rounded-lg active:bg-neutral-800">Menu</button>
              )}
            </div>
            {isMenuOpen && (
              <div>
               <li>
                  <a href="index.tsx">Accueil</a>
                </li>
                <li>
                  <a href="pages/timeline.tsx" className='bg-neutral-700 p-5 rounded-lg active:bg-neutral-800'>Recommandés</a>
                </li>
                <li>
                  <a href="#" className='bg-neutral-700 p-5 rounded-lg active:bg-neutral-800'>Tendances</a>
                </li>
                <li>
                  <a href="#" className='bg-neutral-700 p-5 rounded-lg active:bg-neutral-800'>Abonnements</a>
                </li>
                <li>
                  <a href="#" className='bg-neutral-700 p-5 rounded-lg active:bg-neutral-800'>Bibliothèque</a>
                </li>
                <li>
                  <a href="#" className='bg-neutral-700 p-5 rounded-lg active:bg-neutral-800'>Historique</a>
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
          <a href='App.tsx' className="text-white font-bold text-2xl">MeTUBE</a>
          <div className="flex items-center">
            <input type="text" placeholder="Rechercher sur MeTube..." className='px-2 py-1 rounded-lg text-black mr-2' />
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'>Rechercher</button>
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
