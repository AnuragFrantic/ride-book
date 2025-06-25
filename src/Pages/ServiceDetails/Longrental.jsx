import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Longrental = () => {
     const location = useLocation();
    const url = location.state?.service || '';
    const [activeIndex, setActiveIndex] = useState("");
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const [name, setname] = useState();
    const [requirement_type, setrequirement_type] = useState();
    const [vehicle_type, setvehicle_type] = useState();
    const [phone, setphone] = useState();
    const [date, setdate] = useState();
    const [pickup_address, setpickup_address] = useState();
    const [email, setemail] = useState();
    const [start_time, setstart_time] = useState();
    const [end_time, setend_time] = useState();
    const [personal_use, setpersonal_use] = useState();
    const [remarks, setremarks] = useState();
    const resetform = () => {
        setname("");
        setrequirement_type("");
        setvehicle_type("");
        setphone("");
        setdate("");
        setpickup_address("");
        setemail("");
        setstart_time("");
        setend_time("");
        setpersonal_use("");
        setremarks("");
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        let requestdata = {
            name: name,
            requirement_type: requirement_type,
            vehicle_type: vehicle_type,
            phone: phone,
            date: date,
            pickup_address: pickup_address,
            email: email,
            start_time: start_time,
            end_time: end_time,
            personal_use: personal_use,
            remarks: remarks,
            type: url
        }
        try {
            const resp = await axios.post(`${BaseUrl}service-form`, requestdata);
            console.log(resp);
            if (resp.data.error == 0) {
                toast.success("Form submitted successfully!");
                resetform();
            } else {
                toast.error(resp.data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }
    const faqdata = [
        {
            question: "Are monthly car rentals cheaper than daily rentals?  ",
            answer: " Yes, renting a car on a monthly basis often comes at a significantly reduced per-day cost compared to daily rentals.  "
        },
        {
            question: " What documents are required to rent a car monthly? ",
            answer: " Generally, you’ll need a valid Address proof, identity proof, and in some cases, Agreement / verification documents. "
        },
        {
            question: " Is fuel cost included in monthly car rentals? ",
            answer: " “Agraz” offer fuel-inclusive packages, while others charge separately. It’s best to confirm while booking."
        },
        {
            question: "Can I switch the car model during the rental period?  ",
            answer: " Yes,  you can upgrade or switch your car depending on availability and your package."
        },

    ]

    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
                <div className="container mx-auto">
                    <div className='bg-gradient-to-br from-blue-50 to-white md:p-8 p-4 rounded-2xl shadow-lg'>
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 text-center">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3"> Long Rental / Monthly Car Rentals
                                </h2>
                            </div>
                        </div>
                        <div className="">
                            <div >

                                <div className="w-full bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4 ">
                                    <BsCircleFill /> Enquiry Form

                                </div>

                            </div>
                            <form onSubmit={handlesubmit}>
                                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                            placeholder="Enter  name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Requirement Type
                                        </label>
                                        <input
                                            type="text"
                                            id="Requirementtype"
                                            name="Requirement type"
                                            value={requirement_type}
                                            onChange={(e) => setrequirement_type(e.target.value)}
                                            placeholder="Enter  requirement type"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Type of Vehicle
                                        </label>
                                        <input
                                            type="text"
                                            id="TypeofVehicle"
                                            name="TypeofVehicle"
                                            value={vehicle_type}
                                            onChange={(e) => setvehicle_type(e.target.value)}
                                            placeholder="Enter  vehicle type"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Mobile No
                                        </label>
                                        <input
                                         type="tel"
                                            id="MobNo"
                                            name="MobNo"
                                            maxLength={10}
                                            value={phone}
                                            onChange={(e) => setphone(e.target.value)}
                                            placeholder="Enter mobile no"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            id="Date"
                                            name="Date"
                                            value={date}
                                            onChange={(e) => setdate(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Pickup Address
                                        </label>
                                        <input
                                            type="text"
                                            id="Pickupaddress"
                                            name="Pickupaddress"
                                            value={pickup_address}
                                            onChange={(e) => setpickup_address(e.target.value)}
                                            placeholder='Enter pickup address'
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email id
                                        </label>
                                        <input
                                            type="text"
                                            id="Emailid"
                                            name="Emailid"
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}
                                            placeholder='Enter email id'
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Start Time
                                        </label>
                                        <input
                                            type="text"
                                            id="Starttime "
                                            name="Starttime "
                                            value={start_time}
                                            onChange={(e) => setstart_time(e.target.value)}
                                            placeholder='Enter start time '
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            End Time
                                        </label>
                                        <input
                                            type="text"
                                            id="endtime "
                                            name="endtime "
                                            value={end_time}
                                            onChange={(e) => setend_time(e.target.value)}
                                            placeholder='Enter end time '
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Personal Use / Official Use
                                        </label>
                                        <input
                                            type="text"
                                            id="remarks "
                                            name="remarks "
                                            value={personal_use}
                                            onChange={(e) => setpersonal_use(e.target.value)}
                                            placeholder='Enter personal use'
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Remarks
                                        </label>
                                        <input
                                            type="text"
                                            id="remarks "
                                            name="remarks "
                                            value={remarks}
                                            onChange={(e) => setremarks(e.target.value)}
                                            placeholder='Enter remarks'
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div className='md:mt-6 mt-0'>
                                        <button type='submit' className='text-white bg-black md:px-6 px-4 md:py-2 py-1 rounded-md'>
                                            SUBMIT
                                        </button>
                                    </div>
                                </div>
                            </form>

                            <h3 className="text-lg font-semibold text-black mt-3">
                                Download the App for quick booking
                            </h3>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                In the hustle and bustle of life in Metro Cities, having a reliable mode of transportation is no longer a luxury but a necessity. While daily cab bookings and public transport can be a temporary solution, more and more residents, working professionals, and business travellers are turning towards long-term mobility options. One of the most preferred choices
                            </p>


                        </div>
                        <div className="mt-5 space-y-6">
                            <h3 className="text-lg font-semibold text-black ">
                                Benefits of Long Rental / Monthly Car Rentals in Metro / Urban Cities
                            </h3>

                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    1. Cost-Effective Solution
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    One of the primary reasons why people opt for monthly car rentals is affordability. Compared to the cumulative cost of booking cabs daily or maintaining a personal car (including EMI, insurance, fuel, and maintenance), a monthly rental proves to be much more budget-friendly. Whether you are in the city for a short-term work assignment or looking for a dependable transport solution without long-term commitment, monthly rentals provide maximum value for money.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    2.	Zero Maintenance Hassle
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Owning a car means dealing with regular servicing, unexpected breakdowns, and maintenance charges. When you choose a <strong className='text-black '>Long Rental / Monthly Car Rentals</strong>  the responsibility of vehicle maintenance rests with the rental provider. This makes your life easier, especially if you have a packed schedule and can’t afford frequent visits to service centres.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    3.	Wide Range of Vehicles
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    <strong className='text-black'>“Agraz”</strong>  offer a variety of vehicles to choose from. Whether you need a compact car for solo commuting or an SUV for family trips, monthly car rentals allow you to select a model that suits your preferences and lifestyle. You can also switch vehicles every month based on your changing requirements.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    4.	Ideal for Business Travelers and Expats
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Metro Cities are business hub that sees a constant influx of professionals and expatriates. Monthly car rental is a convenient option for them as it eliminates the hassle of buying a car. It also ensures timely and comfortable travel, which is especially important when managing tight schedules.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    5.	No Long-Term Commitment
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Not everyone wants to be tied down by car loans or leases. Monthly rentals offer a flexible alternative with no strings attached. You can rent for as little as 30 days and extend it according to your needs without being locked into a multi-year contract.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    6.	Perfect for Temporary Requirements
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    People who are relocating temporarily, undergoing home renovations, or visiting family for a few months often find <strong className='text-black'>monthly rentals</strong> a perfect solution. It bridges the gap between short-term and <strong className='text-black'>long-term transportation</strong> requirements without causing financial strain.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    7.	Customizable Packages
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    <strong className='text-black'>“Agraz”</strong> offer customizable rental packages based on your usage. From daily mileage limits to fuel-inclusive options, you can tailor your rental agreement to suit your needs, making it even more efficient and economical.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    8.	Enhanced Safety and Sanitization
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    With ongoing health concerns, many people prefer the safety of a personal vehicle. Monthly rentals give you access to sanitized, well-maintained vehicles, reducing exposure to crowded public transport systems.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    9.	Great for Corporate Use
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Businesses in Metro / Urban cities are increasingly opting for monthly car rentals for employee transportation. It provides a structured and professional travel solution for meetings, airport pickups, client visits, and inter-city travel. It also helps in cost control and better travel management.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Localized Benefits
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    The popularity of <strong className='text-black'>monthly car Rental in Metro cities </strong>/ fast growing Urban Cities has soared due to the presence of IT parks, startups, and multinational offices. These areas are major employment hubs where daily commuting needs are high.
                                    Individuals working here often choose long-term rentals for smoother, stress-free travel. Monthly Car Rental / Long Car Rental cater to diverse budgets and commuting needs, making it easy for residents to access quality transport without heavy financial commitments.

                                </p>

                            </div>


                        </div>


                        <div className="md:mt-10 mt-5">
                            <div className="container mx-auto md:px-4">
                                <h3 className="md:text-xl sm:text-ll text-lg font-semibold text-black text-center mb-3">FAQs </h3>

                                <div className="max-w-4xl mx-auto space-y-4">
                                    {faqdata?.length > 0 ? (
                                        faqdata?.map((item, index) => (
                                            <div key={item._id} className="border border-gray-200 rounded-lg shadow-sm">
                                                <button
                                                    className="w-full flex justify-between items-center md:p-4 p-3 text-left font-medium bg-gray-100 hover:bg-gray-200 transition"
                                                    onClick={() => toggleAccordion(index)}
                                                >
                                                    <span className="text-gray-800 md:text-[16px] text-[14px]">{item.question}</span>
                                                    <span className="text-gray-600 bg-black p-1  rounded-full">
                                                        {activeIndex === index ? <LuMinus size={20} className="text-white" /> : <FiPlus size={20} className="text-white" />}
                                                    </span>
                                                </button>
                                                {activeIndex === index && (
                                                    <div className="p-4 text-gray-700 bg-white border-t md:text-[16px] text-[14px]">
                                                        {item.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-600">No FAQs available.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </>
    )
}

export default Longrental
