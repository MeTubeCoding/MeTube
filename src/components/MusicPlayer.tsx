import React, { useState, useRef } from 'react';

const MusicPlayer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load();
    }
  };

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <audio ref={audioRef} controls>
            <source src={URL.createObjectURL(selectedFile)} />
          </audio>
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;

