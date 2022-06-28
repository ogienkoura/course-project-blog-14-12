import React, { useState } from 'react'

import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { Container, CssBaseline } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const App = () => {
    const [articlesLikeState, setArticlesLikeState] = useState({})

    const toggleLikeState = (articleId) => {
        setArticlesLikeState((prevState) => ({
            ...prevState,
            [articleId]: !prevState[articleId],
        }))
    }
    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <Main
                    toggleLikeState={toggleLikeState}
                    articlesLikeState={articlesLikeState}
                />
            </Container>
            <Footer />
        </>
    )
}
