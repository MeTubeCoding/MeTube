/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface BibliothequeMediasProps {
  // Ajoutez les props nécessaires ici
}

const BibliothequeMedias: React.FC<BibliothequeMediasProps> = ({}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="bg-gray-200 rounded-md p-2">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Bibliothèque de médias
        </h3>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border border-gray-400 rounded-md py-2 px-3 mr-2"
            placeholder="Rechercher..."
          />
          <button className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700">
            Rechercher
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* Ajoutez les éléments de la bibliothèque ici */}
        </div>
      </div>
    </div>
  )
}

export default BibliothequeMedias
