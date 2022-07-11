import { keys } from 'lodash'
import React from 'react'
import articles, { getArticlesObject } from 'utils/articlesArray'
import { FavouritesArticle } from './FavouritesArticle'

export const FavouritesList = ({
    toggleLikeState,
    articlesLikeState,
    articlesObject = getArticlesObject(articles),
    FavouritesItem = FavouritesArticle,
    removeArticleFromFavourites,
}) => {
    return (
        <>
            {keys(articlesLikeState).map((articleId) => (
                <FavouritesItem
                    key={articleId}
                    article={articlesObject[articleId]}
                    toggleLikeState={toggleLikeState}
                    isLiked={articlesLikeState[articleId]}
                    removeArticleFromFavourites={removeArticleFromFavourites}
                    articlesCount={articlesLikeState[articleId]}
                />
            ))}
        </>
    )
}
