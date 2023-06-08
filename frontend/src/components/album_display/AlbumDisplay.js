import React, { useEffect, useState } from 'react'
import AlbumHead from './AlbumHead'
import AlbumSongs from './AlbumSongs'


const AlbumDisplay = ({album, setReviews}) => {
  const [songs, setSongs] = useState([])

  useEffect(
    () => {
      fetch(`http://localhost:9292/albums/${album.id}/songs`)
      .then(res => res.json())
      .then(data => setSongs(data))
    },[album]
  )

  

  return (
    <div>
        <div className='display'>
              <AlbumHead album = {album} />
              <AlbumSongs songs = {songs} album={album} setReviews={setReviews}/>
        </div>
    </div>
    
  )
}

export default AlbumDisplay
