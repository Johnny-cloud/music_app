import React from 'react'
import ChillHits from './chill_hits/ChillHits'
import Recommendeds from './recommended/Recommendeds'

const Recommended = ({recommended ,chillHits, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div className='component-container'>
        <h3>Our Recommendations</h3>
        <div className='home-container'>
          <Recommendeds recommended={recommended} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>
          <ChillHits chillHits={chillHits} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>
        </div>
    </div>
  )
}

export default Recommended
