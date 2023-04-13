/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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
  const yBorder = () => {
    btn.current?.classList.remove('border-[#4d2e4e]')
    btn.current?.classList.add('border-[#a45d2b]')
  }

  const nBorder = () => {
    btn.current?.classList.remove('border-[#a45d2b]')
    btn.current?.classList.add('border-[#4d2e4e]')
  }

  return (
    <form onSubmit={handleSearch}>
      <div className="flex justify-center bg-[#1d1124] p-2 items-center">
          <input
            type="search"
            id="search-dropdown"
            value={searchInput}
            onChange={(e) => { setSearchInput(e.currentTarget.value) }}
            className="bg-[#24152c] border border-[#4d2e4e] text-[#ecd4ad] font-semibold placeholder:text-[#ecd4ad] placeholder:text-opacity-70 placeholder:font-semibold p-1 pl-4 pr-2 rounded-l-full focus:outline-none focus:border-[#a45d2b] h-10 w-5/12"
            onFocus={yBorder}
            onBlur={nBorder}
            placeholder="Search..."
            required
          />
          <button ref={btn} type="submit" className="bg-[#4d2e4e] hover:bg-[#a45d2b] h-10 rounded-r-full w-16 justify-center flex items-center border-r border-t border-b border-[#4d2e4e]">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="none"
              stroke="white"
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
          <div className='bg-[#4d2e4e] hover:bg-[#7d4d55] ml-2 p-2 rounded-full text-[#ecd4ad]'>
            <p>B</p>
          </div>
      </div>
    </form>
  )
}

export default SearchBar
