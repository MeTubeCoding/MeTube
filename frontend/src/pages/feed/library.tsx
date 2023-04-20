import React, { useState } from 'react'
import Main from '../../pages/Main'
import Results from '../../components/Results'
import Navbar from '../../components/Navbar'
import { useOnSearch } from '../../components/useOnSearch'
import SideBar from '../../components/SideBar'
import Filters from '../../components/Filters'
import { channel } from 'diagnostics_channel'
import { set } from 'mongoose'

function Bibliotheque() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(false)
  const [filter, setFilter] = useState('none')
  const { videos, channels, onSearch } = useOnSearch()

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(prevState => !prevState)
  }

  return (
    <div>
      <div className="History text-me-orange">
        <div className="max-h-screen">
          <div style={{ height: '7vh' }}>
            <Navbar
              onSearch={onSearch}
              onToggleSideBar={toggleSideBarVisibility}
            />
          </div>
          <div className="flex flex-col">
            <SideBar visible={isSideBarVisible} />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-5xl sm:mb-16 ml-16">Bibliothèque</h1>

        <ul>
          <h1 className="text-4xl sm:mb-10">J'aime</h1>

          <div className="flex justify-around flex-row sm:mb-12">
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/XuDnsjECf_A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/XxYX9RXt9NA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/CP74ud3BQC4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex justify-around flex-row sm:mb-12">
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/PpItdzLvS8w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/c8AV-FmxN78"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/UUYv3kk37oQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="text-4xl sm:mb-10">Playlists</h1>

          <div className="flex justify-around flex-row sm:mb-12">
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex justify-around flex-row sm:mb-12">
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/videoseries?list=PLOrMFaHlvMpu373GW-fTEWeADz0aqg0yj"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="text-4xl sm:mb-10">Historique</h1>

          <div className="flex justify-around flex-row sm:mb-12">
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/XuDnsjECf_A"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/XxYX9RXt9NA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/CP74ud3BQC4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="flex justify-around flex-row sm:mb-12">
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/PpItdzLvS8w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/c8AV-FmxN78"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="357"
              height="201"
              src="https://www.youtube.com/embed/UUYv3kk37oQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Bibliotheque
