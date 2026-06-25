import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import screenshot1 from '../../assets/Image/2.jpg';
import screenshot2 from '../../assets/Image/3.jpg';
import screenshot3 from '../../assets/Image/4.jpg';
import screenshot4 from '../../assets/Image/6.jpg';
import screenshot5 from '../../assets/Image/7.jpg';
import screenshot6 from '../../assets/Image/8.jpg';
import screenshot7 from '../../assets/Image/9.jpg';
import screenshot8 from '../../assets/Image/10.jpg';
import screenshot9 from '../../assets/Image/11.jpg';
import screenshot10 from '../../assets/Image/12.jpg';
import screenshot11 from '../../assets/Image/13.jpg';
import screenshot12 from '../../assets/Image/14.jpg';


import Slider from 'react-slick';

const Screenshot = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const images = [
        screenshot1, screenshot2, screenshot3, screenshot4,
        screenshot5, screenshot6, screenshot7, screenshot8,
        screenshot9, screenshot10, screenshot11, screenshot12
    ];

    return (
        <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="col-span-1 text-center">
                        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">How It Works</h2>
                    </div>
                </div>
                <div className="md:my-6 my-3">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-white rounded-[22px] overflow-hidden shadow ">
                                    <img
                                        src={image}
                                        alt={`screenshot-${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Screenshot;
