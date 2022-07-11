import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import './FavouritesArticle.scss'

export const FavouritesArticle = ({
    article,
    toggleLikeState,
    articlesLikeState,
    isLiked = false,
    removeArticleFromFavourites,
}) => {
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Card>
                    <CardContent>
                        <div className="news__item">
                            <div className="news__item-image">
                                <Link to={`/${article.category}/${article.id}`}>
                                    <img src={article.image} alt="" />
                                </Link>
                            </div>
                            <div className="news__item-desc">
                                <Link to={`/${article.category}/${article.id}`}>
                                    <p>{article.description}</p>
                                </Link>
                            </div>
                            <div className="news__item-data">
                                <p>{article.date}</p>
                            </div>
                            <div className="news__item-links">
                                <div className="category">
                                    <Link to={`/${article.category}`}>
                                        {article.category}
                                    </Link>
                                </div>
                                <div className="news__item-buttons">
                                    <div
                                        className={
                                            isLiked
                                                ? 'news__item-like liked'
                                                : 'news__item-like '
                                        }
                                        onClick={() => {
                                            toggleLikeState(article.id)
                                        }}
                                    >
                                        <FavoriteBorderIcon className="news__item-like-icon" />
                                    </div>
                                    <button
                                        className="news__item-buttons-delete-btn"
                                        onClick={() =>
                                            removeArticleFromFavourites(
                                                article.id
                                            )
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        </>
    )
}
