import React, { useState, useRef, useEffect } from 'react';

const MusicPlayer = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Charger le fichier précédemment sélectionné lors du montage du composant
  useEffect(() => {
    const storedFile = localStorage.getItem('selectedFile');
    if (storedFile) {
      setSelectedFile(JSON.parse(storedFile));
    }
  }, []);

  // Enregistrer le fichier sélectionné dans le localStorage à chaque mise à jour
  useEffect(() => {
    if (selectedFile) {
      localStorage.setItem('selectedFile', JSON.stringify(selectedFile));
    } else {
      localStorage.removeItem('selectedFile');
    }
  }, [selectedFile]);

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

