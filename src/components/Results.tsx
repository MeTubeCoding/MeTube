/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react'
import Result, { type IResult } from './Result/Result'
export interface IResults extends Array<IResult> {

}

interface Props {
  videos: IResults
}

const Results = (props: Props) => {
  return (
    <>
    {
        props.videos.length === 0
          ? <div></div>
          : <div>
            {
                props.videos.map((video) => (
                    <Result key={video.id} video={video}/>
                ))
            }
        </div>
    }
    </>
  )
}

export default Results
