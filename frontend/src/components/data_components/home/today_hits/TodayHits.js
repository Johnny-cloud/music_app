import React from 'react'
import TodayHit from './TodayHit'

const TodayHits = ({todayHits, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div>
        <h2>Today's Hits</h2>
        <div className='display'>
            {todayHits.map(hit => <TodayHit song={hit} setFavorites={setFavorites} setPlaylist={setPlaylist} playlist={playlist} favorites={favorites}/>)}
        </div>
    </div>
  )
}

export default TodayHits