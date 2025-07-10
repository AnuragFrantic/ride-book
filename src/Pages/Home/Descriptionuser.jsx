import React, { useEffect, useState } from 'react';
import user from '../../assets/Image/user.jpg';
import driver from '../../assets/Image/drivernew.jpg';
import vendor from '../../assets/Image/vendor.jpg';
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Descriptionuser = () => {
    const navigate = useNavigate();
    const [showmodal, setshowmodal] = useState(false);
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const closePopup = () => {
        setshowmodal(false);
    }
    return (
        <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-50'>
            <div className="container mx-auto">
                {/* <div className="grid grid-cols-1">
                    <div className="col-span-1 text-center">
                        <h2 className="md:text-4xl text-3xl font-bold text-gray-800 mb-6 ">Description</h2>
                    </div>
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2  gap-8 items-center ">
                    <div className="col-span-1 md:order-1 order-2" data-aos="flip-up">
                        <img src={user} alt='image' className='rounded-[20px]' />
                        {/* <div className="relative description-wrapper w-full md:h-[400px] h-[200px] p-2">
                            <img
                                src={user}
                                alt="User"
                                className="w-full h-full object-cover  rounded-[40px_50%_50%_50%]"
                            />
                        </div> */}
                    </div>
                    <div className="col-span-1 md:order-2 order-1">
                        <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">About User</h2>
                        <p className="text-gray-600 text-md leading-relaxed mb-4">
                            Say goodbye to long waits and last-minute hassles. Our ride booking service is designed to fit your lifestyle — fast, reliable, and always ready. Whether it’s a quick errand or a long-distance trip, we’ve got you covered.
                        </p>

                        <p className="text-gray-600 text-md leading-relaxed mb-4">
                            Real-time tracking, flexible scheduling, and transparent pricing ensure that you’re always in control. You can plan ahead or book on-the-go, knowing your ride will arrive on time, every time.
                        </p>

                        <p className="text-gray-600 text-md leading-relaxed mb-4">
                            Your safety is our priority. All our drivers are verified, trained, and committed to providing you with a secure and smooth journey. Enjoy peace of mind from pick-up to drop-off.
                        </p>
                        {/* <button
                            type="submit"
                            onClick={() => setshowmodal(true)}
                            className="bg-black text-white font-normal py-2 px-4 rounded-[10px] flex items-center justify-center gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 shadow-md cursor-pointer"
                        >
                            Register as User
                        </button> */}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-5">
                    <div className="col-span-1">
                        <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">About Drivers</h2>
                        <p className="text-gray-600 text-md leading-relaxed mb-4">
                            Join our growing network of professional drivers and earn on your schedule. Whether you're looking for full-time income or part-time flexibility, we give you the tools and support you need to succeed.
                        </p>

                        <p className="text-gray-600 text-md leading-relaxed mb-4">
                            As a registered driver, you’ll gain access to consistent ride requests, fair earnings, and 24/7 support. We value your time and commitment — that's why we ensure quick payouts, flexible working hours, and safety at every step.
                        </p>
                        <button
                            type="submit"
                            onClick={() => navigate('/driver-detail')}
                            className="bg-black text-white font-normal py-2 px-4 rounded-[10px] flex items-center justify-center gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 shadow-md cursor-pointer"
                        >
                            View Detail
                        </button>
                    </div>
                    <div className="col-span-1" data-aos="flip-up">
                        <img src={driver} alt='image' className='rounded-[20px]' />
                        {/* <div className="relative description-wrapper w-full md:h-[400px] h-[200px] p-2">
                            <img
                                src={driver}
                                alt="User"
                                className="w-full h-full object-cover  rounded-[40px_50%_50%_50%]"
                            />
                        </div> */}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-5">
                    <div className="col-span-1 md:order-1 order-2" data-aos="flip-up">
                        <img src={vendor} alt='image' className='rounded-[20px]' />
                        {/* <div className="relative description-wrapper w-full md:h-[400px] h-[200px] p-2 ">
                            <img
                                src={vendor}
                                alt="User"
                                className="w-full h-full object-cover  rounded-[40px_50%_50%_50%]"
                            />
                        </div> */}
                    </div>
                    <div className="col-span-1  md:order-2 order-1">
                        <h2 className="md:text-3xl text-2xl font-semibold text-gray-800 mb-4">About Vendor</h2>
                        <p className="text-gray-600 text-md leading-relaxed mb-4">
                            Partner with us and grow your business by becoming a trusted vendor on our platform. Whether you own a fleet or offer transportation services, we provide the tools and visibility to help you succeed in a competitive market.
                        </p>
                        <p className="text-gray-600 text-md leading-relaxed mb-4">
                            As a verified vendor, you'll receive regular service requests, reliable payments, and dedicated support. We believe in transparent partnerships — with flexible terms, performance incentives, and a commitment to helping you scale.
                        </p>
                        <button
                            type="submit"
                            onClick={() => navigate('/vendor-page')}
                            className="bg-black text-white font-normal py-2 px-4 rounded-[10px] flex items-center justify-center gap-2 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-all duration-200 shadow-md cursor-pointer"
                        >
                            Register as Vendor
                        </button>
                    </div>

                </div>
            </div>
            {showmodal && (
                <div className="fixed inset-0 bg-[#000000c7] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center space-y-4 relative">
                        <h3 className="text-2xl font-semibold text-black mb-6">Registration</h3>

                        <form className="space-y-4 text-left">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="date"
                                placeholder="Date of Birth"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
                                defaultValue=""
                            >
                                <option value="" disabled>Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </form>

                        <button
                            type="submit"
                            onClick={closePopup}
                            className="w-full mt-6 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-900 transition"
                        >
                            SUBMIT
                        </button>
                    </div>
                </div>

            )}
        </section >
    )
}

export default Descriptionuser
