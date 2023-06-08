import React from 'react'
import Review from './Review'

const Reviews = ({reviews, setReviews}) => {
  return (
    <div className='component-container'>
        <h3>Your Reviews</h3>
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Album</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {reviews.map(review => <Review review={review} reviews={reviews} setReviews={setReviews}/>)}    
            </tbody>
        </table>
    </div>
  )
}

export default Reviews