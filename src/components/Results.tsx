import React from 'react'
interface IResults extends Array<IResult>{
    
}
interface IResult{
    id:number;
    title:string;
    miniature:string;
}
interface Props{
    videos:IResults;
}

const Results = (props:Props) => {
  return (
    <div>Results</div>
  )
}

export default Results