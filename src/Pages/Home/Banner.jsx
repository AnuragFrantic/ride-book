import React from 'react'
import bannerright from '../../assets/Image/bannerright.webp'
import apple from '../../assets/Image/apple.png'
import playstore from '../../assets/Image/playstore.png'

const Banner = () => {
    return (
        <>
            {/* <section className=" " >
                <div className='relative md:h-[700px] h-[500px] flex items-center justify-center bg-cover bg-center banner'>
                    <div className="absolute inset-0 bg-[#160909a6] bg-opacity-60"></div>
                    <div className="relative z-10 text-center px-4 md:px-0">
                        <div className="max-w-3xl mx-auto">
                            <h1 className="text-white text-3xl md:text-6xl font-bold leading-tight mb-6">
                                Your Ride, Just a Click Away!
                            </h1>
                            <p className="text-white sm:text-lg text-md md:text-xl font-light mb-8">
                                Instantly book autos, cabs, and bikes anytime, anywhere. Enjoy a fast, safe, and reliable ride with our seamless booking platform — built for urban travelers like you.
                            </p>
                            <div className="flex justify-center gap-4 flex-wrap">
                                <button className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-blacktransition-all duration-300 shadow-lg">
                                    Book a Ride Now
                                </button>
                                <button className="border border-white text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-lg">
                                    View Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section> */}
            <section className="bg-black px-4 sm:px-10 lg:px-[10rem] xl:px-[15rem] min-h-screen flex items-center banner2">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
                        <div className="col-span-1 leftcol">
                            <h1 className="text-white text-2xl sm:text-3xl md:text-[40px] lg:text-[52px] font-bold leading-tight mb-6">
                                Your Ride, Just a Click Away!
                            </h1>
                            <p className="text-white text-sm sm:text-base md:text-[16px] leading-[22px] sm:leading-[24px]">
                                Instantly book autos, cabs, and bikes anytime, anywhere. Enjoy a fast, safe, and reliable ride with our seamless booking platform — built for urban travelers like you.
                            </p>
                            <div className="flex gap-5 mt-10 flex-wrap">
                                <img src={apple} alt="apple store" className="h-[45px] md:h-[55px] lg:h-[60px]" />
                                <img src={playstore} alt="play store" className="h-[45px] md:h-[55px] lg:h-[60px]" />
                            </div>
                        </div>
                        <div className="col-span-1 rightcol">
                            <div className="collast">
                                <img src={bannerright} alt="banner" className="w-full h-auto object-contain" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default Banner
