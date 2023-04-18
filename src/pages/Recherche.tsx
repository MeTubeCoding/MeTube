import React, { useState } from 'react'
import { useOnSearch } from '../components/useOnSearch'
import Results from '../components/Results'
import Filters from '../components/Filters'

interface Props {
    setFilter: React.Dispatch<React.SetStateAction<string>>
    filter: string
    visible: boolean
  }

const Recherche = (props: Props) => {
  const { videos, channels } = useOnSearch()

  const filterChannel = () => {
    if (props.filter != 'channel') {
      props.setFilter('channel')
    } else {
      props.setFilter('none')
    }
  }

  const filterMovie = () => {
    if (props.filter != 'movie') {
      props.setFilter('movie')
    } else {
      props.setFilter('none')
    }
  }

  const filterVideo = () => {
    if (props.filter != 'video') {
      props.setFilter('video')
    } else {
      props.setFilter('none')
    }
  }

  const filterPlaylist = () => {
    if (props.filter != 'playlist') {
      props.setFilter('playlist')
    } else {
      props.setFilter('none')
    }
  }

  return (
    <div>
        <Filters
          visible={props.visible}
          filterChannel={filterChannel}
          filterVideo={filterVideo}
          filterMovie={filterMovie}
          filterPlaylist={filterPlaylist}
          filter={props.filter}
        ></Filters>
        <Results
          visible={props.visible}
          filter={props.filter}
          videos={videos}
          channels={channels}
        />
    </div>
  )
}

export default Recherche
