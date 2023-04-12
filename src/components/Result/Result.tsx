/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useRef } from 'react'

export interface IResult {
  id: number
  title: string
  miniature: string
  channel: string
  video: string
  tag: string[]
}
interface Props {
  video: IResult
}

const Result = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  const playVid = () => {
    if (videoRef.current != null) {
      void videoRef.current.play()
    }
  }

  const pauseVid = () => {
    if (videoRef.current != null) {
      videoRef.current.pause()
    }
  }
  return (

    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
        <a href="#">
            <img className="rounded-t-lg max-h-80 max-w-xl hover:opacity-0" src={props.video.miniature} alt=""/>
            <video muted className="rounded-t-lg max-h-80 max-w-xl" id="vidya" onMouseEnter={playVid} onMouseLeave={pauseVid} ref={videoRef}>
              <source src={props.video.video} type='video/mp4'/>
            </video>
        </a>
        <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.video.title}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.video.channel}</p>
        </div>
    </div>

  )
}

export default Result
