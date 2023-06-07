import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Top10 = ({top10, setPlaylist, setFavorites, playlist, favorites}) => {
  function handleLike(){
    setFavorites([...favorites, top10])
    alert("Added to favorites!")
  }
  function handlePlaylist(){
    setPlaylist([...playlist, top10])
    alert("Added to playlist!")
  }

  return (
    <Card style={{width: '18rem'}} className='top10-card'>
      <Card.Img variant='top' src={top10.image}/>
      <Card.Body>
        <h6>{top10.name}</h6>
        <Button onClick={handleLike} style={{
          color: 'yellow',
          backgroundColor: 'black',
          borderColor: 'yellow',
          fontSize: '15px',
          marginRight: '12px'
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

export default Top10