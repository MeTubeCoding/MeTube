import React from 'react'
import Result, { type IResult } from './Result/Result'
import CResult, { type CIResult } from './Result/CResult'
export type IResults = Array<IResult>
export type CIResults = Array<CIResult>

interface Props {
  videos: IResults
  channels: CIResults
  visible: boolean
}

const Results = (props: Props): any => {
  return (
    <>
      {props.channels.length === 0 ? (
        <div></div>
      ) : (
        <div>
          <div>
            {props.channels.map(channel => (
              <CResult
                key={channel.id}
                channel={channel}
                visible={props.visible}
              />
            ))}
          </div>
          <hr
            className={`my-8 border-me-yellow ${
              props.visible
                ? 'w-[52.33%] ml-[24.75rem]'
                : 'w-[62.42%] ml-[15.73rem]'
            }`}
          ></hr>
        </div>
      )}
      {props.videos.length === 0 ? (
        <div></div>
      ) : (
        <div className="pb-6">
          {props.videos.map(video => (
            <Result key={video.id} video={video} visible={props.visible} />
          ))}
        </div>
      )}
    </>
  )
}

export default Results
