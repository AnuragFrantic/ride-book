import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import screenshot1 from '../../assets/Image/Onboarding screen - 1.png';
import screenshot2 from '../../assets/Image/Onboarding screen - 2.png';
import screenshot3 from '../../assets/Image/Onboarding screen - 3.png';
import screenshot4 from '../../assets/Image/Log In.png';
import screenshot5 from '../../assets/Image/OTP Verification.png';
import screenshot6 from '../../assets/Image/Create an account.png';
import screenshot7 from '../../assets/Image/Enable your Location.png';
import screenshot8 from '../../assets/Image/My Rides - Completed.png';
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
        screenshot5, screenshot6, screenshot7, screenshot8
    ];

    return (
        <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
            <div className="container mx-auto">
                <div className="grid grid-cols-1">
                    <div className="col-span-1 text-center">
                        <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
                    </div>
                </div>
                <div className="my-6">
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <div key={index} className="px-3">
                                <div className="bg-white rounded-[22px] overflow-hidden shadow">
                                    <img src={image} alt={`screenshot-${index + 1}`} className="w-full h-[595px]" />
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
