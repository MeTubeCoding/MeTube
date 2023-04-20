import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { GiHamburgerMenu } from 'react-icons/gi'

interface Props {
  onSearch: (
    data: string,
    setSearched: React.Dispatch<React.SetStateAction<boolean>>
  ) => void
  setSearched: React.Dispatch<React.SetStateAction<boolean>>
  setShorts: React.Dispatch<React.SetStateAction<boolean>>
  onToggleSideBar: () => void
}

const Navbar = (props: Props) => {
  const handleHamburgerClick = () => {
    props.onToggleSideBar()
  }

  const backToHome = () => {
    props.setSearched(false)
    props.setShorts(false)
  }

  return (
    <nav className="bg-me-darkpurple shadow-md fixed w-screen z-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16">
          <div className="w-14 h-16">
            <GiHamburgerMenu
              size="10"
              className="hover:cursor-pointer w-8 h-16 text-me-yellow"
              onClick={handleHamburgerClick}
            />
          </div>
          <div className="flex items-center">
            <Link
              to="/"
              className="flex-shrink-0 flex items-center"
              onClick={backToHome}
            >
              <svg
                className="h-10 w-10 fill-me-orange"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="metube"
              >
                <path d="M23,9.71a8.5,8.5,0,0,0-.91-4.13,2.92,2.92,0,0,0-1.72-1A78.36,78.36,0,0,0,12,4.27a78.45,78.45,0,0,0-8.34.3,2.87,2.87,0,0,0-1.46.74c-.9.83-1,2.25-1.1,3.45a48.29,48.29,0,0,0,0,6.48,9.55,9.55,0,0,0,.3,2,3.14,3.14,0,0,0,.71,1.36,2.86,2.86,0,0,0,1.49.78,45.18,45.18,0,0,0,6.5.33c3.5.05,6.57,0,10.2-.28a2.88,2.88,0,0,0,1.53-.78,2.49,2.49,0,0,0,.61-1,10.58,10.58,0,0,0,.52-3.4C23,13.69,23,10.31,23,9.71ZM9.74,14.85V8.66l5.92,3.11C14,12.69,11.81,13.73,9.74,14.85Z"></path>
              </svg>
              <span className="font-bold text-lg ml-2 text-me-orange">
                MeTube
              </span>
            </Link>
          </div>
          <div className="flex justify-center items-center flex-grow">
            <SearchBar
              onSearch={data => props.onSearch(data, props.setSearched)}
            />
          </div>
          <div className="flex items-center">
            <Link
              to="/window-upload"
              className="text-me-yellow text-opacity-75 hover:text-opacity-100 font-bold text-lg mx-4"
            >
              Upload
            </Link>
            <Link
              to="/profile"
              className="text-me-yellow text-opacity-75 hover:text-opacity-100 font-bold text-lg"
            >
              Account
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
