import { Grid } from '@mui/material'
import { Contact } from 'components/Contact/Contact'
import { Find } from 'components/Find/Find'
import { Line } from 'components/Line/Line'
import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactLinks } from './ContactLinks'
import './ContactPage.scss'

export const ContactPage = () => {
    return (
        <Grid container spacing={1} direction="row">
            <ContactLinks />
            <ContactForm />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <div className="content__header">
                        <Line />
                        <div className="content__header-title">
                            <h3>Contact us</h3>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Contact />
                </Grid>
                <Grid
                    container
                    item
                    xs={12}
                    md={6}
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Find />
                </Grid>
            </Grid>
        </Grid>
    )
}
