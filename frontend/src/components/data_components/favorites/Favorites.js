import React from 'react'
import FavoriteSong from './FavoriteSong'

const Favorites = ({songs, favorites, setFavorites}) => {
  return (
    <div className='component-container'>
        <h2>My Favorites</h2>
        <div className='favorites-display'>
        {songs.map(song => <FavoriteSong song={song} favorites={favorites} setFavorites={setFavorites}/>)}
        </div>
    </div>
  )
}

export default Favorites
