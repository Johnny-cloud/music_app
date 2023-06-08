import React from 'react'
import Album from "./Album"

const Albums = ({albums, setAlbumDisplay}) => {
  return (
    <div className='component-container'>
      <h3>Check Out Their Albums</h3>
      <div className='display'>
        {albums.map(album => <Album album = {album} setAlbumDisplay={setAlbumDisplay}/>)}
      </div> 
    </div>
  )
}

export default Albums
