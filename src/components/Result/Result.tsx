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
    <div>
      <div className="max-w-fit border rounded-lg shadow bg-[#282828] border-slate-700">
        <a className="w-96 h-56 flex" href="#">
          <img
            className="rounded-t-lg hover:opacity-0 w-96 h-56 absolute z-10"
            onMouseEnter={playVid}
            onMouseLeave={pauseVid}
            src={props.video.miniature}
            alt=""
          />
          <video
            muted
            className="rounded-t-lg w-80 w-96 h-56 absolute"
            ref={videoRef}
          >
            <source src={props.video.video} type="video/mp4" />
          </video>
        </a>
      </div>
      <div className="">
        <p className="">{props.video.title}</p>
        <p className="">{props.video.channel}</p>
      </div>
    </div>
  )
}

export default Result
