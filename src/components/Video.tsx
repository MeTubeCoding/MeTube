import React, { useState } from 'react';

const videoData = [
  {
    id: 'Qg0Kk5MO5_0',
    title: 'Video 1',
    thumbnail: 'https://i.ytimg.com/vi/Qg0Kk5MO5_0/hqdefault.jpg'
  },
  {
    id: '8XpGZd_7_dI',
    title: 'Video 2',
    thumbnail: 'https://i.ytimg.com/vi/8XpGZd_7_dI/hqdefault.jpg'
  },
  {
    id: 'Ib3RJ-_DCT0',
    title: 'Video 3',
    thumbnail: 'https://i.ytimg.com/vi/Ib3RJ-_DCT0/hqdefault.jpg'
  }
];
function Video() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'ArrowUp') {
      setCurrentVideoIndex(prevIndex => {
        const nextIndex = prevIndex + 1;
        return nextIndex < videoData.length ? nextIndex : 0;
      });
    } else if (event.key === 'ArrowDown') {
      setCurrentVideoIndex(prevIndex => {
        const nextIndex = prevIndex - 1;
        return nextIndex >= 0 ? nextIndex : videoData.length - 1;
      });
    }
  };

  const currentVideo = videoData[currentVideoIndex];
  const nextVideo = videoData[(currentVideoIndex + 1) % videoData.length];
  
    return (
      <div className="video-container">
        <video
          src={`https://www.youtube.com/embed/${currentVideo.id}`}
          title={currentVideo.title}
          onKeyDown={handleKeyDown}
          controls
        ></video>
        <img
          className="video-preview"
          src={nextVideo.thumbnail}
          alt={nextVideo.title}
        />
      </div>
    );
  }
  
  export default Video;