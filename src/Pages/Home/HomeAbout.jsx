import React, { useEffect } from 'react'
import aboutus from '../../assets/Image/about.jpg'
import { useLocation, useNavigate } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

const HomeAbout = () => {
    const navigate = useNavigate();
    const location = useLocation()

    const homepath = location.pathname === '/';
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-50'>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                        <div className='lg:order-1 order-2' data-aos="flip-up">
                            <img
                                src={aboutus}
                                alt="Ride Booking Service"
                                className="rounded-2xl shadow-lg w-full lg:h-[450px]  h-[300px] object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <div className="lg:order-2 order-1">

                            {/* Section Title */}
                            <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 md:mb-6 mb-4 tracking-tight">
                                About Us
                            </h2>

                            <div className="border-l-4 border-gray-900 pl-6 space-y-5">

                                {/* Paragraph 1 */}
                                <p className="text-gray-700 md:text-lg text-sm leading-relaxed text-justify">
                                    We at <strong className="text-gray-900">VERDE </strong> are redefining everyday urban travel with{" "}
                                    <strong className="text-gray-900">efficient, reliable, and eco-friendly ride-hailing.</strong>{" "}
                                    Built for modern cities, VERDE blends smart technology with greener mobility to deliver rides you can trust —
                                    at prices that make sense.
                                </p>

                                {/* Paragraph 2 */}
                                <p className="text-gray-700 md:text-lg text-sm leading-relaxed text-justify">
                                    Whether you’re commuting to work, heading to college, moving across the city, or planning a tour,{" "}
                                    <strong className="text-gray-900"> VERDE</strong> makes every ride{" "}
                                    <strong className="text-gray-900">simple, affordable, and responsible.</strong>
                                </p>

                                {/* Paragraph 3 */}
                                <p className="text-gray-700 md:text-lg text-sm leading-relaxed text-justify">
                                    Our mission is to build a{" "}
                                    <strong className="text-gray-900">Hybrid Ride-Hailing Platform</strong> that combines{" "}
                                    <strong className="text-gray-900">EVs, CNG vehicles, and bikes</strong> to deliver affordable,
                                    reliable, and eco-conscious rides — benefiting riders, drivers, and cities by making transportation
                                    cleaner, smarter, and more efficient.
                                </p>

                                {/* Tagline */}
                                <p className="mt-4 font-semibold md:text-lg text-sm text-gray-900 tracking-wide">
                                    Ride smart. Ride safe. Ride with <span className="text-black">VERDE.</span>
                                </p>

                            </div>

                            {homepath && (
                                <button
                                    className="cursor-pointer mt-8 inline-flex items-center md:px-8 px-6 md:text-lg text-sm md:py-3 py-2 
                 rounded-full bg-black text-white font-medium 
                 hover:bg-gray-900 hover:scale-105 transition-all duration-300"
                                    onClick={() => navigate("/about-us")}
                                >
                                    Learn More
                                </button>
                            )}

                        </div>


                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeAbout