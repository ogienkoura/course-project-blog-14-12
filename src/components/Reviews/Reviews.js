import { Card, TextField } from '@mui/material'
import { Line } from 'components/Line/Line'
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { ReviewsArray } from 'utils/ReviewsArray'
import './Reviews.scss'

export const Reviews = () => {
    const [reviews, setReviews] = useState(ReviewsArray)

    const [newReview, setNewReview] = useState({
        name: '',
        text: '',
    })

    const handleName = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))

    const handleText = (e) =>
        setNewReview((prevState) => ({
            ...prevState,
            text: e.target.value,
        }))

    const reviewSend = (e) => {
        e.preventDefault()
        setNewReview({
            name: '',
            text: '',
        })
        setReviews((value) => {
            return [...value, newReview]
        })
    }

    return (
        <div className="reviews-block">
            <Line />
            <h2>Reviews</h2>
            {reviews.map(({ name, text }, i) => (
                <Card className="reviews-block-item" key={i}>
                    <div>
                        Name: <strong>{name}</strong>
                    </div>
                    <div>Message: {text}</div>
                </Card>
            ))}
            <h3>Please leave your comment</h3>
            <form>
                <div>
                    <TextField
                        size="small"
                        label="Name"
                        margin="normal"
                        value={newReview.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <TextField
                        size="small"
                        label="Text"
                        margin="normal"
                        value={newReview.text}
                        onChange={handleText}
                    />
                </div>
                <br />
                <Button onClick={reviewSend}>Leave comment</Button>
            </form>
        </div>
    )
}
