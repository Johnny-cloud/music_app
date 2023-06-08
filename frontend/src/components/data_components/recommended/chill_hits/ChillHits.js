import React from 'react'
import ChillHit from './ChillHit'

const ChillHits = ({chillHits, setPlaylist, setFavorites, playlist, favorites}) => {
    return (
      <div>
          <h4>Chill Hits</h4>
          <div className='display'>
              {chillHits.map(recom => <ChillHit song={recom} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>)}
          </div>
      </div>
    )
  }

export default ChillHits