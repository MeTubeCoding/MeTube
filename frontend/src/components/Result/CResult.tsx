import React from 'react'

export interface CIResult {
  id: number
  name: string
  pfp: string
  subs: number
  about: string
}
interface Props {
  channel: CIResult
  visible: boolean
}

const CResult = (props: Props) => {
  return (
    <div
      className={`flex items-center mt-4 overflow-auto ${
        props.visible ? 'ml-96' : 'ml-60'
      }`}
    >
      <div className="w-72 h-40 rounded-lg m-2 flex justify-center items-center">
        <a
          className="w-36 h-36 flex rounded-lg relative justify-center overflow-hidden"
          href="#"
        >
          <img className="rounded-full" src={props.channel.pfp} alt="" />
        </a>
      </div>
      <div className="m-3 max-w-3/12 flex flex-col justify-center">
        <p className="text-me-yellow font-semibold mb-2">
          {props.channel.name}
        </p>
        <p className="text-me-yellow text-opacity-75 text-xs">
          {props.channel.subs} subscribers
        </p>
        <p className="text-me-yellow text-opacity-75 text-xs">
          {props.channel.about}
        </p>
      </div>
      <a
        className={`bg-me-lightpurple py-3 px-6 rounded-full hover:bg-me-yellow text-me-yellow hover:text-me-darkpurple ${
          props.visible ? 'ml-36' : 'ml-72'
        }`}
      >
        Subscribe
      </a>
    </div>
  )
}

export default CResult
