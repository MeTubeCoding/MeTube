import React from "react";

interface OutilAjoutEffetsProps {
  // Ajouter les props nécessaires ici
}

const OutilAjoutEffets: React.FC<OutilAjoutEffetsProps> = ({}) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h3 className="text-lg font-medium text-gray-800 mb-4">Ajouter un effet</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-300 rounded-md p-2 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
            <p className="mt-2 font-medium text-gray-800">Effet 1</p>
          </div>
          <div className="bg-gray-300 rounded-md p-2 flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-gray-400 rounded-lg"></div>
            <p className="mt-2 font-medium text-gray-800">Effet 2</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default OutilAjoutEffets;
  