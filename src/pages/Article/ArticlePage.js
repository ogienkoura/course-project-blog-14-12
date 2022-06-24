import { Grid } from '@mui/material'
import { Contact } from 'components/Contact/Contact'
import { Find } from 'components/Find/Find'
import { Line } from 'components/Line/Line'
import React from 'react'
import { useParams } from 'react-router-dom'
import articles from 'utils/articlesArray'
import './ArticlePage.scss'

function getArticle(id) {
    return articles.find((article) => article.id === id)
}

export const ArticlePage = () => {
    let params = useParams()
    let article = getArticle(parseInt(params.id))
    return (
        <div class="article">
            <div
                dangerouslySetInnerHTML={{ __html: article.fullDescription }}
            ></div>
            {/* <h1 class="article-title">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Doloremque, commodi.
            </h1>
            <div class="parts one">
                <div class="article-video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/DW_8RK-pU_A"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
                <p class="article-title-desc">
                    Reynolds has worked on projects with The Berrics since the
                    very beginning, and his history with our founders—Steve
                    Berra and Eric Koston—goes back decades. Among his dozens of
                    videos are top-tier entries in our Battle At The Berrics,
                    Run and Gun, and Battle Commander series, but our five-part
                    docuseries 'Life On Video' gives you a deeper look into what
                    makes this legend tick.
                </p>
            </div>

            <div class="article-text">
                <p>
                    Andrew Reynolds was given the nickname 'The Boss' years ago,
                    reflecting his propensity to take care of business (and
                    presumably not the result of a Bruce Springsteen obsession).
                    Longtime filmer Beagle aka Ryan Ewing (who earned his
                    nickname because he bears a striking resemblance to Josh
                    Beagle, not a dog) put together a re-edit of Reynolds's most
                    Baker-y moments titled 'Capital B In The Boss'—a classic
                    Terry Kennedy-ism—which further establishes him as a proper
                    name in the bossing community. This may be the Andrew
                    Reynolds Baker edit to end all Andrew Reynolds Baker edits…
                    Watch it, above! Andrew Reynolds was given the nickname 'The
                    Boss' years ago, reflecting his propensity to take care of
                    business (and presumably not the result of a Bruce
                    Springsteen obsession). Longtime filmer Beagle aka Ryan
                    Ewing (who earned his nickname because he bears a striking
                    resemblance to Josh Beagle, not a dog) put together a
                    re-edit of Reynolds's most Baker-y moments titled 'Capital B
                    In The Boss'—a classic Terry Kennedy-ism—which further
                    establishes him as a proper name in the bossing community.
                    This may be the Andrew Reynolds Baker edit to end all Andrew
                    Reynolds Baker edits… Watch it, above!
                </p>
            </div>

            <div class="parts two">
                <div class="article-quote">
                    <h2>''Beagle Releases 'Capital B In The Boss''</h2>
                </div>

                <div class="article-image">
                    <img src={`/${article.image}`} alt=""></img>
                </div>
            </div>

            <div class="article-text">
                <p>
                    Andrew Reynolds was given the nickname 'The Boss' years ago,
                    reflecting his propensity to take care of business (and
                    presumably not the result of a Bruce Springsteen obsession).
                    Longtime filmer Beagle aka Ryan Ewing (who earned his
                    nickname because he bears a striking resemblance to Josh
                    Beagle, not a dog) put together a re-edit of Reynolds's most
                    Baker-y moments titled 'Capital B In The Boss'—a classic
                    Terry Kennedy-ism—which further establishes him as a proper
                    name in the bossing community. This may be the Andrew
                    Reynolds Baker edit to end all Andrew Reynolds Baker edits…
                    Watch it, above! Andrew Reynolds was given the nickname 'The
                    Boss' years ago, reflecting his propensity to take care of
                    business (and presumably not the result of a Bruce
                    Springsteen obsession). Longtime filmer Beagle aka Ryan
                    Ewing (who earned his nickname because he bears a striking
                    resemblance to Josh Beagle, not a dog) put together a
                    re-edit of Reynolds's most Baker-y moments titled 'Capital B
                    In The Boss'—a classic Terry Kennedy-ism—which further
                    establishes him as a proper name in the bossing community.
                    This may be the Andrew Reynolds Baker edit to end all Andrew
                    Reynolds Baker edits… Watch it, above!
                </p>
            </div> */}

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
        </div>
    )
}
