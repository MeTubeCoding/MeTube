import React, { useEffect, useRef } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import NearMeIcon from '@mui/icons-material/NearMe'
import { Avatar } from '@mui/material'
import './Video.css'

export interface SIResult {
  id: number
  url: string
  channel: string
  description: string
  likes: number
  dislikes: number
  comments: number
  shares: number
}
interface Props {
  short: SIResult
  visible: boolean
}

const SResult = (props: Props) => {
  useEffect(() => {
    console.log(props.short)
  }, [props.short])

  return (
    <div className="video">
      <div className="shortsContainer">
        <video className="video__player" loop src={props.short.url} autoPlay />
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon />
            <p>{props.short.likes}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>{props.short.dislikes}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>{props.short.comments}</p>
          </div>
          <div className="shortsVideoSideIcon">
            <NearMeIcon />
            <p>{props.short.shares}</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc">
            <p className="description">{props.short.description}</p>
          </div>
          <div className="shortsDetails">
            <div className="pseudos">
              <Avatar
                src={
                  'https://lh3.googleusercontent.com/ogw/ADGmqu8BCzU8GejYorGqXeu98A1kfEFYKFT85I3_9KJBzfw=s32-c-mo'
                }
              />
              <p>{props.short.channel}</p>
            </div>
            {/* <button
              style={{
                background: subs ? 'red' : 'hsla(0, 0%, 69.4%, .609'
              }}
              onClick={handleSubscribe}
            >
              {subs ? 'SUBSCRIBED' : 'SUBSCRIBE'}
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SResult
