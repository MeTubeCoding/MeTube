import React, { useState } from "react";

<<<<<<< HEAD
interface OutilTexteProps {
  // Ajouter les props nécessaires ici
}

const OutilTexte: React.FC<OutilTexteProps> = ({}) => {
  const [texte, setTexte] = useState("");

  const handleTexteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexte(e.target.value);
  };
=======
const OutilTexte: React.FC = () => {
  const [texte, setTexte] = useState('')

  const handleTexteChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setTexte(e.target.value)
  }
>>>>>>> 25ccf4773ef9cd93e99dbffcca756f320c5977c3

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-medium text-gray-800 mb-2">Outil de texte</h3>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Tapez votre texte ici"
          className="border border-gray-400 rounded-md p-2 mb-2"
          value={texte}
          onChange={handleTexteChange}
        />
        <button className="bg-gray-600 text-white font-bold py-1 px-2 rounded-md hover:bg-gray-700">
          Ajouter le texte
        </button>
      </div>
    </div>
  );
};

export default OutilTexte;