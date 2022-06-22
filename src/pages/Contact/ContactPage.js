import { Grid } from '@mui/material'
import React from 'react'
import { ContactForm } from './ContactForm'
import './ContactPage.scss'

export const ContactPage = () => {
    return (
        <Grid container spacing={1} direction="row">
            <ContactForm />
        </Grid>
    )
}
