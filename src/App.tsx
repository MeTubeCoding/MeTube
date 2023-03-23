import React, {useState} from 'react';
import './App.css';

let test = document.getElementById("test");

test?.addEventListener("click",()=>{
  fetch('http://localhost:5600/demo')
    // .then(response => response.text())
    // .then(data => console.log(data))
    // .catch(error => console.error(error));
});



const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="menu-container">
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
        <ul>
          <li>
            <div className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? (
                <button className="material-icons">Close</button>
              ) : (
                <button className="material-icons">Menu</button>
              )}
            </div>
            {isMenuOpen && (
              <div>
                <li>
                  <a href="index.tsx">Accueil</a>
                </li>
                <li>
                  <a href="pages/timeline.tsx">Recommandés</a>
                </li>
                <li>
                  <a href="#">Tendances</a>
                </li>
                <li>
                  <a href="#">Abonnements</a>
                </li>
                <li>
                  <a href="#">Bibliothèque</a>
                </li>
                <li>
                  <a href="#">Historique</a>
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
      <body>
        <div className = "haut">
        <a href='App.tsx'><img className="logo" src="https://cdn.discordapp.com/attachments/1019222515962368112/1088482444207988838/Metube_logo.png"/></a>
          <div className="search">
            <input type="text" placeholder="Rechercher sur MeTube..." className='Searching' />
            <button className='rechercher'>Rechercher</button>
          </div>
        </div>
        <div>
          {Menu()}
        </div>
      </body>
    </div>
  )
}

export default App;
