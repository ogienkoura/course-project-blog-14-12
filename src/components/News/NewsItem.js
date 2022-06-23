import React from 'react'
import { Card, CardContent } from '@mui/material'
import './NewsItem.scss'
import { Link } from 'react-router-dom'

export const NewsItem = ({ image, description, date, category, id }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="news__item">
                        <div className="news__item-image">
                            <Link to={`/${category}/${id}`}>
                                <img src={image} alt="" />
                            </Link>
                        </div>
                        <div className="news__item-desc">
                            <Link to={`/${category}/${id}`}>
                                <p>{description}</p>
                            </Link>
                        </div>
                        <div className="news__item-data">
                            <p>{date}</p>
                        </div>

                        <div className="category">
                            <Link to={`/${category}`}>{category}</Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
