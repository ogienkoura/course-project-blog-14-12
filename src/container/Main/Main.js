import React from 'react'
import { Line } from 'components/Line/Line'
import './Main.scss'
import { NewsItem } from 'components/News/NewsItem'
import { Grid } from '@mui/material'
import news from 'utils/newsArray'

export const Main = () => {
    return (
        <>
            <main>
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
                    {news.map((article) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <NewsItem description="fgsddsg" date="33513" />
                        </Grid>
                    ))}
                </Grid>
            </main>
        </>
    )
}
