import React from 'react'
import { Button } from 'react-bootstrap'

const Review = ({review, reviews, setReviews}) => {

  function handleDelete(){
    fetch(`http://localhost:9292/reviews/${review.id}`,{
      method: 'DELETE'
    })
    let filtered = reviews.filter(rev => rev !== review)
    setReviews(filtered)
  }

  return (

    <tr style={{fontSize: '18px'}}>
      <td>{review.title}</td>
      <td>{review.album}</td>
      <td>
        <Button variant='danger' onClick={handleDelete}><i class="bi bi-trash"></i></Button>
      </td>
    </tr>  

  )
}

export default Review