import React, { useRef } from "react";

const VideoItem = ({ video }: { video: File }): JSX.Element => {
  const videoElement = useRef<HTMLVideoElement | null>(null);

  // Function to handle play button click
  const handlePlay = () => {
    if (videoElement.current) {
      videoElement.current.play();
    }
  };

  // Function to handle pause button click
  const handlePause = () => {
    if (videoElement.current) {
      videoElement.current.pause();
    }
  };

  return (
    <div>
      <video ref={videoElement} src={URL.createObjectURL(video)} controls />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default VideoItem;


