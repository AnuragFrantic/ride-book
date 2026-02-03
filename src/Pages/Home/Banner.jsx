import React from "react";

import bannerright from "../../assets/Image/bannerimg.jpg";
import apple from "../../assets/Image/apple.png";
import playstore from "../../assets/Image/playstore.png";

const Banner = () => {
    return (
        <section className="bg-black px-4 sm:px-10 lg:px-[10rem] xl:px-[15rem] min-h-screen flex items-center banner2">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">

                    {/* LEFT */}
                    <div className="col-span-1 leftcol">

                        <h1 className="text-white text-2xl sm:text-3xl md:text-[42px] lg:text-[56px] font-extrabold leading-tight mb-6 tracking-tight">
                            Reliable Rides,{" "}
                            <span className="bg-gradient-to-r cyan bg-clip-text text-transparent">
                                Responsible Future
                            </span>
                        </h1>

                        {/* TAGLINE */}
                        <p className="text-[18px] sm:text-[20px] md:text-[22px] font-medium tracking-wide bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent max-w-md">
                            Your Ride Just a Tap Away
                        </p>

                        <div className="flex gap-5 mt-10 flex-wrap">
                            <img
                                src={apple}
                                alt="apple store"
                                className="h-[45px] md:h-[55px] lg:h-[60px] cursor-pointer hover:scale-105 transition-transform duration-300"
                            />

                            <img
                                src={playstore}
                                alt="play store"
                                className="h-[45px] md:h-[55px] lg:h-[60px] cursor-pointer hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="col-span-1 rightcol">
                        <div className="collast">
                            <img
                                src={bannerright}
                                alt="banner"
                                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;
