import React from 'react'
import Song from '../../song_display/Song'

const ChillHits = ({chillHits, setPlaylist, setFavorites, playlist, favorites}) => {
    return (
      <div>
          <h4>Chill Hits</h4>
          <div className='display'>
              {chillHits.map(recom => <Song song={recom} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>)}
          </div>
      </div>
    )
  }

export default ChillHits