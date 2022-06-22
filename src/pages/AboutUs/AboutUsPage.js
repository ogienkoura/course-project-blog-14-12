import { Grid } from '@mui/material'
import { Contact } from 'components/Contact/Contact'
import { Find } from 'components/Find/Find'
import { Line } from 'components/Line/Line'
import { TeamItem } from 'components/Team/Team'
import React from 'react'
import team from 'utils/teamArray'
import './AboutUsPage.scss'

export const AboutUsPage = () => {
    return (
        <>
            <main>
                <div className="aboutus-image">
                    <h2>
                        We are BeBlogger <br></br>We love unique content
                    </h2>
                    <img
                        src="images/about-us-header-img.jpg"
                        alt="background"
                    ></img>
                </div>
                <Grid item xs={12}>
                    <div className="content__header">
                        <Line />
                        <div className="content__header-title">
                            <h3>About</h3>
                        </div>
                    </div>
                    <div className="about__desc">
                        <p className="about__desc-title">
                            Fusce faucibus, sapien ac posuere sodales
                        </p>
                        <p className="about__desc-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eius dignissimos magnam nesciunt, veritatis
                            eos autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum!
                        </p>
                        <p className="about__desc-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eius dignissimos magnam nesciunt, veritatis
                            eos autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum!
                        </p>
                        <p className="about__desc-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eius dignissimos magnam nesciunt, veritatis
                            eos autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum!
                        </p>
                        <p className="about__desc-text">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Eius dignissimos magnam nesciunt, veritatis
                            eos autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Eius dignissimos magnam nesciunt, veritatis eos
                            autem quam distinctio dolores est nostrum!
                        </p>
                        <p className="about__desc-text-second">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellat culpa veniam praesentium iure
                            possimus qui maiores commodi modi cumque temporibus
                            quasi saepe nam, deleniti, excepturi, illum
                            similique! Dolores, esse corrupti.
                        </p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className="content__header">
                        <Line />
                        <div className="content__header-title">
                            <h3>Meet the team</h3>
                        </div>
                    </div>
                    <Grid container spacing={1} direction="row">
                        {team.map(({ id, image, description, name }) => (
                            <Grid item xs={12} key={id}>
                                <TeamItem
                                    description={description}
                                    name={name}
                                    image={image}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
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
            </main>
        </>
    )
}
