import React from 'react'

const Termscondition = () => {
    return (
        <>
            <section className='innerbanner flex items-center justify-center relative sm:h-[300px] h-[200px] bg-cover bg-center '>
                <div className="absolute inset-0 bg-[#00000075] bg-opacity-50 z-0"></div>
                <div className="container mx-auto z-10 text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white">Terms & Conditions</h2>
                </div>
            </section>
            <section className='lg:px-20 px-5'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 py-10">
                            <div className="w-full">
                                <p className='text-gray-600 md:text-lg text-sm mb-4 text-justify'>
                                    By using our ride-booking platform, you agree to comply with and be bound by these Terms and Conditions. You acknowledge that you have read, understood, and accepted all the policies outlined here. If you do not agree to any part of these terms, please do not use our services.
                                </p>

                                <p className='text-gray-600 md:text-lg text-sm mb-4 text-justify'>
                                   Our platform allows you to book rides such as autos, cabs, and bikes for personal use only. All bookings are subject to availability and confirmation. We strive to provide timely and reliable service but do not guarantee ride availability at all times. You are responsible for providing accurate information during booking and must follow all local laws and regulations when using the service.
                                </p>
                                <p className='text-gray-600 md:text-lg text-sm mb-4 text-justify'>
                                   Payments for rides can be made via the accepted payment methods on our platform. All fares are subject to change without prior notice based on distance, time, and demand. Cancellation policies and fees apply as detailed in our cancellation guidelines. Any disputes regarding payments or services should be reported to our customer support team promptly for resolution.
                                </p>
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Termscondition
