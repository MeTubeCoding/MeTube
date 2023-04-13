/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

import ChannelBanner from './ChannelBanner'
import ChannelPresentation from './ChannelPresentation'

/*
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import ChannelPresentation from './ChannelPresentation'
import ChannelBanner from './ChannelBanner'
const videoData = [
  {
    id: 1,
    title: 'Video 1',
    thumbnailUrl: 'https://picsum.photos/id/237/200/300',
    duration: '2:30'
  },
  {
    id: 2,
    title: 'Video 2',
    thumbnailUrl: 'https://picsum.photos/id/238/200/300',
    duration: '1:45'
  },
  {
    id: 3,
    title: 'Video 3',
    thumbnailUrl: 'https://picsum.photos/id/239/200/300',
    duration: '3:20'
  },
  {
    id: 4,
    title: 'Video 4',
    thumbnailUrl: 'https://picsum.photos/id/240/200/300',
    duration: '5:00'
  },
  {
    id: 5,
    title: 'Video 5',
    thumbnailUrl: 'https://picsum.photos/id/241/200/300',
    duration: '4:15'
  },
  {
    id: 6,
    title: 'Video 6',
    thumbnailUrl: 'https://picsum.photos/id/242/200/300',
    duration: '2:10'
  }
]

function VideoList () {
  return (

    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginLeft: '200px', marginRight: '70px', marginTop: '70px' }}>
      {videoData.map((video) => (
        <Box key={video.id} sx={{ m: 1, flexBasis: '25%' }}>
          <Card>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={video.thumbnailUrl}
                alt={video.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {video.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {video.duration}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      ))}
    </Box>
   </>
   </>
  )
}

export default VideoList
*/
function VideoList () {
  const videos = [
    { id: 1, title: 'Titre de la vidéo 1', imgUrl: 'https://picsum.photos/id/241/200/300' },
    { id: 2, title: 'Titre de la vidéo 2', imgUrl: 'https://picsum.photos/id/242/200/300' },
    { id: 3, title: 'Titre de la vidéo 3', imgUrl: 'https://picsum.photos/id/243/200/300' },
    { id: 4, title: 'Titre de la vidéo 4', imgUrl: 'https://picsum.photos/id/244/200/300' },
    { id: 5, title: 'Titre de la vidéo 5', imgUrl: 'https://picsum.photos/id/245/200/300' },
    { id: 6, title: 'Titre de la vidéo 6', imgUrl: 'https://picsum.photos/id/246/200/300' }
    // Ajoutez plus de vidéos ici
  ]

  return (
    <>
      <ChannelBanner />
      <ChannelPresentation />

      <div className="flex flex-wrap -mx-4 md:ml-80">
  {videos.map((video, index) => (
    <div
      key={video.id}
      className={`w-full md:w-1/3 px-4 mb-8 ${index === 0 ? 'mt-8' : ''}`}
    >
      <div className="bg-me-lightpurple h-72 rounded-xl overflow-hidden flex flex-col justify-between">
        <img src={video.imgUrl} alt={video.title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-white mb-2">{video.title}</h3>
          <button className="bg-red-600 text-white px-4 py-2 rounded-md mt-4 place-content-center">Lire</button>
        </div>
      </div>
    </div>
  ))}
</div>
    </>
  )
}

export default VideoList
