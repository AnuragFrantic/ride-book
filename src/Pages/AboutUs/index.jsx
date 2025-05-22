import React from 'react'
import aboutus from '../../assets/Image/aboutus.jpg'
const AboutUs = () => {
    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-50'>
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
                        <div className='lg:order-1 order-2'>
                            <img
                                src={aboutus}
                                alt="Ride Booking Service"
                                className="rounded-2xl shadow-lg w-full lg:h-[450px]  h-[300px] object-cover transition-transform duration-500 hover:scale-105 "
                            />
                        </div>

                        <div className='lg:order-2 order-1'>
                            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-6">About Us</h2>
                            <div className='border-l-4 border-gray-800 pl-5'>
                                <p className="text-gray-600 md:text-lg text-sm mb-4 text-justify">
                                    At <strong>YourAppName</strong>, we simplify your daily commute with reliable and affordable ride options. Whether you need a quick auto for a nearby errand, a two-wheeler for zipping through traffic, or a comfortable cab for longer rides—we’ve got you covered.
                                </p>
                                <p className="text-gray-600 md:text-lg text-sm text-justify">
                                    Our mission is to provide seamless ride booking experiences across all devices, ensuring safety, speed, and satisfaction for every passenger. Trusted drivers, real-time tracking, and transparent pricing make us your perfect travel partner.
                                </p>
                                <p className="mt-4 text-gray-700 font-medium">Ride smart. Ride safe. Ride with YourAppName.</p>
                            </div>
                          
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
