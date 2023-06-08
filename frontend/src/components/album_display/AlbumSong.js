import React from 'react'


const AlbumSong = ({song}) => {
  return (
      <div className='album-song'>
        <h5><i class="bi bi-music-note"></i> {song.name}</h5> 
      </div>   
      
  )
}

export default AlbumSong
