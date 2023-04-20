import React, { useEffect } from 'react'
import Result, { type IResult } from './Result/Result'
import SResult, { type SIResult } from './Result/SResult'
import CResult, { type CIResult } from './Result/CResult'
export type IResults = Array<IResult>
export type SIResults = Array<SIResult>
export type CIResults = Array<CIResult>

interface Props {
  videos: IResults
  channels: CIResults
  sortBy: string
  filter: string
  visible: boolean
}

const Results = (props: Props) => {
  const sortVids = () => {
    console.log('sort')
    if (props.sortBy === 'viewsUP') {
      props.videos.sort((a, b) => b.views - a.views)
    } else if (props.sortBy === 'viewsDOWN') {
      props.videos.sort((a, b) => a.views - b.views)
    }
  }

  useEffect(() => {
    sortVids()
  }, [props.sortBy])

  return (
    <>
      {props.channels.length === 0 ||
      props.filter === 'video' ||
      props.filter === 'playlist' ||
      props.filter === 'movie' ? (
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
                ? 'w-[54.76%] ml-[24.75rem]'
                : 'w-[64.80%] ml-[15.73rem]'
            }`}
          ></hr>
        </div>
      )}
      {props.videos.length === 0 ||
      props.filter === 'channel' ||
      props.filter === 'playlist' ||
      props.filter === 'movie' ? (
        <div></div>
      ) : (
        <div className="pb-6">
          {props.videos.map(video => (
            <Result
              key={video.id}
              video={video}
              visible={props.visible}
              filter={props.filter}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Results
