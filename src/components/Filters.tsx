import React, { useRef, useState } from 'react'
import { MdOutlineTune } from 'react-icons/md'

interface Props {
  visible: boolean
  filter: string
  filterChannel: () => void
  filterVideo: () => void
  filterMovie: () => void
  filterPlaylist: () => void
}

const Filters = (props: Props) => {
  const dropMenu = useRef<HTMLDivElement>(null)

  const [ChannelF, setChannelF] = useState(false)
  const [VideoF, setVideoF] = useState(false)
  const [PlayF, setPlayF] = useState(false)
  const [MovieF, setMovieF] = useState(false)

  const fVideo = () => {
    console.log('filter by ' + props.filter)
    setChannelF(false)
    setPlayF(false)
    setVideoF(prevState => !prevState)
    setMovieF(false)
    props.filterVideo()
  }

  const fChannel = () => {
    console.log('filter by ' + props.filter)
    setChannelF(prevState => !prevState)
    setPlayF(false)
    setVideoF(false)
    setMovieF(false)
    props.filterChannel()
  }

  const fPlaylist = () => {
    console.log('filter by ' + props.filter)
    setChannelF(false)
    setPlayF(prevState => !prevState)
    setVideoF(false)
    setMovieF(false)
    props.filterPlaylist()
  }

  const fMovie = () => {
    console.log('filter by ' + props.filter)
    setChannelF(false)
    setPlayF(false)
    setVideoF(false)
    setMovieF(prevState => !prevState)
    props.filterMovie()
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
      bool: VideoF
    },
    {
      name: 'Channel',
      filter: fChannel,
      bool: ChannelF
    },
    {
      name: 'Playlist',
      filter: fPlaylist,
      bool: PlayF
    },
    {
      name: 'Movie',
      filter: fMovie,
      bool: MovieF
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
      name: 'Relevance'
    },
    {
      name: 'Upload date'
    },
    {
      name: 'View count'
    },
    {
      name: 'Rating'
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
                      bool === true ? 'text-opacity-100' : 'text-opacity-50'
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
            {Features.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider text-opacity-50 text-me-yellow hover:text-opacity-100">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>SORT BY</p>
            <hr className={`my-3 border-me-yellow w-36`}></hr>
            {sortBy.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider text-opacity-50 text-me-yellow hover:text-opacity-100">
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
