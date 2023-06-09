import React from 'react'
import Song from '../song_display/Song'

const Trendings = ({trendings, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div className='component-container'>
        <h3>What's Trending?</h3>
        <div className='display'>
         {trendings.map(trending => <Song song = {trending} setFavorites={setFavorites} setPlaylist={setPlaylist} playlist={playlist} favorites={favorites}/>)}
        </div>
    </div>
    
  )
}

export default Trendings
