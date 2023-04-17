import React, { useState } from 'react'
import Result, { type IResult } from './Result/Result'
export type IResults = Array<IResult>

interface Props {
  videos: IResults
  visible: boolean
}

const Results = (props: Props): any => {
  return (
    <>
      {props.videos.length === 0 ? (
        <div></div>
      ) : (
        <div>
          {props.videos.map(video => (
            <Result key={video.id} video={video} visible={props.visible} />
          ))}
        </div>
      )}
    </>
  )
}

export default Results
