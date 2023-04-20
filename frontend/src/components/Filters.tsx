import React, { useRef, useState } from 'react'
import { MdOutlineTune } from 'react-icons/md'

interface Props {
  sortVids: () => void
  visible: boolean
  filter: string
  sortBy: string
  filterChannel: () => void
  filterVideo: () => void
  filterMovie: () => void
  filterPlaylist: () => void
  sortRelevance: () => void
  sortDate: () => void
  sortRating: () => void
  sortViews: () => void
}

const Filters = (props: Props) => {
  const dropMenu = useRef<HTMLDivElement>(null)

  const doSort = (sortType: () => void) => {
    sortType()
    props.sortVids()
  }

  const sViews = () => {
    props.sortViews()
    console.log('sort by ' + props.sortBy)
  }

  const sRating = () => {
    props.sortRating()
    console.log('sort by ' + props.sortBy)
  }

  const sDate = () => {
    props.sortDate()
    console.log('sort by ' + props.sortBy)
  }

  const sRelev = () => {
    props.sortRelevance()
    console.log('sort by ' + props.sortBy)
  }

  const fVideo = () => {
    props.filterVideo()
    console.log('filter by ' + props.filter)
  }

  const fChannel = () => {
    props.filterChannel()
    console.log('filter by ' + props.filter)
  }

  const fPlaylist = () => {
    props.filterPlaylist()
    console.log('filter by ' + props.filter)
  }

  const fMovie = () => {
    props.filterMovie()
    console.log('filter by ' + props.filter)
  }

  const uploadDate = [
    {
      name: 'Last hour'
    },
    {
      name: 'Today'
    },
    {
      name: 'This week'
    },
    {
      name: 'This month'
    },
    {
      name: 'This year'
    }
  ]
  const Type = [
    {
      name: 'Video',
      filter: fVideo,
      bool: 'video'
    },
    {
      name: 'Channel',
      filter: fChannel,
      bool: 'channel'
    },
    {
      name: 'Playlist',
      filter: fPlaylist,
      bool: 'playlist'
    },
    {
      name: 'Movie',
      filter: fMovie,
      bool: 'movie'
    }
    //,
    // {
    //   name: 'Short'     Should we add Short filter ?
    // }
  ]
  const Duration = [
    {
      name: 'Under 4 minutes'
    },
    {
      name: '4-20 minutes'
    },
    {
      name: 'Over 20 minutes'
    }
  ]
  const Features = [
    {
      name: 'Live'
    },
    {
      name: '4K'
    },
    {
      name: 'HD'
    },
    {
      name: 'Subtitles/CC'
    },
    {
      name: 'Creative Commons'
    },
    {
      name: '360°'
    },
    {
      name: 'VR180'
    },
    {
      name: '3D'
    },
    {
      name: 'HDR'
    },
    {
      name: 'Location'
    },
    {
      name: 'Purchased'
    }
  ]
  const sortBy = [
    {
      name: 'Relevance',
      sort: sRelev,
      bool: 'relev',
      bool2: 'relev'
    },
    {
      name: 'Upload date',
      sort: sDate,
      bool: 'date',
      bool2: 'date'
    },
    {
      name: 'View count',
      sort: sViews,
      bool: 'viewsUP',
      bool2: 'viewsDOWN'
    },
    {
      name: 'Rating',
      sort: sRating,
      bool: 'rating',
      bool2: 'rating'
    }
  ]

  const dropDown = () => {
    if (dropMenu.current instanceof HTMLDivElement) {
      if (dropMenu.current.classList.contains('hidden')) {
        // dropMenu.current.classList.add('flex')
        dropMenu.current.classList.remove('hidden')
      } else {
        dropMenu.current.classList.add('hidden')
        // dropMenu.current.classList.remove('flex')
      }
    }
  }

  return (
    <div
      className={`mt-5 text-me-yellow font-semibold flex flex-col ${
        props.visible ? 'ml-96' : 'ml-60'
      }`}
    >
      <div className="flex flex-row items-center">
        <button
          className="flex flex-row justify-center items-center w-8 h-8 left-3 relative hover:bg-me-lightpurple rounded-lg"
          onClick={dropDown}
        >
          <MdOutlineTune className="text-xl" />
        </button>
        <p className="ml-4">Filters</p>
      </div>

      <div ref={dropMenu} className="ml-5 hidden">
        <div className="flex flex-row">
          <ul className="flex flex-col text-me-yellow p-4">
            <p>UPLOAD DATE</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {uploadDate.map(({ name }) => {
              return (
                <li key={name} className={`rounded-lg`}>
                  <span className="hover:cursor-pointer text-xs text-me-yellow text-opacity-50 tracking-wider hover:text-opacity-100">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>

          <ul className="flex flex-col text-me-yellow p-4">
            <p>TYPE</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {Type.map(({ name, filter, bool }) => {
              return (
                <li key={name} className={`rounded-lg`}>
                  <span
                    className={`hover:cursor-pointer text-xs text-me-yellow tracking-wider hover:text-opacity-100 ${
                      props.filter === bool
                        ? 'text-opacity-100'
                        : 'text-opacity-50'
                    }`}
                    onClick={filter}
                  >
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>DURATION</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {Duration.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider text-me-yellow text-opacity-50 hover:text-opacity-100">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>FEATURES</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            <div className="h-[8.5rem] overflow-scroll">
              {Features.map(({ name }) => {
                return (
                  <li key={name} className={`rounded-lg`}>
                    <span className="hover:cursor-pointer text-xs tracking-wider text-opacity-50 text-me-yellow hover:text-opacity-100">
                      {name}
                    </span>
                  </li>
                )
              })}
            </div>
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>SORT BY</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {sortBy.map(({ name, sort, bool, bool2 }) => {
              return (
                <li key={name} className={`rounded-lg`}>
                  <span
                    className={`hover:cursor-pointer text-xs text-me-yellow tracking-wider hover:text-opacity-100 ${
                      props.sortBy === bool || props.sortBy === bool2
                        ? 'text-opacity-100'
                        : 'text-opacity-50'
                    }`}
                    onClick={() => doSort(sort)}
                  >
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <hr
        className={`m-3 border-me-yellow ${
          props.visible ? 'w-[74.96%]' : 'w-[78%]'
        }`}
      ></hr>
    </div>
  )
}

export default Filters
