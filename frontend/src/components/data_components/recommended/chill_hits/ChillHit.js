import React from 'react'
import { Card, Button } from 'react-bootstrap'

const ChillHit = ({song, setPlaylist, setFavorites, playlist, favorites}) => {
    function handleLike(){
      setFavorites([...favorites, song])
      alert("Added to favorites!")
    }
    function handlePlaylist(){
      setPlaylist([...playlist, song])
      alert("Added to playlist!")
    }
    return (
      <Card style={{width: '18rem'}} className='card'>
      <Card.Img variant='top' src={song.image}/>
      <Card.Body>
        <h6>{song.name}</h6>
        <Button onClick={handleLike} style={{
            color: 'yellow',
            backgroundColor: 'black',
            borderColor: 'yellow',
            fontSize: '12px',
            marginRight: '15px'
          }}>
            <span class="bi bi-hand-thumbs-up-fill"></span> 
          </Button>
          <Button onClick={handlePlaylist} style={{
            color: 'white',
            backgroundColor: 'green',
            borderColor: 'white',
            fontSize: '12px'
          }}><i class="bi bi-music-note-list"></i></Button>
      </Card.Body>
    </Card>
    )
  }
export default ChillHit