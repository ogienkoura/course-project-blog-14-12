import React from 'react'

import { Header } from 'container/Header/Header'
import { Main } from 'container/Main/Main'
import { Footer } from 'container/Footer/Footer'
import { Container, CssBaseline } from '@mui/material'

export const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Container>
                <Main />
                <Footer />
            </Container>
        </>
    )
}
