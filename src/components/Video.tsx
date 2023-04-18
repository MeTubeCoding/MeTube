import React, { useRef, useState } from 'react' // Importer useState pour gérer l'état local
import './Video.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import NearMeIcon from '@mui/icons-material/NearMe'
import Ticker from 'react-ticker'
import { Avatar } from '@mui/material'

interface VideoPops {
  id: string
  src: string
}

function Video({ id, src }: VideoPops): JSX.Element {
  const [playing, setPlaying] = useState(false as boolean)
  const [subscribe, setSubscribe] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const handleVideo = () => {
    if (videoRef.current) {
      // Vérification que videoRef.current n'est pas null
      if (playing) {
        videoRef.current.pause()
        setPlaying(false)
      } else {
        videoRef.current.play()
        setPlaying(true)
      }
    }
  }

  const handleSubscribe = () => {
    setSubscribe(subs => !subs)
  }
  const [description] = useState('test description')

  return (
    <div className="video">
      <video
        onClick={handleVideo}
        id={id}
        className="video_player"
        src={src}
        ref={videoRef}
        loop
      />
      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon />
            <p>600</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>600</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>600</p>
          </div>
          <div className="shortsVideoSideIcon">
            <NearMeIcon />
            <p>600</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc">
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p className="description">{description}</p>
                </>
              )}
            </Ticker>
          </div>
          <div className="shortDetails">
            {/* <Avatar /> */}
            <p>channel name</p>
            <button
              style={{
                backgroundColor: subscribe ? 'red' : 'hsla(0,0%,69.4%,.609)'
              }}
              onClick={handleSubscribe}
            >
              {subscribe ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
