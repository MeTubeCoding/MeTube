import React, { useState, useRef, HTMLAttributes, useEffect } from 'react'

interface IProps extends HTMLAttributes<HTMLDivElement> {
  onSearch: (input: string) => any
}

interface ISearchHistory {
  term: string
  timestamp: string
}

const SearchBar = (props: IProps) => {
  const [searchInput, setSearchInput] = useState('')
  const [searchHistory, setSearchHistory] = useState<ISearchHistory[]>([])
  const [showHistory, setShowHistory] = useState(false)

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    props.onSearch(searchInput)
    const existingSearchIndex = searchHistory.findIndex(
      item => item.term === searchInput
    )
    const newSearchHistory = [
      { term: searchInput, timestamp: new Date().toString() },
      ...searchHistory.filter((item, index) => index !== existingSearchIndex)
    ].slice(0, 10)
    setSearchHistory(newSearchHistory)
    setShowHistory(true)
  }

  const handleHistoryClick = (term: string) => {
    setSearchInput(term)
    props.onSearch(term)
    setShowHistory(true)
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
    setShowHistory(false)
  }

  const yColor = () => {
    logo.current?.classList.remove('stroke-me-yellow')
    logo.current?.classList.add('stroke-me-darkpurple')
    setShowHistory(false)
  }

  const nColor = () => {
    logo.current?.classList.remove('stroke-me-darkpurple')
    logo.current?.classList.add('stroke-me-yellow')
  }

  const clearHistory = () => {
    setSearchInput('')
    setSearchHistory([])
    setShowHistory(true)
  }

  return (
    <form className="w-full max-w-3xl" onSubmit={handleSearch}>
      <div
        className="flex bg-me-darkpurple p-2 items-center relative"
        onClick={() => setShowHistory(true)}
      >
        <input
          type="search"
          id="search-dropdown"
          value={searchInput}
          onChange={e => setSearchInput(e.currentTarget.value)}
          className="bg-me-mediumpurple border border-me-lightpurple text-me-yellow font-semibold placeholder:text-me-yellow placeholder:text-opacity-70 placeholder:font-semibold p-1 pl-4 pr-2 rounded-l-full focus:outline-none  focus:border-me-yellow h-10 w-11/12"
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
        {searchHistory.length > 0 && showHistory && (
          <div className="absolute w-full bg-[#ffff] shadow-lg mt-1 rounded-md top-12 z-20">
            <ul className="p-2">
              {searchHistory.map((searchItem, index) => (
                <li
                  key={index}
                  className="py-1 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleHistoryClick(searchItem.term)}
                >
                  {searchItem.term}
                </li>
              ))}
              <li className="border-t mt-2">
                <button
                  type="button"
                  className="text-xs text-gray-600 hover:text-gray-900"
                  onClick={clearHistory}
                >
                  Clear history
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </form>
  )
}

export default SearchBar
