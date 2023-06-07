import React from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Album = ({album, setAlbumDisplay}) => {
  const navigate = useNavigate()
  function handleClick(){
    // display album songs
    setAlbumDisplay(album)
    navigate("/albumdisplay")
  }
  return (
    <Card style={{width: '18rem'}} className='album-card' onClick={handleClick}>
      <Card.Img variant='top' src={album.image}/>
      <Card.Body>
        <h3>{album.name}</h3>
      </Card.Body>
    </Card>
    
  )
}

export default Album