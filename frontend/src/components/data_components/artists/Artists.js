import React from 'react'
import Artist from "./Artist"

const Artists = ({artists, setAlbumArtist}) => {
  return (
    <div className='component-container'>
      <h3>Meet The Artists</h3>
      <div className='display'>
        {artists.map(artist => <Artist artist = {artist} setAlbumArtist={setAlbumArtist}/>)}
      </div>
    </div>
  )
}

export default Artists
