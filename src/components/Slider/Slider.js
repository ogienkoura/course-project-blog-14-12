import React, { Component } from 'react'
import Slider from 'react-slick'
import slider from 'utils/sliderArray'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            fade: true,
            autoplaySpeed: 6000,
        }
        return (
            <div>
                <Slider {...settings}>
                    {slider.map(({ id, image }) => (
                        <div key={id}>
                            <img src={image}></img>
                        </div>
                    ))}
                </Slider>
            </div>
        )
    }
}
