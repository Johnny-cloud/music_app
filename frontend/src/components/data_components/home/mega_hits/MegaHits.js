import React from 'react'
import Song from '../../song_display/Song'

const MegaHits = ({megaHits, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div>
        <h2>Mega Hits</h2>
        <div className='display'>
            {megaHits.map(hit => <Song song={hit} setFavorites={setFavorites} setPlaylist={setPlaylist} playlist={playlist} favorites={favorites}/>)}
        </div>
    </div>
  )
}

export default MegaHits