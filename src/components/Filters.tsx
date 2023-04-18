import React, { useRef } from 'react'
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
      name: 'Video'
    },
    {
      name: 'Channel'
    },
    {
      name: 'Playlist'
    },
    {
      name: 'Movie'
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
        dropMenu.current.classList.remove('hidden')
      } else {
        dropMenu.current.classList.add('hidden')
      }
    }
  }

  const fVideo = () => {
    console.log('filter by ' + props.filter)
    props.filterVideo()
  }

  const fChannel = () => {
    console.log('filter by ' + props.filter)
    props.filterChannel()
  }

  const fPlaylist = () => {
    console.log('filter by ' + props.filter)
    props.filterPlaylist()
  }

  const fMovie = () => {
    console.log('filter by ' + props.filter)
    props.filterMovie()
  }

  return (
    <div
      className={`mt-5 text-me-yellow font-semibold ${
        props.visible ? 'ml-96' : 'ml-60'
      }`}
    >
      <button className="flex flex-row" onClick={dropDown}>
        <MdOutlineTune className="text-xl" />

        <p className="ml-5">Filters, currently filtering by: {props.filter}</p>
      </button>

      <div ref={dropMenu} className="ml-5 hidden">
        <div className="flex flex-row justify-evenlyv">
          <ul className="flex flex-col text-me-yellow p-4">
            <p>UPLOAD DATE</p>
            <hr
              className={`m-3 border-me-yellow ${
                props.visible ? 'w-[74.96%]' : 'w-[78%]'
              }`}
            ></hr>
            {uploadDate.map(({ name }) => {
              return (
                <li key={name} className={`rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>

          {/* <div>
          <p>Type</p>
          <hr className="w-10 m-3 border-me-yellow"></hr>
          <a onClick={fVideo}>Video</a>
          <a onClick={fChannel}>Channel</a>
          <a onClick={fPlaylist}>Playlist</a>
          <a onClick={fMovie}>Movie</a>
        </div> */}

          <ul className="flex flex-col text-me-yellow p-4">
            <p>TYPE</p>
            <hr
              className={`m-3 border-me-yellow ${
                props.visible ? 'w-[74.96%]' : 'w-[78%]'
              }`}
            ></hr>
            {Type.map(({ name }) => {
              return (
                <li key={name} className={`rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>DURATION</p>
            <hr
              className={`m-3 border-me-yellow ${
                props.visible ? 'w-[74.96%]' : 'w-[78%]'
              }`}
            ></hr>
            {Duration.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>FEATURES</p>
            <hr
              className={`m-3 border-me-yellow ${
                props.visible ? 'w-[74.96%]' : 'w-[78%]'
              }`}
            ></hr>
            {Features.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
                    {name}
                  </span>
                </li>
              )
            })}
          </ul>
          <ul className="flex flex-col text-me-yellow p-4">
            <p>SORT BY</p>
            <hr
              className={`m-3 border-me-yellow ${
                props.visible ? 'w-[74.96%]' : 'w-[78%]'
              }`}
            ></hr>
            {sortBy.map(({ name }) => {
              return (
                <li key={name} className={` rounded-lg py-1`}>
                  <span className="hover:cursor-pointer text-xs tracking-wider">
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
