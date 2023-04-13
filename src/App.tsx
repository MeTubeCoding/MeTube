import React from "react";
import Navigation from "./components/Navigation";
import MontagePanneau from "./components/MontagePanneau";
import PrevisualisationPanneau from "./components/PrevisualisationPanneau";
import BibliothequeMedias from "./components/BibliothequeMedias";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div className="container mx-auto px-4">
        <MontagePanneau />
        <PrevisualisationPanneau />
        <BibliothequeMedias />
        {/* Ajoutez le reste de votre application ici */}
      </div>
    </div>
  );
}

export default App;