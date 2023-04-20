import React, { useEffect, useState } from 'react'
import Video from '../components/Video'
import './HomePage.css'
import Videos from '../components/Videos'
import Popup, { Prompt } from '../components/fonction/Popup'
import Navbar from '../components/Navbar'
import { useOnSearch } from '../components/useOnSearch'
import { useNavigate } from 'react-router-dom'

interface VideoData {
  id: number
  url: string
}

const HomePage = (): JSX.Element => {
  const [video, setVideo] = useState<VideoData[]>([])
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')
  const navigate = useNavigate()

  const handleClickEditor = (): unknown => {
    return navigate('/videopage')
  }

  const { onSearch } = useOnSearch()

  useEffect(() => {
    setVideo(Videos)
  }, [])

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment)
    setShowPopup(false)
    setComment('')
  }

  const toggleSideBarVisibility = () => {
    // setIsSideBarVisible((prevState) => !prevState);
  }

  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} />
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
      <div
        onClick={handleClickEditor}
        style={{ cursor: 'pointer' }}
        className="text-me-orange hover:bg-me-darkpurple hover:text-me-yellow px-3 py-2 rounded-md text-sm font-medium w-32"
      >
        Video Editor
      </div>
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
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
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
