import { Card, CardContent } from '@mui/material'
import React from 'react'
import './Team.scss'

export const TeamItem = ({ image, description, name }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div class="team__person">
                        <img class="team__person-photo" src={image} alt="" />
                        <div class="team__person-info">
                            <p class="team__person-name">{name}</p>
                            <p class="team__person-desc">{description}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
