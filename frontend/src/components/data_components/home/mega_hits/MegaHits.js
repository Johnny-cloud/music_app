import React from 'react'
import MegaHit from './MegaHit'

const MegaHits = ({megaHits, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div>
        <h2>Mega Hits</h2>
        <div className='display'>
            {megaHits.map(hit => <MegaHit song={hit} setFavorites={setFavorites} setPlaylist={setPlaylist} playlist={playlist} favorites={favorites}/>)}
        </div>
    </div>
  )
}

export default MegaHits