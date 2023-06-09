import React from 'react'
import Song from '../../song_display/Song'

const Recommendeds = ({recommended, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div>
        <h4>Our Hits</h4>
        <div className='display'>
            {recommended.map(recom => <Song song={recom} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>)}
        </div>
    </div>
  )
}

export default Recommendeds