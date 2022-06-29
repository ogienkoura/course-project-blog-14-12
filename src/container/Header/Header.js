import React from 'react'
import { Menu } from 'components/Menu/Menu'
import { Box, Container, Grid } from '@mui/material'
import { Logo } from 'components/Logo/Logo'
import './Header.scss'

export const Header = () => {
    return (
        <>
            <header className="header">
                <Container>
                    <Box sx={{ display: 'flex' }}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={4} alignSelf="center">
                                <Logo />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Menu />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </header>
        </>
    )
}
