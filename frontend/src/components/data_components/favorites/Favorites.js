import React from 'react'
import FavoriteSong from './FavoriteSong'

const Favorites = ({songs, favorites, setFavorites}) => {
  return (
    <div className='component-container'>
        <h3>Your Favorites</h3>
        <div className='display'>
        {songs.map(song => <FavoriteSong song={song} favorites={favorites} setFavorites={setFavorites}/>)}
        </div>
    </div>
  )
}

export default Favorites
