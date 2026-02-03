import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Partyride = () => {
    const location = useLocation();
    const url = location.state?.service || '';
    const [name, setname] = useState("");
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
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Car for Special Events
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
                                Your mode of transportation plays a crucial role in setting the tone for your event. A luxury vehicle serves more than just functional purposes, it becomes a part of your visual narrative, enhancing your Photos, Videos, and guests first impressions. Grand birthday parties or VIP events and social events etc. a striking car adds flair, reflecting your personal style and sense of occasion.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                <strong className='text-black'>“VERDE”</strong>  is an excellent way to give your special occasion a touch of elegance, comfort, and convenience. What adds more excitement to the occasion is when you get to book your long-wished favourite car to celebrate your special day. Whether it’s for a wedding, corporate event, or a lavish birthday party, traveling in your fantasy car makes the event more memorable. However, the entire process of renting must be planned thoroughly so that the experience remains smooth. From choosing a trustworthy rental service to having clarity on rental terms and conditions, each step makes a difference.
                            </p>


                        </div>
                        <div className="mt-5 space-y-6">


                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Renting a Car for Special Events is a Great Idea
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    <strong className='text-black'>“VERDE” </strong>offers a luxury experience and adds glamour and sophistication to your special occasion without the burden of ownership. From weddings, corporate events, and birthdays, to an anniversary, makes extravagant entrance possible and makes the experience unforgettable.
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li>Brings luxury and style– Reaching your destination in a premium car makes the entire experience worthwhile, leaving a strong impression on everyone.</li>
                                    <li>
                                        Affordable option– Rent out high-end cars at the lowest possible price, forgoing charges such as insurance, maintenance, and depreciation.
                                    </li>
                                    <li>
                                        Huge Fleet– “VERDE” provides a wide range of car options to choose from, ranging from luxury cars to limousines, meeting various consumer preferences.
                                    </li>
                                    <li>
                                        Convenience and flexibility– Select pick-up and drop-off points as per your convenience, eliminating hassles in relation to transportation.
                                    </li>
                                    <li>
                                        Ideal for any special event– Be it a Wedding, business meeting, or photoshoot, renting the appropriate car adds sophistication to the event.
                                    </li>
                                    <li>
                                        No long-term commitment– Ride in your dream car without being worried about ownership responsibilities.
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

export default Partyride
