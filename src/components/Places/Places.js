import { Card, CardContent } from '@mui/material'
import React from 'react'
import '../News/NewsItem.scss'

export const PlacesItem = ({ image, description, date }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div class="news__item places">
                        <div class="news__item-image">
                            <a href="">
                                <img src={image} alt="" />
                            </a>
                        </div>
                        <div class="news__item-desc">
                            <a href="">
                                <p>{description}</p>
                            </a>
                        </div>
                        <div class="news__item-data">
                            <p>{date}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
