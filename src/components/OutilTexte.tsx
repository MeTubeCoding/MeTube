import React, { useState } from "react";

const OutilTexte: React.FC = () => {
  const [texte, setTexte] = useState("");

  const handleTexteChange = (e: React.ChangeEvent<HTMLInputElement>): any => {
    setTexte(e.target.value);
  };

  return (
    <div className="bg-me-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-medium text-me-black mb-2">Outil de texte</h3>
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Tapez votre texte ici"
          className="border border-me-black rounded-md p-2 mb-2"
          value={texte}
          onChange={handleTexteChange}
        />
        <button className="bg-me-black text-me-white font-bold py-1 px-2 rounded-md hover:bg-me-black">
          Ajouter le texte
        </button>
      </div>
    </div>
  );
};

export default OutilTexte;
