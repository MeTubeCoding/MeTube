import React from 'react';
import { useParams } from 'react-router-dom';
import VideoDisplay from '../components/VideoDisplay';

const VideoPage = () => {
  const { videoUrl } = useParams();
  return (
    <div>
      <h1>Page vidéo</h1>
      {videoUrl && <VideoDisplay videoUrl={videoUrl} />}
    </div>
  );
};

export default VideoPage;