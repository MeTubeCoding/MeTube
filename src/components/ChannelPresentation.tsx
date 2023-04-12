/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Box, Button, Typography } from '@mui/material'
import { styled } from '@mui/system'
import logoImage from '../assets/youtube_baneer.jpeg'
const ChannelBanner = styled(Box)({
  width: 'auto',
  height: '150px',
  backgroundSize: 'cover',
  backgroundColor: 'grey',
  backgroundPosition: 'center',
  marginTop: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '200px'
})
const LogoImage = styled('img')({
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  marginRight: '20px'
})

function ChannelPresentation () {
  return (
    <ChannelBanner>
       <LogoImage src={logoImage}/>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: '200px',
        backgroundSize: 'cover',
        backgroundColor: 'grey',
        backgroundPosition: 'center',
        marginTop: '40px',
        paddingLeft: '20px',
        paddingRight: '20px'
      }}>
          <Typography variant="h4">Nom de la chaîne</Typography>
          <Typography variant="subtitle1">Description de la chaîne</Typography>
          <Button variant="contained" color="primary">Sabonner</Button>
        </Box>
    </ChannelBanner>
  )
}
export default ChannelPresentation
