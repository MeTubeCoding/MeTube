import React from 'react'
import OutilDecoupage from './OutilDecoupage'
import OutilAjoutEffets from './OutilAjoutEffets'
import OutilTexte from './OutilTexte'

interface MontagePanneauProps {
  // Ajoutez les props nécessaires ici
}

const MontagePanneau: React.FC<MontagePanneauProps> = ({}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="bg-gray-200 rounded-md p-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-800">Séquence 1</h3>
          <button className="bg-gray-600 text-white font-bold py-1 px-2 rounded-md hover:bg-gray-700">
            // eslint-disable-next-line prettier/prettier Ajouter une vidéo
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-300 rounded-md p-2 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
            <p className="mt-2 font-medium text-gray-800">Vidéo 1</p>
            <OutilDecoupage />
            <OutilAjoutEffets />
            <OutilTexte />
          </div>
          <div className="bg-gray-300 rounded-md p-2 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
            <p className="mt-2 font-medium text-gray-800">Vidéo 2</p>
            <OutilDecoupage />
            <OutilAjoutEffets />
            <OutilTexte />
          </div>
          <div className="bg-gray-300 rounded-md p-2 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
            <p className="mt-2 font-medium text-gray-800">Vidéo 3</p>
            <OutilDecoupage />
            <OutilAjoutEffets />
            <OutilTexte />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MontagePanneau
