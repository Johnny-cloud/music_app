import React from 'react'
import { Card } from 'react-bootstrap'

const AlbumHead = ({album}) => {
  return (
      <Card style={{width: '50rem', backgroundColor: 'black', color: 'white'}}>
        <Card.Img variant='top' src={album.image} ></Card.Img>
        <Card.Body></Card.Body>
      </Card>
  )
}

export default AlbumHead
