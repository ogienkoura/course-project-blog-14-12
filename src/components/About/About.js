import React from 'react'
import { Link } from 'react-router-dom'
import './About.scss'

export const About = () => {
    return (
        <div className="about__desc">
            <p className="about__desc-title">
                Fusce faucibus, sapien ac posuere sodales
            </p>
            <p className="about__desc-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                dignissimos magnam nesciunt, veritatis eos autem quam distinctio
                dolores est nostrum!
            </p>
            <p className="about__desc-text-second">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat culpa veniam praesentium iure possimus qui maiores
                commodi modi cumque temporibus quasi saepe nam, deleniti,
                excepturi, illum similique! Dolores, esse corrupti.
            </p>
            <Link to="/about-us">
                <button className="btn">Read more</button>
            </Link>
        </div>
    )
}
