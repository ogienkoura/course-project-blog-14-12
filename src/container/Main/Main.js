import React from 'react'
import './Main.scss'

import { Grid } from '@mui/material'
import { Line } from 'components/Line/Line'
import { NewsItem } from 'components/News/NewsItem'
import { About } from 'components/About/About'
import { TeamItem } from 'components/Team/Team'
import { Contact } from 'components/Contact/Contact'
import { Find } from 'components/Find/Find'
import SimpleSlider from 'components/Slider/Slider'

import articles from 'utils/articlesArray'
import team from 'utils/teamArray'
import { Route, Routes } from 'react-router-dom'
import { NewsPage } from 'pages/News/NewsPage'
import { LifestylePage } from 'pages/Lifestyle/LifeStylePage'
import { PlacesPage } from 'pages/Places/PlacesPage'
import { AboutUsPage } from 'pages/AboutUs/AboutUsPage'
import { ContactPage } from 'pages/Contact/ContactPage'
import { ArticlePage } from 'pages/Article/ArticlePage'

export const Main = () => {
    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <main>
                            <SimpleSlider />
                            <section className="news">
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
                                    {articles
                                        .filter(
                                            (value) =>
                                                value.category === 'news' &&
                                                value.isHome
                                        )
                                        .map(
                                            ({
                                                id,
                                                image,
                                                description,
                                                date,
                                                category,
                                            }) => (
                                                <Grid
                                                    item
                                                    xs={12}
                                                    sm={6}
                                                    md={4}
                                                    key={id}
                                                >
                                                    <NewsItem
                                                        description={
                                                            description
                                                        }
                                                        date={date}
                                                        image={image}
                                                        category={category}
                                                        id={id}
                                                    />
                                                </Grid>
                                            )
                                        )}
                                </Grid>
                            </section>

                            <section className="lifestyle-places">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <div className="content__header">
                                            <Line />
                                            <div className="content__header-title">
                                                <h3>Lifestyle</h3>
                                            </div>
                                        </div>
                                        <Grid
                                            container
                                            spacing={1}
                                            direction="row"
                                        >
                                            {articles
                                                .filter(
                                                    (value) =>
                                                        value.category ===
                                                            'lifestyle' &&
                                                        value.isHome
                                                )
                                                .map(
                                                    ({
                                                        id,
                                                        image,
                                                        description,
                                                        date,
                                                        category,
                                                    }) => (
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            sm={6}
                                                            key={id}
                                                        >
                                                            <NewsItem
                                                                description={
                                                                    description
                                                                }
                                                                date={date}
                                                                image={image}
                                                                category={
                                                                    category
                                                                }
                                                                id={id}
                                                            />
                                                        </Grid>
                                                    )
                                                )}
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <div className="content__header">
                                            <Line />
                                            <div className="content__header-title">
                                                <h3>Places</h3>
                                            </div>
                                        </div>
                                        <Grid
                                            container
                                            spacing={1}
                                            direction="row"
                                        >
                                            {articles
                                                .filter(
                                                    (value) =>
                                                        value.category ===
                                                            'places' &&
                                                        value.isHome
                                                )
                                                .map(
                                                    ({
                                                        id,
                                                        image,
                                                        description,
                                                        date,
                                                        category,
                                                    }) => (
                                                        <Grid
                                                            item
                                                            xs={12}
                                                            sm={6}
                                                            key={id}
                                                        >
                                                            <NewsItem
                                                                description={
                                                                    description
                                                                }
                                                                date={date}
                                                                image={image}
                                                                category={
                                                                    category
                                                                }
                                                                id={id}
                                                            />
                                                        </Grid>
                                                    )
                                                )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </section>

                            <section className="about">
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <div className="content__header">
                                            <Line />
                                            <div className="content__header-title">
                                                <h3>About</h3>
                                            </div>
                                        </div>
                                        <About />
                                    </Grid>
                                    <Grid item xs={12} sm={8}>
                                        <div className="content__header">
                                            <Line />
                                            <div className="content__header-title">
                                                <h3>Meet the team</h3>
                                            </div>
                                        </div>
                                        <Grid
                                            container
                                            spacing={1}
                                            direction="row"
                                        >
                                            {team.map(
                                                ({
                                                    id,
                                                    image,
                                                    description,
                                                    name,
                                                }) => (
                                                    <Grid
                                                        item
                                                        xs={12}
                                                        md={6}
                                                        key={id}
                                                    >
                                                        <TeamItem
                                                            description={
                                                                description
                                                            }
                                                            name={name}
                                                            image={image}
                                                        />
                                                    </Grid>
                                                )
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </section>

                            <section className="contact">
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
                            </section>
                        </main>
                    }
                />

                <Route path="/news" element={<NewsPage />} />
                <Route path="/lifestyle" element={<LifestylePage />} />
                <Route path="/places" element={<PlacesPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/news/:id" element={<ArticlePage />} />
                <Route path="/lifestyle/:id" element={<ArticlePage />} />
                <Route path="/places/:id" element={<ArticlePage />} />
            </Routes>
        </>
    )
}
