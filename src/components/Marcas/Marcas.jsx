import React, { Component } from "react";
import Slider from "react-slick";

const data = [
    {
        imgSrc: "/images/ferrum.jpg"
    },
    {
        imgSrc: "/images/oblak.jpg"
    },
    {
        imgSrc: "/images/sl.jpg"
    },
    {
        imgSrc: "/images/weber.png"
    },

];

export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <h1>PROVEEDORES</h1>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <img src={item.imgSrc} alt={item.imgSrc} />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}
