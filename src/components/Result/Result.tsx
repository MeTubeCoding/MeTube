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

  <div className='ml-80 flex'>
  <div className="max-w-fit rounded-lg bg-[#000000] m-2">
        <a className="w-72 h-40 flex rounded-lg" href="#">
            <img className="rounded-t-lg hover:opacity-0 w-72 h-40 absolute z-10 rounded-lg" onMouseEnter={playVid} onMouseLeave={pauseVid} src={props.video.miniature} alt=""/>
            <video muted className="rounded-t-lg w-72 h-40 absolute rounded-lg" ref={videoRef}>
              <source src={props.video.video} type='video/mp4'/>
            </video>
        </a>
  </div>
    <div className="m-3 max-w-3/12">
        <p className="text-[#e3e3e3] font-semibold">{props.video.title}</p>
        <p className="text-[#aaaaaa]">{props.video.channel}</p>
    </div>
  </div>

  )
}

export default Result
