import { Grid } from '@mui/material'
import React from 'react'
// import { useParams } from 'react-router-dom'
import articles from 'utils/articlesArray'
import { NewsItem } from 'components/News/NewsItem'

export const LifestylePage = () => {
    // const { category } = useParams()
    // console.log(useParams())
    return (
        <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            {articles
                .filter(function (value) {
                    if (value.category === 'Lifestyle') {
                        return value.category === 'Lifestyle'
                    } else {
                        return false
                    }
                })
                .map(({ id, image, description, date, category }) => (
                    <Grid item xs={12} sm={6} md={4} key={id}>
                        <NewsItem
                            description={description}
                            date={date}
                            image={image}
                            category={category}
                        />
                    </Grid>
                ))}
        </Grid>
    )
}
