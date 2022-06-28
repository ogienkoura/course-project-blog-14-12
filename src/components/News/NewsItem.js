import React from 'react'
import { Card, CardContent } from '@mui/material'
import './NewsItem.scss'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// import { handleClick } from 'components/LikeButton/LikeButton'

export const NewsItem = ({
    image,
    description,
    date,
    category,
    id,
    isLiked = false,
    toggleLikeState,
}) => {
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
                        <div className="news__item-links">
                            <div className="category">
                                <Link to={`/${category}`}>{category}</Link>
                            </div>
                            <div
                                className={
                                    isLiked
                                        ? 'news__item-like liked'
                                        : 'news__item-like '
                                }
                                onClick={() => toggleLikeState(id)}
                            >
                                <FavoriteBorderIcon className="news__item-like-icon" />
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
