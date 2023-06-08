import React from 'react'
import Trending from './Trending'

const Trendings = ({trendings, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div className='component-container'>
        <div className='trending-display'>
         {trendings.map(trending => <Trending trending = {trending} setFavorites={setFavorites} setPlaylist={setPlaylist} playlist={playlist} favorites={favorites}/>)}
        </div>
    </div>
    
  )
}

export default Trendings
