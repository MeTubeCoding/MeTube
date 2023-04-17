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
      videoRef.current.currentTime = 0
      void videoRef.current.play()
    }
  }

  const pauseVid = () => {
    if (videoRef.current != null) {
      void videoRef.current.play()
    }
  }
  return (
    <div className="flex ml-10">
      <div className="max-w-fit rounded-lg bg-[#000000] m-2">
        <a className="w-72 h-40 flex rounded-lg justify-center" href="#">
          <img
            className=" hover:opacity-0 transition-opacity duration-500 h-40 absolute z-10"
            onMouseEnter={playVid}
            onMouseLeave={pauseVid}
            src={props.video.miniature}
            alt=""
          />
          <video muted className="w-72 h-40 absolute" ref={videoRef}>
            <source src={props.video.video} type="video/mp4" />
          </video>
        </a>
      </div>
      <div className="m-3 max-w-3/12">
        <p className="text-me-yellow font-semibold">{props.video.title}</p>
        <p className="text-me-yellow text-opacity-75">{props.video.channel}</p>
      </div>
    </div>
  )
}

export default Result
