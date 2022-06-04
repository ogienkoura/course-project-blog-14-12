import React from 'react'
import { Line } from 'components/Line/Line'
import './Main.scss'
import { NewsItem } from 'components/News/NewsItem'
import { Grid } from '@mui/material'
import news from 'utils/newsArray'
import lifestyle from 'utils/lifestyleArray'
import { LifestyleItem } from 'components/Lifestyle/Lifestyle'

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
                    <Grid
                        container
                        spacing={2}
                        // justifyContent="center"
                        // alignItems="center"
                    >
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
                        </Grid>
                    </Grid>
                </section>
            </main>
        </>
    )
}
