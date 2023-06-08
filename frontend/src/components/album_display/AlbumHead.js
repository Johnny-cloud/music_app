import React from 'react'
import { Card } from 'react-bootstrap'

const AlbumHead = ({album}) => {
  return (
      <Card style={{width: '50rem', backgroundColor: 'black', color: 'white'}}>
        <Card.Body>
        </Card.Body>
        <Card.Img variant='bottom' src={album.image} ></Card.Img>
      </Card>
  )
}

export default AlbumHead
