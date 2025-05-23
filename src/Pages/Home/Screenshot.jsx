import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import screenshot1 from '../../assets/Image/Onboarding screen - 1.png';
import screenshot2 from '../../assets/Image/Onboarding screen - 2.png';
import screenshot3 from '../../assets/Image/Onboarding screen - 3.png';
import screenshot4 from '../../assets/Image/Enable your Location.png';
import screenshot5 from '../../assets/Image/Create an account.png';
import screenshot6 from '../../assets/Image/Log In.png';
import screenshot7 from '../../assets/Image/OTP Verification.png';
import screenshot8 from '../../assets/Image/Homescreen.png';
import screenshot9 from '../../assets/Image/City packages - Choose a ride.png';
import screenshot10 from '../../assets/Image/Book taxi.png';
import screenshot11 from '../../assets/Image/Book Taxi - Choose a ride.png';
import screenshot12 from '../../assets/Image/Homescreen.png';
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
                                <div className="bg-white rounded-[22px] overflow-hidden shadow">
                                    <img src={image} alt={`screenshot-${index + 1}`} className="w-full h-auto" />
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
