import React, { useEffect } from 'react'
import serviceimg from '../../assets/Image/service.jpg'
import onlinebooking from '../../assets/Image/online-booking.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
     useEffect(() => {
            Aos.init({ duration: 2000 });
        }, []);
    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 mb-6">Services</h2>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gris-cols-1 gap-5 md:pt-10 pt-0">
                        {
                            [1, 2, 3].map(() => (
                                <>
                                    <div className="col-span-1 transition-transform duration-300 hover:-translate-y-2" data-aos="zoom-in">
                                        <div className="w-full bg-white rounded-[20px] p-5 ">
                                            <div className='relative'>
                                                <img src={serviceimg} alt='image' className='rounded-[10px]' />
                                                <div className='md:h-[90px] h-[70px] md:w-[90px] w-[70px] bg-black rounded-full absolute bottom-[-38px] right-[12px] flex justify-center items-center'>
                                                    <img src={onlinebooking} className='invert brightness-200 md:h-[60px] h-[40px]' />
                                                </div>
                                            </div>
                                            <h2 className='font-[500] text-[20px] pb-2 pt-3'>
                                                Online Booking
                                            </h2>
                                            <p className='text-gray-600 text-md'>
                                                There are many variations of passages orem psum available but the majority have suffered alteration in some form by injected.
                                            </p>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
