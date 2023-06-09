import React from 'react'
import { Card, Button } from 'react-bootstrap'

const PlaySong = ({song, playlist, setPlaylist}) => {

  function handleRemove(){
    fetch(`http://localhost:9292/playlist/${song.id}`,{
          method: 'DELETE'
        }) 
    let filtered_songs = playlist.filter(play => play !== song)
    setPlaylist(filtered_songs)
  }
  return (
    <Card style={{width: '18rem'}} className='card'>
      <Card.Img variant='top' src={song.image}/>
      <Card.Body>
        <h6>{song.name}</h6>
        <Button onClick={handleRemove} style={{
        backgroundColor: 'red',
        border: 'none'
      }}><i class="bi bi-trash"></i></Button>
      </Card.Body>
    </Card>
  )
}

export default PlaySong
