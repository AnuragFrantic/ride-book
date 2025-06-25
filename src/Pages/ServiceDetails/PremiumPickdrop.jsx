import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const PremiumPickdrop = () => {
    const location = useLocation();
    const url = location.state?.service || '';
    const [name, setname] = useState();
    const [requirement_type, setrequirement_type] = useState();
    const [vehicle_type, setvehicle_type] = useState();
    const [phone, setphone] = useState();
    const [date, setdate] = useState();
    const [pickup_address, setpickup_address] = useState();
    const [email, setemail] = useState();
    const [start_time, setstart_time] = useState();
    const [end_time, setend_time] = useState();
    const [destination, setdestination] = useState();
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
        setremarks("");
        setdestination("");
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
            destination: destination,
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
    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
                <div className="container mx-auto">
                    <div className='bg-gradient-to-br from-blue-50 to-white md:p-8 p-4 rounded-2xl shadow-lg'>
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 text-center">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Premium car rental services
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
                                            Destination Address
                                        </label>
                                        <input
                                            type="text"
                                            id="remarks "
                                            name="remarks "
                                            value={destination}
                                            onChange={(e) => setdestination(e.target.value)}
                                            placeholder='Enter destination address'
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
                                <strong className='text-black'>“Agraz”</strong> offers a luxurious and comfortable travel experience, ideal for special occasions, business trips, or exploring new cities. We provide access to a wide range of vehicles, often with chauffeur services, and prioritize passenger comfort and safety.
                            </p>


                        </div>
                        <div className="mt-5 space-y-6">
                            <h3 className="text-lg font-semibold text-black ">
                                Benefits of Premium Car Rentals:
                            </h3>

                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    1. Comfort and Convenience:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Enjoy a smooth and comfortable journey with features like ventilated leather seats, noise-canceling interiors, and adaptive suspension.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    2.	Professional Chauffeur Services:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Eliminate the stress of driving and focus on your itinerary with trained, professional drivers who prioritize safety and punctuality.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    3.	Variety and Customization:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Choose from a wide range of vehicles, including sedans, SUVs, and luxury models, to suit your specific needs and preferences.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    4.	Cost-Effective for Corporate Travel:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Outsourcing luxury car rentals for business travel can save companies on maintenance, insurance, and driver salaries.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    5.	Enhanced Travel Experience:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Enjoy a more luxurious and memorable travel experience with amenities like Wi-Fi, refreshments, and on-demand stops.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    6.	Safe and Secure Travel:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Benefit from the expertise of trained chauffeurs and the safety features of premium vehicles.
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-700 text-sm">
                                    Tips for Choosing a Premium Car Rental:
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li><strong className='text-black'>Pre-book your rental:</strong> Ensure availability, especially during peak seasons.</li>
                                    <li><strong className='text-black'>Choose the right vehicle:</strong> Consider your needs, the terrain, and the number of passengers.</li>
                                    <li><strong className='text-black'>Customize your itinerary:</strong> Work with the rental service to plan stops and routes.</li>
                                    <li><strong className='text-black'>Factor in additional costs:</strong> Consider any extra charges, such as Night Charges, tolls or mileage.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    WHY CHOOSE PREMIUM / LUXURY CARS
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Long drives feel effortless, business trips become impressive, and special events feel memorable with luxury cars. Its rental is also much more affordable for occasional use than owning one.

                                </p>
                                <p className="text-gray-700 text-sm">
                                    Car enthusiasts can also enjoy the thrill of a high-performance car without owning one. Let’s explore the key reasons why switching to a luxury car rental in India might prove to be suitable for you.
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li>Make a lasting first impression</li>
                                    <li>
                                        High-level safety and reliability
                                    </li>
                                    <li>
                                        Relax or complete work on the move
                                    </li>
                                    <li>
                                        Try the luxury driving experience
                                    </li>
                                    <li>
                                        Luxurious comfort and amenities
                                    </li>
                                    <li>
                                        More cost-effective for occasional use
                                    </li>
                                    <li>
                                        Various options for different needs
                                    </li>
                                    <li>
                                        Convenient and personalized rental service
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PremiumPickdrop
