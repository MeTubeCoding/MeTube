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
  visible: boolean
}

const Result = (props: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  const playVid = () => {
    videoRef.current?.classList.remove('hidden')
    imgRef.current?.classList.add('hidden')
    if (videoRef.current != null) {
      videoRef.current.currentTime = 0
      void videoRef.current.play()
    }
  }

  const pauseVid = () => {
    imgRef.current?.classList.remove('hidden')
    videoRef.current?.classList.add('hidden')
    if (videoRef.current != null) {
      void videoRef.current.play()
    }
  }

  return (
    <div
      className={`flex ml-60 mt-4 overflow-auto ${
        props.visible ? 'ml-60' : 'ml-80'
      }`}
    >
      <div className="max-w-fit rounded-lg bg-[#000000] m-2">
        <a
          className="w-72 h-40 flex rounded-lg relative justify-center overflow-hidden"
          href="#"
          onMouseEnter={playVid}
          onMouseLeave={pauseVid}
        >
          <img
            className="h-40"
            src={props.video.miniature}
            alt=""
            ref={imgRef}
          />
          <video muted className="w-72 h-40 hidden" ref={videoRef}>
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
