import React from 'react'
import Top10 from './Top10'

const Top10s = ({top10s, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div className='component-container'>
       <div className='top10-display'>
      {top10s.map(top10 => <Top10 top10={top10} setFavorites={setFavorites} setPlaylist={setPlaylist} playlist={playlist} favorites={favorites}/>)}
    </div>
    </div>
   
  )
}

export default Top10s
