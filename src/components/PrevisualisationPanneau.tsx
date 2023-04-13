import React from "react";

interface PrevisualisationPanneauProps {
  // Ajoutez les props nécessaires ici
}

const PrevisualisationPanneau: React.FC<PrevisualisationPanneauProps> = ({}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="bg-gray-200 rounded-md p-2">
        <h3 className="text-lg font-medium text-gray-800 mb-2">Prévisualisation</h3>
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
        <div className="mt-2">
          <button className="bg-gray-600 text-white font-bold py-1 px-2 rounded-md hover:bg-gray-700 mr-2">
            Exporter
          </button>
          <button className="bg-gray-600 text-white font-bold py-1 px-2 rounded-md hover:bg-gray-700">
            Publier
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrevisualisationPanneau;
