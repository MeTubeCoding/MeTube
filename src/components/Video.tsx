import React, { useRef, useState } from 'react' // Importer useState pour gérer l'état local
import './Video.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import InsertCommentIcon from '@mui/icons-material/InsertComment'
import NearMeIcon from '@mui/icons-material/NearMe'
import Ticker from 'react-ticker'
import { Avatar } from '@mui/material'

function Video(): JSX.Element {
  // const [playing, setPlaying] = useState(false as boolean)
  // const videoRef = useRef(null)
  // const handleVideo = () => {
  //   if (videoRef.current) {
  //     // Vérification que videoRef.current n'est pas null
  //     if (playing) {
  //       videoRef.current.pause()
  //       setPlaying(false)
  //     } else {
  //       videoRef.current.play()
  //       setPlaying(play => !play)
  //     }
  //   }
  // }
  const [description] = useState('test description')

  return (
    <div className="video">
      <video
        // onClick={handleVideo}
        className="video_player"
        src="https://rr3---sn-4g5ednse.googlevideo.com/videoplayback?expire=1681406742&ei=tuY3ZPeRD5C_mLAPsPSPqAs&ip=37.166.129.22&id=o-APp3bYnZDuUxyFfNTS_V1-wNY6TxqwLk58lsSR2g6nWd&itag=22&source=youtube&requiressl=yes&gcr=fr&vprv=1&mime=video/mp4&cnr=14&ratebypass=yes&dur=217.083&lmt=1537620794122899&fexp=24007246&c=ANDROID&sparams=expire,ei,ip,id,itag,source,requiressl,gcr,vprv,mime,cnr,ratebypass,dur,lmt&sig=AOq0QJ8wRAIgUhVHl1tybBPRgHLI10SYp-FLK9Jz1zXB9cEpG3jhxTcCIE4pP7_EaBJQACqByUnBZ4u2nxnBjNt7DeLtesKk7wrJ&avi=K1A%2FHwERIiwAVF9GWnBffgpLIgxWHAxHSFQmDVNZV0E1FigaFRwsBwECFkYZX0dfPF5LNQwEJQAWIgwJRkJGUj0CS0wLASEJSFQ1CEJIU1E5HgACHCc5BBADFkYZX0dfPF5LIAwQKAotGAMLdkNeej4WDA5HTn1JRi8xB0xEXEciC0tMCwEhCUhUNRZMSUsRalABAhEEd0pLEBdJU0McXCgLBRcHB2MMC0xRVBYHARF8UCQXHTkkCwA1ChFNRUBKckgHAwkYYUcnAxcWRl9GZzkfDAURFSAVRkxHVRUJAwBoR1hCVlZhRyEOERZCUkZcIiYQBgBWd0cGFxYBc11TSjUAIwVHCQ%3D%3D&from_cache=False&title=Top%20Gun%20%20Danger%20Zone%20Full%20HD%201080p%20mp4%20QD%20World&redirect_counter=1&cm2rm=sn-25grz76&req_id=ad1bd17c8ef8a3ee&cms_redirect=yes&cmsv=e&mh=Gc&mip=92.174.83.81&mm=34&mn=sn-4g5ednse&ms=ltu&mt=1681384840&mv=m&mvi=3&pl=19&lsparams=mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAJjYx2AKB4740Tg02-agZzmTV9iRgvEv6h_CYE4hi2W2AiEAjOX2fbJ64Xsh1GrMGLi8LuM4YxCNQmsjKzkfZaH0_lQ%3D"
      />
      <div className="shortsContainer">
        <div className="shortsVideoTop">
          <div className="shortsVideoTopIcon">
            <ArrowBackIcon />
          </div>
          <div className="shortsVideoTopIcon">
            <MoreVertIcon />
          </div>
        </div>
        <div className="shortsVideoSideIcons">
          <div className="shortsVideoSideIcon">
            <ThumbUpIcon />
            <p>600</p>
          </div>
          <div className="shortsVideoSideIcon">
            <ThumbDownIcon />
            <p>600</p>
          </div>
          <div className="shortsVideoSideIcon">
            <InsertCommentIcon />
            <p>600</p>
          </div>
          <div className="shortsVideoSideIcon">
            <NearMeIcon />
            <p>600</p>
          </div>
        </div>
        <div className="shortsBottom">
          <div className="shortsDesc">
            <Ticker mode="smooth">
              {({ index }) => (
                <>
                  <p className="description">{description}</p>
                </>
              )}
            </Ticker>
          </div>
          <div className="shortDetails">
            {/* <Avatar /> */}
            <p>channel name</p>
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
