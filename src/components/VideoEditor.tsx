import React, { useState, useRef } from "react";
import { Button, Input, Slider } from "antd";
import ReactPlayer from "react-player";
import MusicPlayer from "../components/MusicPlayer";

const VideoEditor = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [speed, setSpeed] = useState(1);
  const [loop, setLoop] = useState(false);
  const [muted, setMuted] = useState(false);
  const [playedSeconds, setPlayedSeconds] = useState(0);
  const playerRef = useRef(null);
  const [musicPlayerActive, setMusicPlayerActive] = useState(false);

  const handleVideoUrlChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setVideoUrl(event.target.value);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleVolumeChange = (value: React.SetStateAction<number>) => {
    setVolume(value);
  };

  const handleSpeedChange = (value: React.SetStateAction<number>) => {
    setSpeed(value);
  };

  const handleLoopChange = () => {
    setLoop(!loop);
  };

  const handleMutedChange = () => {
    setMuted(!muted);
  };

  const handleSeek = (value: any) => {
    playerRef.current.seekTo(value);
  };
  const handleTrimVideo = () => {
    playerRef.current.seekTo(startTime);
    playerRef.current.pause();
  };
  const handleRotateLeft = () => {
    const currentRotation =
      playerRef.current.getInternalPlayer().style.transform;
    playerRef.current.getInternalPlayer().style.transform = `rotate(${currentRotation} -90deg)`;
  };
  const handleRotateRight = () => {
    const currentRotation =
      playerRef.current.getInternalPlayer().style.transform;
    playerRef.current.getInternalPlayer().style.transform = `rotate(${currentRotation} 90deg)`;
  };
  const handleCropVideo = () => {
    // TODO: Implement crop functionality
  };

  const handleMergeVideos = () => {
    // TODO: Implement merge functionality
  };

  const handleProgress = ({ playedSeconds }) => {
    setPlayedSeconds(playedSeconds);
  };

  const handleActivateMusicPlayer = () => {
    setMusicPlayerActive(true);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSaveVideo = () => {
    // TODO: Implement save functionality
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div
          style={{ display: "flex", flexDirection: "column", marginRight: 20 }}
        >
          <Input value={videoUrl} onChange={handleVideoUrlChange} />
          <Button onClick={handlePlayPause}>
            {playing ? "Pause" : "Play"}
          </Button>
          <Button onClick={handleTrimVideo}>Trim</Button>
          <Button onClick={handleMergeVideos}>Merge</Button>
          <Button onClick={handleRotateLeft}>Rotate Left</Button>
          <Button onClick={handleRotateRight}>Rotate Right</Button>
          <Button onClick={handleCropVideo}>Crop</Button>
          <Button onClick={handleSaveVideo}>Save</Button>
          <Button onClick={handleActivateMusicPlayer}>
            Activer MusicPlayer
          </Button>
          <Slider
            min={0}
            max={1}
            step={0.01}
            onChange={handleVolumeChange}
            value={volume}
          />
          <Slider
            min={0.5}
            max={2}
            step={0.1}
            onChange={handleSpeedChange}
            value={speed}
          />
          <Button onClick={handleLoopChange}>
            {loop ? "Disable Loop" : "Enable Loop"}
          </Button>
          <Button onClick={handleMutedChange}>
            {muted ? "Unmute" : "Mute"}
          </Button>
          <Slider
            min={0}
            max={playerRef.current ? playerRef.current.getDuration() : 0}
            step={0.01}
            onChange={handleSeek}
            value={playedSeconds}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>{formatTime(playedSeconds)}</div>
            <div>
              {formatTime(
                playerRef.current ? playerRef.current.getDuration() : 0
              )}
            </div>
          </div>
          <div>
            <MusicPlayer />
          </div>
        </div>
        <div></div>
        <div style={{ flex: 1 }}>
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing={playing}
            volume={volume}
            playbackRate={speed}
            loop={loop}
            muted={muted}
            onProgress={handleProgress}
            width="100%"
            height="auto"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoEditor;
