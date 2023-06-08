import React from 'react'
import Artist from "./Artist"

const Artists = ({artists, setAlbumArtist}) => {
  return (
    <div className='component-container'>
      <h1>Artists</h1>
      <div className='artists-display'>
        {artists.map(artist => <Artist artist = {artist} setAlbumArtist={setAlbumArtist}/>)}
      </div>
    </div>
  )
}

export default Artists
