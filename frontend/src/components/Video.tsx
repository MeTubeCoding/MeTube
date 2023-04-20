import React, { useRef, useState } from 'react' // Importer useState pour gérer l'état local
import './Video.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import NearMeIcon from '@mui/icons-material/NearMe'
import { Avatar } from '@mui/material'
import axios from 'axios'

interface VideoProps {
  src: string
  channel: string
  description: string
  like: number
  dislike: number
  share: number
  comment: number
}

function Video({
  src,
  channel,
  description,
  like,
  dislike,
  share,
  comment
}: VideoProps): JSX.Element {
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  const shorts = async () => {
    const endpoint = await axios.get(`http://127.0.0.1:5600/getshort`) 
    console.log(endpoint)// Remplacez par l'URL de votre serveur
    return endpoint.data
  }
  shorts()
  

  const [subs, setSubs] = useState(false)
  const [likes, setLikes] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const handleSubscribe = () => {
    setSubs(sub => !sub)
  }
  const handleLike = async () => {
    try {
      const response = await axios.post('/videos/${props.id}/like')
      setLikes(response.data.likes)
    } catch (error) {
      console.log(error)
    }
  }

  const handleVideoPress = () => {
    if (playing) {
      setPlaying(false)
      videoRef.current?.pause()
    } else {
      videoRef.current?.play()
      setPlaying(play => !play)
    }
  }
  // Utiliser useState pour gérer l'état local et éviter les appels excessifs à setState
  // const [description] = useState('test description')

  return (
    <div className="video">
      <div className="shortsContainer">
        <video
          className="video__player"
          onClick={handleVideoPress}
          loop
          ref={videoRef}
          src={src}
        />
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
            <ThumbUpIcon onClick={handleLike} />
            <p>{like}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>{dislike}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>{comment}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <NearMeIcon />
            <p>{share}</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc">
            <p className="description">{description}</p>
          </div>
          <div className="shortsDetails">
            <div className="pseudos">
              <Avatar
                src={
                  'https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo'
                }
              />
              <p>{channel}</p>
            </div>
            <button
              style={{
                background: subs ? 'red' : 'hsla(0, 0%, 69.4%, .609'
              }}
              onClick={handleSubscribe}
            >
              {subs ? 'SUBSCRIBED' : 'SUBSCRIBE'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
