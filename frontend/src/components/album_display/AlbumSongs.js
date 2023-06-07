import React from 'react'
import AlbumSong from "./AlbumSong"
import { Card } from 'react-bootstrap'

const AlbumSongs = ({songs}) => {
  return (
    <div>
      <Card style={{width: '50rem', backgroundColor: 'black', color: 'white'}} className='album-songs'>
      <Card.Body>
        <h3>Songs</h3>
        {songs.map(song => <AlbumSong song = {song} />)} 
      </Card.Body>
      </Card>
         
     </div>
  )
}

export default AlbumSongs