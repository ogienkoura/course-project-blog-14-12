import { Grid } from '@mui/material'
import React from 'react'
import { Contact } from 'components/Contact/Contact'
import articles from 'utils/articlesArray'
import { NewsItem } from 'components/News/NewsItem'
import { Line } from 'components/Line/Line'
import { Find } from 'components/Find/Find'

export const LifestylePage = () => {
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
            marginTop={'5px'}
        >
            {articles
                .filter((value) => value.category === 'lifestyle')
                .map(({ id, image, description, date, category }) => (
                    <Grid item xs={12} sm={6} key={id}>
                        <NewsItem
                            description={description}
                            date={date}
                            image={image}
                            category={category}
                            id={id}
                        />
                    </Grid>
                ))}
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
