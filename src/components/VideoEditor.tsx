import MusicPlayer from '../components/MusicPlayer';
import Cropper from './fonction/CropVideo';

interface VideoEditorProps {
selectedVideo: string | undefined;
handleVideoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const VideoEditor = ({ selectedVideo, handleVideoUpload }: VideoEditorProps) => {
  return (
  <div>
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginRight: 20 }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div><MusicPlayer/></div>
        </div>
        <div>
          {selectedVideo ? (
            <Cropper src={selectedVideo} />
            ) : (
            <div className="flex flex-col items-center justify-center space-y-4">
              <h2 className="text-xl font-medium text-me-black">
                No video selected
              </h2>
              <label
                htmlFor="video-upload"
                className="px-4 py-2 text-sm font-medium text-me-white bg-me-red rounded-md cursor-pointer hover:bg-me-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-me-red"
              >
              Choose a file
              </label>
              <input
                id="video-upload"
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="sr-only"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  )
}

export default VideoEditor;