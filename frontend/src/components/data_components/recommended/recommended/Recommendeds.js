import React from 'react'
import Recommend from './Recommend'

const Recommendeds = ({recommended, setPlaylist, setFavorites, playlist, favorites}) => {
  return (
    <div>
        <h4>Our Hits</h4>
        <div className='display'>
            {recommended.map(recom => <Recommend song={recom} setPlaylist={setPlaylist} setFavorites={setFavorites} playlist={playlist} favorites={favorites}/>)}
        </div>
    </div>
  )
}

export default Recommendeds