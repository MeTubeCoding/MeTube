/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-empty-interface */
import React from 'react'

interface OutilDecoupageProps {
  // Ajoutez les props nécessaires ici
}

const OutilDecoupage: React.FC<OutilDecoupageProps> = ({}) => {
  const [start, setStart] = React.useState(0)
  const [end, setEnd] = React.useState(0)

  const handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStart(parseInt(event.target.value))
  }

  const handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnd(parseInt(event.target.value))
  }

  const handleDecouperClick = () => {
    // Ajoutez le code pour découper le média ici
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <div className="bg-gray-200 rounded-md p-2">
        <h3 className="text-lg font-medium text-gray-800 mb-2">
          Outil de découpage
        </h3>
        <div className="flex items-center mb-4">
          <label htmlFor="start" className="mr-2">
            Début :
          </label>
          <input
            type="number"
            id="start"
            min="0"
            className="border border-gray-400 rounded-md py-2 px-3 mr-4 w-20"
            value={start}
            onChange={handleStartChange}
          />
          <label htmlFor="end" className="mr-2">
            Fin :
          </label>
          <input
            type="number"
            id="end"
            min="0"
            className="border border-gray-400 rounded-md py-2 px-3 mr-4 w-20"
            value={end}
            onChange={handleEndChange}
          />
          <button
            className="bg-gray-600 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-700"
            onClick={handleDecouperClick}
          >
            Découper
          </button>
        </div>
      </div>
    </div>
  )
}

export default OutilDecoupage
