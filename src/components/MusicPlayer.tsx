import React, { useState } from 'react';

const MusicPlayer = () => {
const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <audio controls>
          <source src={URL.createObjectURL(selectedFile)} />
        </audio>
      )}
    </div>
  );
};

export default MusicPlayer;