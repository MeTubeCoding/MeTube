import React, { useState, useRef } from 'react'
import { Button, IconButton, InputBase } from '@mui/material'

interface IProps {
  onSearch: (input: string) => any
}

const SearchBar = (props: IProps) => {
  const [searchInput, setSearchInput] = useState('')
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSearch(searchInput)
  }
  const handleSetSearchInput = (value: string) => {
    setSearchInput(value)
  }

  const btn = useRef<HTMLButtonElement>(null)
  const logo = useRef<SVGSVGElement>(null)
  const yBorder = () => {
    btn.current?.classList.remove('border-me-lightpurple')
    btn.current?.classList.add('border-me-yellow')
  }

  const nBorder = () => {
    btn.current?.classList.remove('border-me-yellow')
    btn.current?.classList.add('border-me-lightpurple')
  }

  const yColor = () => {
    logo.current?.classList.remove('stroke-me-yellow')
    logo.current?.classList.add('stroke-me-darkpurple')
  }

  const nColor = () => {
    logo.current?.classList.remove('stroke-me-darkpurple')
    logo.current?.classList.add('stroke-me-yellow')
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-center bg-me-darkpurple p-2 items-center">
        <input
          type="search"
          id="search-dropdown"
          value={searchInput}
          onChange={e => {
            setSearchInput(e.currentTarget.value)
          }}
          className="bg-me-mediumpurple border border-me-lightpurple text-me-yellow font-semibold placeholder:text-me-yellow placeholder:text-opacity-70 placeholder:font-semibold p-1 pl-4 pr-2 rounded-l-full focus:outline-none focus:border-me-yellow h-10 w-5/12"
          onFocus={yBorder}
          onBlur={nBorder}
          placeholder="Search..."
          required
        />
        <button
          ref={btn}
          type="submit"
          className="bg-me-lightpurple hover:bg-me-yellow h-10 rounded-r-full w-16 justify-center flex items-center border-r border-t border-b border-me-lightpurple"
          onMouseEnter={yColor}
          onMouseLeave={nColor}
        >
          <svg
            ref={logo}
            aria-hidden="true"
            className="w-5 h-5 stroke-me-yellow"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  )
}

export default SearchBar
