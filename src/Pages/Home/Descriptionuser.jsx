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

                        {/* Heading */}
                        <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            About User
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-4 text-justify">
                            Say goodbye to long waits and last-minute hassles. Our ride booking service is designed to fit your lifestyle —
                            <strong className="text-gray-900"> fast, reliable, and always ready.</strong> Whether it’s a quick errand or a
                            long-distance trip, we’ve got you covered.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-4 text-justify">
                            <strong className="text-gray-900">Real-time tracking, flexible scheduling, and transparent pricing</strong> ensure
                            that you’re always in control. Plan ahead or book on-the-go, knowing your ride will arrive
                            <strong className="text-gray-900"> on time, every time.</strong>
                        </p>

                        {/* Paragraph 3 */}
                        <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-4 text-justify">
                            Your safety is our priority. All our drivers are
                            <strong className="text-gray-900"> verified, trained, and committed</strong> to providing a secure and smooth
                            journey. Enjoy peace of mind from pick-up to drop-off.
                        </p>

                        {/* Closing Line */}
                        <p className="mt-4 font-semibold md:text-lg text-sm text-gray-900 tracking-wide">
                            Use <span className="font-bold">VERDE</span> – One step toward a cleaner, greener future.
                        </p>

                    </div>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-5">
                    <div className="col-span-1">

                        {/* Heading */}
                        <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            About Drivers
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-4 text-justify">
                            Join our growing network of professional drivers and earn on your schedule. Whether you're looking for
                            <strong className="text-gray-900"> full-time income</strong> or
                            <strong className="text-gray-900"> part-time flexibility</strong>, we provide the tools and support you need
                            to succeed.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-6 text-justify">
                            As a registered driver, you’ll gain access to
                            <strong className="text-gray-900"> consistent ride requests, fair earnings, and 24/7 support.</strong> We value
                            your time and commitment — that’s why we ensure quick payouts, flexible working hours, and safety at every step.
                        </p>

                        {/* Button */}
                        <button
                            type="button"
                            onClick={() => navigate("/driver-detail")}
                            className="inline-flex items-center justify-center gap-2 
               bg-black text-white font-medium
               md:px-8 px-6 md:py-3 py-2 rounded-full
               hover:bg-gray-900 hover:scale-105
               focus:outline-none focus:ring-2 focus:ring-black
               transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            View Details
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
                    <div className="col-span-1 md:order-2 order-1">

                        {/* Heading */}
                        <h2 className="md:text-4xl text-3xl font-extrabold text-gray-900 mb-5 tracking-tight">
                            About Vendor
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-4 text-justify">
                            Partner with us and grow your business by becoming a
                            <strong className="text-gray-900"> trusted vendor</strong> on our platform. Whether you own a fleet or offer
                            transportation services, we provide the tools and visibility you need to succeed in a competitive market.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-gray-700 md:text-lg text-sm leading-relaxed mb-6 text-justify">
                            As a verified vendor, you’ll receive
                            <strong className="text-gray-900"> regular service requests, reliable payments, and dedicated support.</strong>{" "}
                            We believe in transparent partnerships with flexible terms, performance incentives, and a commitment to helping
                            you scale.
                        </p>

                        {/* Button */}
                        <button
                            type="button"
                            onClick={() => navigate("/vendor-page")}
                            className="inline-flex items-center justify-center gap-2 
               bg-black text-white font-medium 
               md:px-8 px-6 md:py-3 py-2 rounded-full
               hover:bg-gray-900 hover:scale-105
               focus:outline-none focus:ring-2 focus:ring-black
               transition-all duration-300 shadow-lg cursor-pointer"
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
