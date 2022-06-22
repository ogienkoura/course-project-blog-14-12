import React from 'react'
import './ContactLinks.scss'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Grid } from '@mui/material'

export const ContactLinks = () => {
    return (
        <Grid item md={6}>
            <div className="contact">
                <div className="contact-title">
                    <h2>Leave a message and we will contact you</h2>
                </div>
                <div className="contact-desc">
                    <p>
                        Duis egestas, felis sit amet mattis cursus, ligula justo
                        tempor diam, id pellentesque odio dui eu nisi. Quisque
                        rhoncus leo sed eleifend consequat.
                    </p>
                </div>
                <div className="contact-info">
                    <p>
                        <PhoneIcon />
                        <a href="#/">+61 3 8376 6284</a>
                    </p>
                    <p>
                        <EmailIcon />
                        <a href="#/">noreply@envato.com</a>
                    </p>
                    <p>
                        <LocationOnIcon />
                        <a href="#/">
                            Level 13, 2 Elizabeth, Victoria 3000, Australia
                        </a>
                    </p>
                </div>
            </div>
        </Grid>
    )
}
