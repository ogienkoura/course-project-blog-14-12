import { Grid } from '@mui/material'
import { FavouritesArticle } from 'components/FavouritesList/FavouritesArticle'
import { FavouritesList } from 'components/FavouritesList/FavouritesList'
import React from 'react'
import './FavouritesPage.scss'

export const FavouritesPage = ({
    articlesLikeState,
    toggleLikeState,
    removeArticleFromFavourites,
}) => {
    return (
        <>
            <div className="favourites">
                <Grid container spacing={2}>
                    <FavouritesList
                        articlesLikeState={articlesLikeState}
                        FavouritesArticle={FavouritesArticle}
                        toggleLikeState={toggleLikeState}
                        removeArticleFromFavourites={
                            removeArticleFromFavourites
                        }
                    />
                </Grid>
            </div>
        </>
    )
}
