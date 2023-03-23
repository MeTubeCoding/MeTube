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

  return (
    <div className="menu-container">
      <div className="menu-button" onClick={toggleMenu}>
        {isMenuOpen ? (
          <button className="material-icons">Close</button>
        ) : (
          <button className="material-icons">Menu</button>
        )}
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : ''} texts`}>
        <ul>
          <li>
            <a href="index.tsx">Accueil</a>
          </li>
          <li>
            <a href="timeline.tsx">Recommandés</a>
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
          <a href='App.tsx'><h1>MeTUBE</h1></a>
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
