import React from 'react'
import './Main.scss'

import { Grid } from '@mui/material'
import { Line } from 'components/Line/Line'
import { NewsItem } from 'components/News/NewsItem'
import { LifestyleItem } from 'components/Lifestyle/Lifestyle'
import { PlacesItem } from 'components/Places/Places'
import { About } from 'components/About/About'
import { TeamItem } from 'components/Team/Team'
import { Contact } from 'components/Contact/Contact'
import { Find } from 'components/Find/Find'

import news from 'utils/newsArray'
import lifestyle from 'utils/lifestyleArray'
import places from 'utils/placesArray'
import team from 'utils/teamArray'

export const Main = () => {
    return (
        <>
            <main>
                <section className="news">
                    <div className="content__header">
                        <Line />
                        <div className="content__header-title">
                            <h3>News</h3>
                        </div>
                    </div>

                    <Grid
                        container
                        spacing={2}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        {news.map(({ id, image, description, date }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <NewsItem
                                    description={description}
                                    date={date}
                                    image={image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </section>

                <section className="lifestyle-places">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div className="content__header">
                                <Line />
                                <div className="content__header-title">
                                    <h3>Lifestyle</h3>
                                </div>
                            </div>
                            <Grid container spacing={1} direction="row">
                                {lifestyle.map(
                                    ({ id, image, description, date }) => (
                                        <Grid item xs={12} sm={6} key={id}>
                                            <LifestyleItem
                                                description={description}
                                                date={date}
                                                image={image}
                                            />
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className="content__header">
                                <Line />
                                <div className="content__header-title">
                                    <h3>Places</h3>
                                </div>
                            </div>
                            <Grid container spacing={1} direction="row">
                                {places.map(
                                    ({ id, image, description, date }) => (
                                        <Grid item xs={12} sm={6} key={id}>
                                            <PlacesItem
                                                description={description}
                                                date={date}
                                                image={image}
                                            />
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </section>

                <section className="about">
                    <Grid container spacing={2}>
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
                                {team.map(
                                    ({ id, image, description, name }) => (
                                        <Grid item xs={12} md={6} key={id}>
                                            <TeamItem
                                                description={description}
                                                name={name}
                                                image={image}
                                            />
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Grid>
                    </Grid>
                </section>

                <section className="contact">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <div className="content__header">
                                <Line />
                                <div className="content__header-title">
                                    <h3>Contact us</h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Contact />
                        </Grid>
                        <Grid
                            container
                            item
                            xs={12}
                            sm={6}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Find />
                        </Grid>
                    </Grid>
                </section>
            </main>
        </>
    )
}
