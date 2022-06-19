import React from 'react'
import { Card, CardContent } from '@mui/material'
import './NewsItem.scss'
import { Link } from 'react-router-dom'
import articles from 'utils/articlesArray'

export const NewsItem = ({ image, description, date, category }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="news__item">
                        <div className="news__item-image">
                            <a href="#/">
                                <img src={image} alt="" />
                            </a>
                        </div>
                        <div className="news__item-desc">
                            <a href="#/">
                                <p>{description}</p>
                            </a>
                        </div>
                        <div className="news__item-data">
                            <p>{date}</p>
                        </div>

                        <div className="category">
                            {articles.map((article, id) => (
                                <Link key={id} to={article.category}>
                                    {article.category}
                                </Link>
                            ))}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
