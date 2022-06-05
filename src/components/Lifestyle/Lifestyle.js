import React from 'react'
import { Card, CardContent } from '@mui/material'
import './Lifestyle.scss'
import '../News/NewsItem.scss'

export const LifestyleItem = ({ image, description, date }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="news__item lifestyle">
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
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
