import  {React,useState} from 'react'
import AlbumSong from "./AlbumSong"
import { Card } from 'react-bootstrap'
import {  Form, Button } from 'react-bootstrap'

const AlbumSongs = ({songs,album, setReviews}) => {
  const [formData, setFormData] = useState({
    "title": " ",
    "album": album.name
  })
 
  function handleChange(event){
    setFormData({
      ...formData, [event.target.name]: event.target.value
    })
  }

  function handleSubmit(){
    fetch("http://localhost:9292/reviews", {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(
      fetch("http://localhost:9292/reviews")
      .then(res => res.json())
      .then(data => setReviews([...data]))
      )
    

    setFormData(
      {
        "title": " ",
        "album": " "
      }
    );
    alert("THANK YOUR FOR YOUR FEEDBACK!")
  }

  return (
    <div>
      <Card style={{width: '20rem', backgroundColor: 'black', color: 'white'}} className='album-songs'>
      <Card.Body>
        <h3>Songs</h3>
        {songs.map(song => <AlbumSong song = {song} />)}
        <div className='component-container'>
      <h5>Leave a review</h5>
        <Form className='album-form' >
        <Form.Control
            as="textarea"
            placeholder="Leave a review here"
            style={{ height: '70px', width: '100%', marginRight: '10px', fontSize: '18px', 
            border: 'none',
            }}
            name='title'
            onChange={handleChange}
            value={formData.title}
          />
          <Button variant='success' style={{
            height: '30%', marginTop: '20px', width: '30%'
            
          }} onClick={handleSubmit}>Submit</Button>
        </Form>
          
      </div> 
      </Card.Body>
      </Card>
         
     </div>
  )
}

export default AlbumSongs