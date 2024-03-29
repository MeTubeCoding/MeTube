import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-me-black p-6">
      <div className="flex items-center flex-shrink-0 text-me-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Mon éditeur vidéo
        </span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-me-black border-me-black hover:text-me-white hover:border-me-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-me-black hover:text-me-white mr-4"
          >
            Fonctionnalité 1
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-me-black hover:text-me-white mr-4"
          >
            Fonctionnalité 2
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-me-black hover:text-me-white"
          >
            Fonctionnalité 3
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
