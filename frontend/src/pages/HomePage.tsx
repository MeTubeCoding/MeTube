import React, { useEffect, useState } from 'react'
import Video from '../components/Video'
import './HomePage.css'
import Videos from '../components/Videos'
import Popup, { Prompt } from '../components/fonction/Popup'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
import { useNavigate } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'

interface VideoData {
  id: number
  url: string
}

const HomePage = (): JSX.Element => {
  const [video, setVideo] = useState<VideoData[]>([])
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')
  const navigate = useNavigate()

  const { onSearch } = useOnSearch()

  useEffect(() => {
    setVideo(Videos)
  }, [])

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment)
    setShowPopup(false)
    setComment('')
  }
  const verify = () => {
    const pseudo = localStorage.getItem('username')?.replace(/"/g, '')
    if (!pseudo) {
      navigate('/login')
    } else {
      navigate('/videopage')
    }
  }

  const toggleSideBarVisibility = () => {
    // setIsSideBarVisible((prevState) => !prevState);
  }

  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}>
        <Navbar
          onSearch={onSearch}
          onToggleSideBar={toggleSideBarVisibility}
          setSearched={function (value: React.SetStateAction<boolean>): void {
            throw new Error('Function not implemented.')
          }}
        />
      </div>
      <div className="flex justify-center items-center max-w-3xl mx-auto">
        <div className="mt-[15%] video">
          {video.map(vid => (
            <Video
              key={vid.id}
              id={vid.id}
              src={vid.url}
              onCommentClick={() => setShowPopup(true)}
            />
          ))}
        </div>
      </div>
      <button
        onClick={verify}
        style={{
          border: 'none',
          backgroundColor: 'transparent',
          color: '#a45d2b'
        }}
      >
        <FontAwesomeIcon icon={faSquarePlus} size="4x" />
      </button>
      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onSubmit={handleCommentSubmit}
          comment={comment}
          onCommentChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setComment(e.target.value)
          }
          defaultValue={''}
          placeholder={''}
          onChange={(value: string) => {
            throw new Error('Function not implemented.')
          }}
          value={''}
        >
          <textarea
            className="w-full h-32 p-2 mb-4 rounded-md resize-none"
            placeholder="Enter your comment here"
            value={comment}
            onChange={event => setComment(event.target.value)}
          />
          <button
            className="w-full py-2 px-4 bg-me-mediumpurple hover:bg-lightpurple text-me-yellow font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-me-yellow focus:ring-opacity-50"
            onClick={handleCommentSubmit}
          >
            Submit
          </button>
        </Popup>
      )}
    </div>
  )
}

export default HomePage
