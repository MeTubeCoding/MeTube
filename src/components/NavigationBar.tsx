import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const NavigationBar = (): any => {
  const navigate = useNavigate()

  const handleClickEditor = (): any => {
    navigate('/videopage')
  }
  const handleClickShort = (): any => {
    navigate('/short')
  }
  return (
    <nav className="bg-gray-800 py-2 w-full fixed top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
                onClick={handleClickShort}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
              <div>
                <div onClick={handleClickEditor} style={{ cursor: 'pointer' }} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Video Editor
                </div>
              </div>

                <Link
                  to="/music"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Music Library
                </Link>
                <Link
                  to="/slideshow"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Slideshow Editor
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                Choose a file
              </span>
              <input id="file-upload" name="file-upload" type="file" className="sr-only" />
            </label>
            <button
              type="button"
              className="bg-blue-500 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white ml-4"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <div className="spinner"></div>
              Configure
              <FaBars className="h-6 w-6 ml-2" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar
