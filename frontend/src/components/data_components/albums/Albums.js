import React from 'react'
import Album from "./Album"

const Albums = ({albums, setAlbumDisplay}) => {
  return (
    <div className='component-container'>
      <h1>Albums</h1>
      <div className='albums-display'>
        {albums.map(album => <Album album = {album} setAlbumDisplay={setAlbumDisplay}/>)}
      </div> 
    </div>
  )
}

export default Albums