<<<<<<< HEAD:src/components/Video.tsx
import React from 'react' // Importer useState pour gérer l'état local
=======
import React, { useRef, useState } from 'react' // Importer useState pour gérer l'état local
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/Video.tsx
import './Video.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import NearMeIcon from '@mui/icons-material/NearMe'
import { Avatar } from '@mui/material'

<<<<<<< HEAD:src/components/Video.tsx
function Video(): JSX.Element {
=======
// eslint-disable-next-line @typescript-eslint/no-var-requires
const source = require('../video/drole.mp4')

function Video(props: any): JSX.Element {
  const [subscribe, setSubscribe] = useState(false)

  const handleSubscribe = () => {
    setSubscribe(!subscribe)
  }
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/Video.tsx
  // Utiliser useState pour gérer l'état local et éviter les appels excessifs à setState
  // const [description] = useState('test description')

  return (
    <div className="video">
<<<<<<< HEAD:src/components/Video.tsx
      <video>
        <source src="./cruise.mp4" type="video/mp4" />
      </video>
      <div className="shortsContainer">
=======
      <div className="shortsContainer">
        <video className="video_player" src={source} autoPlay muted loop />
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/Video.tsx
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
<<<<<<< HEAD:src/components/Video.tsx
          <div className="shortsDesc"></div>
          <div className="shortsDetails">
            <Avatar />
            <p>channel name</p>
            <button>Subscribe</button>
=======
          <div className="shortsDesc">
            <p className="description">description</p>
          </div>
          <div className="shortsDetails">
            <div className="pseudos">
              <Avatar />
              <p>channel</p>
            </div>
            <button
              style={{
                background: subscribe ? 'red' : 'hsla(0, 0%, 69.4%, .609'
              }}
              onClick={handleSubscribe}
            >
              {subscribe ? 'SUBSCRIBED' : 'SUBSCRIBE'}
            </button>
>>>>>>> 3e6b1aa594d5d0812ed4a75da42e30cd001b15fd:frontend/src/components/Video.tsx
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
