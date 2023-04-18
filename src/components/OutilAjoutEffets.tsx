import React from 'react'

const OutilAjoutEffets: React.FC = () => {
  return (
    <div className="bg-me-white rounded-lg shadow-lg p-4">
      <h3 className="text-lg font-medium text-me-black mb-4">
        Ajouter un effet
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-me-black rounded-md p-2 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-me-black rounded-lg"></div>
          <p className="mt-2 font-medium text-me-black">Effet 1</p>
        </div>
        <div className="bg-me-black rounded-md p-2 flex flex-col items-center justify-center">
          <div className="w-20 h-20 bg-me-black rounded-lg"></div>
          <p className="mt-2 font-medium text-me-black">Effet 2</p>
        </div>
      </div>
    </div>
  )
}

export default OutilAjoutEffets
