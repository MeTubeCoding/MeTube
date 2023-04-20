import React from 'react'

interface VideoEditorProps {
  selectedVideo: string | undefined
  handleVideoUpload: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const VideoEditor = ({
  selectedVideo,
  handleVideoUpload
}: VideoEditorProps) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{ display: 'flex', flexDirection: 'column', marginRight: 20 }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}
          ></div>
          <div>
            {selectedVideo ? (
              <div>
                <video controls src={selectedVideo}></video>
                <div>
                  <label
                    htmlFor="video-upload"
                    className="px-4 py-2 text-sm font-medium text-me-white bg-me-red rounded-md cursor-pointer hover:bg-me-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-me-red"
                  >
                    Change video
                  </label>
                  <input
                    id="video-upload"
                    type="file"
                    accept="video/*"
                    onChange={handleVideoUpload}
                    className="sr-only"
                  />
                </div>
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoEditor
