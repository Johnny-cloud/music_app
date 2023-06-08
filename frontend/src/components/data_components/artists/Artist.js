import React from 'react'
import {Card } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

const Artist = ({artist, setAlbumArtist}) => {
  const navigate = useNavigate()

  function handleCardClick(){
    console.log("Clicked!");
    setAlbumArtist(artist)
    navigate("/artist-albums")
  }
  return (
    <Card style={{width: '18rem'}} className='artist-card' onClick={handleCardClick}>
      <Card.Img variant='top' src={artist.image} />
      <Card.Body>
        <Card.Text>
          <h5>{artist.name}</h5>
        </Card.Text>
      </Card.Body>
    </Card>
    
  )
}

export default Artist
