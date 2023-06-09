import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Song = ({song, setPlaylist, setFavorites, playlist, favorites}) => {
    function handleLike(){
      fetch(`http://localhost:9292/favorites`,{
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "name": song.name,
              "image": song.image,
              "artist": song.artist
            })
        })
        .then(res => res.json()) 
        .then(data => console.log(data));

      setFavorites([...favorites, song])
      
      alert("ADDED TO FAVORITES!")
    }
    function handlePlaylist(){
      fetch(`http://localhost:9292/playlist`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "name": song.name,
          "image": song.image,
          "artist": song.artist
        })
  }).then(res => res.json()) 
  .then(data => console.log(data));

      setPlaylist([...playlist, song])
      alert("ADDED TO PLAYLIST!")
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

export default Song