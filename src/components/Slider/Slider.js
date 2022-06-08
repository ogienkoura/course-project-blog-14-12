import React, { Component } from 'react'
import Slider from 'react-slick'
import slider from 'utils/sliderArray'
import './Slider.scss'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            fade: true,
            autoplaySpeed: 4000,
        }
        return (
            <div>
                <Slider {...settings}>
                    {slider.map(({ id, image }) => (
                        <div key={id}>
                            <img src={image} alt="slider"></img>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}
