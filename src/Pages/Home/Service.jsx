import React, { useEffect } from 'react'
// import serviceimg from '../../assets/Image/service.jpg'
// import onlinebooking from '../../assets/Image/online-booking.png'
import dayuse from '../../assets/Image/dayuse.png'
import long from '../../assets/Image/longrental.png'
import pickupdrop from '../../assets/Image/pickupdrop.png'
import corporate from '../../assets/Image/corporaterides.png'
import wedding from '../../assets/Image/wedding.png'
import partyride from '../../assets/Image/partyride.png'
import personalgattering from '../../assets/Image/personalgattherinmg.png'
import seamlessride from '../../assets/Image/seamlessride.png'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const services = [
        {
            title: "Day Use",
            img: dayuse,
            bg: "bg-[#FFE9D7]",
        },
        {
            title: "Long Rental",
            img: long,
            bg: "bg-[#E4E8FD]",
        },
        {
            title: "Premium Pickup & Drop",
            img: pickupdrop,
            bg: "bg-[#FFE1C9]",
        },
        {
            title: "Corporate Rides, Simplified",
            img: corporate,
            bg: "bg-[#DFE8FF]",
        },
        {
            title: "Wedding Special Rides",
            img: wedding,
            bg: "bg-[#FFEDF1]",
        },
        {
            title: "Ride to the Party in Style",
            img: partyride,
            bg: "bg-[#DDF8FF]",
        },
         {
            title: "Personal Gatherings Made Smoother",
            img: personalgattering,
            bg: "bg-[#E2F3E0]",
        },
          {
            title: "Seamless Rides for Group Tours",
            img: seamlessride,
            bg: "bg-[#FDF2CB]",
        },
    ];
    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Services</h2>
                        </div>
                    </div>
                    {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 gris-cols-1 gap-5 md:pt-10 pt-0">
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

                    </div> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className={`rounded-xl p-4 flex flex-col items-center text-center ${service.bg}`}
                            >
                                <img src={service.img} alt={service.title} className="sm:h-[100px] h-[70px] sm:mb-4 mb-2" />
                                <h4 className="md:text-lg text-sm font-semibold sm:mb-3 mb-1">{service.title}</h4>
                               
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
