import React from 'react'
import Song from '../song_display/Song'


const Top10s = ({top10s, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div className='component-container'>
    <h3>Our Top 10</h3>
    <div className='display'>
      {top10s.map(top10 => <Song song={top10} setFavorites={setFavorites} setPlaylist={setPlaylist} playlist={playlist} favorites={favorites}/>)}
    </div>
    </div>
   
  )
}

export default Top10s
