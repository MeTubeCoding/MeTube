import React, { useState, useRef, HTMLAttributes, useEffect } from 'react'
import VoiceRecognitionButton from './VoiceRecognitionButton'

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
    ].slice(0, 6)
    setSearchHistory(newSearchHistory)
    setShowHistory(true)
  }

  const handleHistoryClick = (term: string) => {
    setSearchInput(term)
    props.onSearch(term)
    setShowHistory(true)
  }

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        !target.closest('#search-dropdown') &&
        !target.closest('.search-history')
      ) {
        setShowHistory(false)
      }
    }

    document.addEventListener('click', handleDocumentClick)

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, [])

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
          autoComplete="off"
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
        <button>
          <VoiceRecognitionButton setSearchValue={setSearchInput} />
        </button>
        {searchHistory.length > 0 && showHistory && (
          <div className="absolute w-[89.5%] bg-me-darkpurple text-me-yellow shadow-lg mt-1 top-12 z-20 rounded-lg">
            <ul className="p-2">
              {searchHistory.map((searchItem, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:bg-me-lightpurple text-me-yellow text-opacity-50 hover:text-opacity-100 rounded-xl my-2 p-2"
                  onClick={() => handleHistoryClick(searchItem.term)}
                >
                  {searchItem.term.length > 50
                    ? `${searchItem.term.slice(0, 50)}...`
                    : searchItem.term}
                </li>
              ))}
              <li className="border-t lex justify-start items-center">
                <button
                  type="button"
                  className="text-xs text-me-yellow text-opacity-75 hover:text-opacity-100 mt-2 ml-2"
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
