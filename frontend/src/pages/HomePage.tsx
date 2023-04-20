import React, { useEffect, useState } from 'react'
import Video from '../components/Video'
import './HomePage.css'
import Videos from '../components/Videos'
import Popup from '../components/fonction/Popup'
import Navbar from '../components/Navbar'
import { channel } from 'diagnostics_channel'
import { useOnSearch } from '../components/useOnSearch'

interface VideoData {
  id: number
  url: string
}

const HomePage = (): JSX.Element => {
  const [video, setVideo] = useState<VideoData[]>([])
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')
  const { videos, channels, onSearch } = useOnSearch()
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)


  useEffect(() => {
    setVideo(Videos)
  }, [])

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment)
    setShowPopup(false)
    setComment('')
  }
  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh'}}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} />
      </div>
      <div className='flex justify-center items-center max-w-3xl mx-auto'>
        <div className="mt-[15%] video" >
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

      {showPopup && (
        <Popup
          onClose={() => setShowPopup(false)}
          onSubmit={handleCommentSubmit}
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
