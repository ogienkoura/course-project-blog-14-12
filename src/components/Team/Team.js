import { Card, CardContent } from '@mui/material'
import React from 'react'
import './Team.scss'

export const TeamItem = ({ image, description, name }) => {
    return (
        <>
            <Card>
                <CardContent>
                    <div className="team__person">
                        <img
                            className="team__person-photo"
                            src={image}
                            alt=""
                        />
                        <div className="team__person-info">
                            <p className="team__person-name">{name}</p>
                            <p className="team__person-desc">{description}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
