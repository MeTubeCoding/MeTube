/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

function ChannelPresentation() {
  return (
    <div className="bg-me-yellow h-52 ml-80 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <img src="logo.png" alt="logo" className="w-10 h-10" />
        <h1 className="text-lg font-bold">Nom de la chaîne</h1>
      </div>
      <div className="flex-grow text-center">
        <p className="text-sm">Description de la chaîne</p>
      </div>
      <div className="flex-shrink-0">
        <button className="bg-me-orange mr-7 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Subscribe
        </button>
      </div>
    </div>
  )
}

export default ChannelPresentation
