import React, { useEffect, useState } from 'react'
import AlbumHead from './AlbumHead'
import AlbumSongs from './AlbumSongs'

const AlbumDisplay = ({album}) => {
  const [songs, setSongs] = useState([])

  useEffect(
    () => {
      fetch(`http://localhost:9292/albums/${album.id}/songs`)
      .then(res => res.json())
      .then(data => setSongs(data))
    },[album]
  )
  return (
    <div className='album-display'>
        <AlbumHead album = {album}/>
        <AlbumSongs songs = {songs}/>
    </div>
  )
}

export default AlbumDisplay