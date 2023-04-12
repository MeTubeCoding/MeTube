/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
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

    <><ChannelBanner/>
  <><ChannelPresentation/>

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
