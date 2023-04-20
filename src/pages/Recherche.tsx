import React from 'react'
import { useOnSearch } from '../components/useOnSearch'
import Results from '../components/Results'
import Filters from '../components/Filters'

interface Props {
    setFilter: React.Dispatch<React.SetStateAction<string>>
    setSort: React.Dispatch<React.SetStateAction<string>>
    filter: string
    sortBy: string
    visible: boolean
  }

const Recherche = (props: Props) => {
  const { videos, channels } = useOnSearch()

  const sortRelevance = () => {
    if(props.sortBy != 'relev') {
      props.setSort('relev')
    } else {
      props.setSort('none')
    }
  }

  const sortDate = () => {
    if(props.sortBy != 'date') {
      props.setSort('date')
    } else {
      props.setSort('none')
    }
  }

  const sortViews = () => {
    if(props.sortBy != 'viewsUP' && props.sortBy != 'viewsDOWN') {
      props.setSort('viewsUP')
    } else if (props.sortBy != 'viewsDOWN') {
      props.setSort('viewsDOWN')
    } else {
      props.setSort('none')
    }
  }

  const sortRating = () => {
    if(props.sortBy != 'rating') {
      props.setSort('rating')
    } else {
      props.setSort('none')
    }
  }

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
          sortRelevance={sortRelevance}
          sortRating={sortRating}
          sortViews={sortViews}
          sortDate={sortDate}
          sortBy={props.sortBy}
          filter={props.filter}
        ></Filters>
        <Results
          visible={props.visible}
          filter={props.filter}
          sortBy={props.sortBy}
          videos={videos}
          channels={channels}
        />
    </div>
  )
}

export default Recherche
