/* eslint-disable eol-last */
/* eslint-disable import/no-duplicates */
/* eslint-disable padded-blocks */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const NavigationBar = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/videopage')
  }
  return (
    <nav className="bg-me-colorprimary py-2 w-full fixed top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div>
                  <div
                    onClick={handleClick}
                    style={{ cursor: 'pointer' }}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Video Editor
                  </div>
                </div>

                <Link
                  to="/music"
                  className="text-me-black hover:bg-me-black hover:text-me-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Music Library
                </Link>
                <Link
                  to="/slideshow"
                  className="text-me-black hover:bg-me-black hover:text-me-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Slideshow Editor
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <label htmlFor="file-upload" className="cursor-pointer">
              <span className="bg-me-red inline-flex items-center justify-center p-2 rounded-md text-me-white hover:bg-me-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-me-black focus:ring-me-white">
                Choose a file
              </span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                className="sr-only"
              />
            </label>
            <button
              type="button"
              className="bg-me-red inline-flex items-center justify-center p-2 rounded-md text-me-white hover:bg-me-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-me-black focus:ring-me-white ml-4"
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
