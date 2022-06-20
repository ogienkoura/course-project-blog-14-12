import { Grid } from '@mui/material'
import { About } from 'components/About/About'
import { Contact } from 'components/Contact/Contact'
import { Find } from 'components/Find/Find'
import { Line } from 'components/Line/Line'
import { TeamItem } from 'components/Team/Team'
import React from 'react'
import team from 'utils/teamArray'
import './AboutUsPage.scss'

export const AboutUsPage = () => {
    return (
        <>
            <main>
                <div className="aboutus-image">
                    <h2>
                        We are BeBlogger <br></br>We love unique content
                    </h2>
                    <img
                        src="images/about-us-header-img.jpg"
                        alt="background"
                    ></img>
                </div>
                <Grid item xs={12} sm={4}>
                    <div className="content__header">
                        <Line />
                        <div className="content__header-title">
                            <h3>About</h3>
                        </div>
                    </div>
                    <About />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <div className="content__header">
                        <Line />
                        <div className="content__header-title">
                            <h3>Meet the team</h3>
                        </div>
                    </div>
                    <Grid container spacing={1} direction="row">
                        {team.map(({ id, image, description, name }) => (
                            <Grid item xs={12} key={id}>
                                <TeamItem
                                    description={description}
                                    name={name}
                                    image={image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
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
            </main>
        </>
    )
}
