import React, { useState } from 'react' // Importer useState pour gérer l'état local
import './Video.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import NearMeIcon from '@mui/icons-material/NearMe'
import { Avatar } from '@mui/material'

function Video (): JSX.Element {
  // Utiliser useState pour gérer l'état local et éviter les appels excessifs à setState
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [description] = useState('test description')

  return (
    <div className="video">
      <video>
        <source src="./cruise.mp4" type="video/mp4" />
      </video>
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
          <div className="shortsDesc"></div>
          <div className="shortsDetails">
            <Avatar />
            <p>channel name</p>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
