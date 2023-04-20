import React, { useState, useEffect } from 'react';

interface VideoDisplayProps {
  videoUrl: string;
}

const VideoDisplay: React.FC<VideoDisplayProps> = ({ videoUrl }) => {
  const [videoData, setVideoData] = useState<{
    _id: string;
    title: string;
    description: string;
    url: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/video/${videoUrl}`);
        const data = await response.json();
        console.log('Data received:', data);
        setVideoData(data);
        console.log('Video data:', videoData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching video data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [videoUrl]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h2>{videoData?.title}</h2>
          <p>{videoData?.description}</p>
          <img
            src={`../storage/thumbnails/${videoData?.url}.jpg`}
            alt={videoData?.title}
          />
        </>
      )}
    </div>
  );
};

export default VideoDisplay;