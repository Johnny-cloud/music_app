import React from 'react'
import { Card, Button } from 'react-bootstrap'

const FavoriteSong = ({song, favorites, setFavorites}) => {
    function handleRemove(){
        
        fetch(`http://localhost:9292/favorites/${song.id}`,{
          method: 'DELETE'
        })  
      let filtered_songs = favorites.filter(fav => fav !== song)
      setFavorites(filtered_songs)
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

export default FavoriteSong
