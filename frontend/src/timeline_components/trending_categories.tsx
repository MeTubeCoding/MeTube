/* eslint-disable react/jsx-key */
import React from 'react'
import mockData from './mocking.json'

export function trend_tag() {
  const chaine = mockData.chaine
  const videos = mockData.videos
  const vid_a_afficher = []

  for (let i = 0; i < chaine.length; i++) {
    const trend_tag = mockData.chaine[i].tag_pref

    for (let j = 0; j < videos.length; j++) {
      const videos_tags = mockData.videos[j].tags
      let tag_found = false

      for (let k = 0; k < videos_tags.length; k++) {
        if (trend_tag.includes(videos_tags[k])) {
          tag_found = true
          break
        }
      }

      if (tag_found) {
        vid_a_afficher.push(videos[j])
      }
    }
  }

  // Afficher les vidéos ayant des tags en commun avec les chaînes
  return (
    <div>
      <div>
        {vid_a_afficher.map(video => (
          <div className="flex mb-[5%]">
            <div className="w-1/3">
              <img className="w-64 h-144 rounded-lg" src={video.minia} alt='minia'/>
            </div>
            <div className="w-2/3 px-4">
              <h5 className="text-lg font-bold">{video.titre}</h5>
              <div className="flex flex-row">
                <img
                  className="w-6 h-6 rounded-full mr-2"
                  src={video.img_chaine}
                  alt='pfp'
                />
                <p className="text-gray-500">{video.chaine}</p>
              </div>
              <div className="flex flex-row">
                {video.tags.map((tag, index) => (
                  <p key={index} className="text-gray-500 mr-1">
                    #{tag}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// OBSOLETE =======================================================================================
// ================================================================================================
// ================================================================================================

export function trend_videos() {
  const trend_new = mockData.videos
  return (
    <div className="mr-5 p-0 text-center top-0 flex flex-col h-full">
      <h4 className="mb-5">NOUVEAUTES</h4>
      {trend_new.map(trend_videos => (
        <div className="flex flex-col">
          <div className="flex flex-col">
            <img
              className="mr-1% rounded-lg h-144 w-64"
              src={trend_videos.minia}
              alt='minia'
            />
            <h5 className="text-left font-sans py-2">{trend_videos.titre}</h5>
            <p className="text-left pb-5">{trend_videos.chaine}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
