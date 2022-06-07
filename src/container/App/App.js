import React from 'react'

import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { Container, CssBaseline } from '@mui/material'
import SimpleSlider from 'components/Slider/Slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <SimpleSlider />
                <Main />
            </Container>
            <Footer />
        </>
    )
}
