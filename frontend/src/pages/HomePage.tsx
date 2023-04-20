import React, { useEffect, useState } from 'react'
import Video from '../components/Video'
import './HomePage.css'
import Navbar from '../components/Navbar'
import { channel } from 'diagnostics_channel'
import { useOnSearch } from '../components/useOnSearch'
import axios from 'axios'
import SResult, { SIResult } from '../components/Result/SResult'

export type SIResults = Array<SIResult>

interface Props {
  shorts: SIResults
  visible: boolean
}

const HomePage = (props: Props): JSX.Element => {
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const [comment, setComment] = useState<string>('')
  const { videos, channels, onSearch } = useOnSearch()
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)

  const handleCommentSubmit = () => {
    console.log('Comment submitted:', comment)
    setShowPopup(false)
    setComment('')
  }
  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  return (
    <div className="max-h-screen">
      <div style={{ height: '8.5vh' }}>
        <Navbar onSearch={onSearch} onToggleSideBar={toggleSideBarVisibility} />
      </div>
      <div className="flex justify-center items-center max-w-3xl mx-auto">
        <div className="mt-[15%] video">
          <div>
            {props.shorts.map(short => (
              <SResult key={short.id} short={short} visible={props.visible}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
