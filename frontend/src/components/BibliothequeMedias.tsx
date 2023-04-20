import React from 'react'

const BibliothequeMedias: React.FC = () => {
  return (
    <div className="bg-me-white rounded-lg shadow-lg p-4">
      <div className="bg-me-black rounded-md p-2">
        <h3 className="text-lg font-medium text-me-black mb-2">
          Bibliothèque de médias
        </h3>
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="border border-me-black rounded-md py-2 px-3 mr-2"
            placeholder="Rechercher..."
          />
          <button className="bg-me-black text-white font-bold py-2 px-4 rounded-md hover:bg-me-black">
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
