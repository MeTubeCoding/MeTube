import React, { useState } from 'react'
import { RiMenuLine } from 'react-icons/ri'

const MenuBurger = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="menu-burger z-50">
      {isMenuOpen ? (
        <div className="menu-overlay" onClick={closeMenu}></div>
      ) : null}
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-button" onClick={toggleMenu}>
          <button className="material-icons hover:bg-neutral-700 w-10 h-16 rounded-full active:bg-neutral-800 focus:outline-none">
            <RiMenuLine size="24" />{' '}
          </button>
        </div>{' '}
        {isMenuOpen && (
          <div className="menu-items">
            <ul>
              <li>
                <a href="App.tsx" className="menu-link">
                  Accueil
                </a>
              </li>
              <li>
                <a href="pages/timeline.tsx" className="menu-link">
                  Recommandations
                </a>
              </li>
              <li>
                <a href="/Tendances" className="menu-link">
                  Tendances
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Abonnements
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Bibliothèque
                </a>
              </li>
              <li>
                <a href="#" className="menu-link">
                  Historique
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MenuBurger
