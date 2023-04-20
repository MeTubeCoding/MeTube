/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* import React from 'react';

function VideoItem(props) {
  return (
    <div className="video-item">
      <img src={props.thumbnail} alt={props.title} />
      <h3>{props.title}</h3>
      <a href={`https://www.youtube.com/watch?v=${props.videoId}`}>Watch video</a>
    </div>
  );
}

export default VideoItem;

*/

import React from 'react'

interface VideoItemProps {
  thumbnail: string
  title: string
  videoId: string
}

function VideoItem(props: VideoItemProps) {
  return (
    <div className="video-item">
      <img src={props.thumbnail} alt={props.title} />
      <h3>{props.title}</h3>
      <a href={`https://www.youtube.com/watch?v=${props.videoId}`}>
        Watch video
      </a>
    </div>
  )
}

export default VideoItem
