import React, { useEffect, useState } from 'react'
import { Albums } from '../data_components'

const ArtistAlbums = ({artist, setAlbumDisplay}) => {
    const [albums, setAlbums] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:9292/artists/${artist.id}/albums`)
            .then(res => res.json())
            .then(data => setAlbums(data))
        }, [artist.id]
    )
  return (
    <div>
        <Albums albums = {albums} setAlbumDisplay={setAlbumDisplay}/>
    </div>
  )
}

export default ArtistAlbums
