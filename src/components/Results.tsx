import React from 'react'
import Result, {IResult} from './Result/Result'
interface IResults extends Array<IResult>{
    
}

interface Props{
    videos:IResults;
}

const Results = (props:Props) => {
  return (
    <>
    {
        props.videos.length === 0 ? 
        <div></div>
        :
        <div>
            {
                props.videos.map((video)=>(
                    <Result key={video.id} video={video}/>
                ))
            }
        </div>
    }
    </>
  )
}

export default Results