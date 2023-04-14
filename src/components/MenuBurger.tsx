import React, { useState } from 'react'

const MenuBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    //<Router>
    <div className="menu-container">
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
        <ul>
          <li>
            <div className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                <div className="ml-3 md-6 flex items-center">
                  <button className="material-icons hover:bg-neutral-700 w-10 h-10 rounded-full active:bg-neutral-800">
                    ☰
                  </button>
                  <p className="ml-2">Close</p>
                </div>
              ) : (
                <div className="ml-3 md-6 flex items-center">
                  <button className="material-icons hover:bg-neutral-700 w-14 h-14 rounded-full active:bg-neutral-800">
                    ☰
                  </button>
                </div>
              )}
            </div>
            {isMenuOpen && (
              <div>
                <li className="material-icons hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800">
                  <a href="App.tsx" className="text-align:center">
                    Accueil
                  </a>
                </li>
                <li className="hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800">
                  <a href="pages/timeline.tsx">Recommandations</a>
                </li>
                <li className="hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800">
                  <a href="/Tendances">Tendances</a>
                </li>
                <li className="hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800">
                  <a href="#">Abonnements</a>
                </li>
                <li className="hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800">
                  <a href="#">Bibliothèque</a>
                </li>
                <li className="hover:bg-neutral-700 p-3 rounded-lg active:bg-neutral-800">
                  <a href="#">Historique</a>
                </li>
              </div>
            )}
          </li>
        </ul>
      </div>
    </div>
    //</Router>
  )
}

export default MenuBurger
