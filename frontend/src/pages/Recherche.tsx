import React, { useState } from 'react'
import { useOnSearch } from '../components/useOnSearch'
import Results from '../components/Results'
import Filters from '../components/Filters'
import { IResult } from '../components/Result/Result'

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
    if (props.sortBy != 'relev') {
      props.setSort('relev')
    } else {
      props.setSort('none')
    }
  }

  const sortDate = () => {
    if (props.sortBy != 'date') {
      props.setSort('date')
    } else {
      props.setSort('none')
    }
  }

  const sortViews = () => {
    if (props.sortBy != 'viewsUP' && props.sortBy != 'viewsDOWN') {
      props.setSort('viewsUP')
    } else if (props.sortBy != 'viewsDOWN') {
      props.setSort('viewsDOWN')
    } else {
      props.setSort('none')
    }
  }

  const sortRating = () => {
    if (props.sortBy != 'rating') {
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

  const videoList = videos
  const [sorting, setSorting] = useState(false)

  const sortVids = () => {
    console.log('sort')
    if (props.sortBy === 'viewsUP') {
      videoList.sort((a, b) => b.views - a.views)
      setSorting(true)
    } else if (props.sortBy === 'viewsDOWN') {
      videoList.sort((a, b) => b.views + a.views)
      setSorting(true)
    } else {
      setSorting(false)
    }
  }

  return (
    <div>
      <Filters
        sortVids={sortVids}
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
      {sorting != true ? (
        <Results
          visible={props.visible}
          filter={props.filter}
          videos={videos}
          channels={channels}
        />
      ) : (
        <Results
          visible={props.visible}
          filter={props.filter}
          videos={videoList}
          channels={channels}
        />
      )}
    </div>
  )
}

export default Recherche
