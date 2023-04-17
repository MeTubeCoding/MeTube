import React, { useRef } from 'react';

interface CropperProps {
  src: string;
}

const Cropper = ({ src }: CropperProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleCrop = () => {
    // implémentez la logique pour cropper la vidéo ici
  };

  return (
    <div>
      <video ref={videoRef} src={src} controls />
      <button onClick={handleCrop}>Crop</button>
    </div>
  );
};

export default Cropper;
