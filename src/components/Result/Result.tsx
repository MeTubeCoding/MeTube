import React, { useEffect, useRef } from 'react'

export interface IResult {
  id: number
  title: string
  miniature: string
  channel: string
  video: string
  tag: string[],
  views: number,
  release: string[],
  description: string,
  short: boolean,
  duration: string
}
interface Props {
  video: IResult
  filter: string
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

  useEffect(() => {
    console.log(props.video)
  }, [props.video]);

  return (
    <div
      className={`flex mt-4 overflow-auto ${props.visible ? 'ml-96' : 'ml-60'}`}
    >
      <div className="max-w-fit h-40 rounded-lg bg-[#000000] m-2">
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
      <div className="m-3 max-h-36 w-6/12 overflow-hidden">
        <p className="text-me-yellow font-semibold">{props.video.title}</p>
        <p className="text-me-yellow text-opacity-75 text-xs">{props.video.views} views • Release-date: {props.video.release[0]}-{props.video.release[1]}-{props.video.release[2]}</p>
        <p className="text-me-yellow text-opacity-75 text-xs my-3 flex items-center font-semibold"><img className="rounded-full h-6 w-6 mr-2" src="https://cdn.discordapp.com/attachments/494204379822555139/1097441029117988914/Capture_decran_2023-04-17_a_10.36.13.png"></img>{props.video.channel}</p>
        <p className="text-me-yellow text-xs text-opacity-75 overflow-hidden text-ellipsis whitespace-nowrap h-4">{props.video.description}</p>
      </div>
    </div>
  )
}

export default Result
