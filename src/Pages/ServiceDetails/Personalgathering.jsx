import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Personalgathering = () => {
    const location = useLocation();
    const url = location.state?.service || '';
    const [name, setname] = useState();
    const [requirement_type, setrequirement_type] = useState();
    const [vehicle_type, setvehicle_type] = useState();
    const [phone, setphone] = useState();
    const [date, setdate] = useState();
    const [pickup_address, setpickup_address] = useState();
    const [drop_address , setdrop_address] = useState();
    const [email, setemail] = useState();
    const [time, settime] = useState();

    const [noof_person, setnoof_person] = useState();
    const [multi_stops, setmutli_stops] = useState();
    const [remarks, setremarks] = useState();
    const resetform = () => {
        setname("");
        setrequirement_type("");
        setvehicle_type("");
        setphone("");
        setdate("");
        setpickup_address("");
        setdrop_address("");
        setemail("");
        settime("");
        setremarks("");
        setnoof_person("");
        setmutli_stops("");
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
            drop_address: drop_address,
            email: email,
            time: time,
            noof_person: noof_person,
            remarks: remarks,
            multi_stops: multi_stops,
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
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">One-way cab
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
                                            Drop Address
                                        </label>
                                        <input
                                            type="text"
                                            id="dropaddress"
                                            name="dropaddress"
                                            value={drop_address}
                                            onChange={(e) => setdrop_address(e.target.value)}
                                            placeholder='Enter drop address'
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
                                            Time
                                        </label>
                                        <input
                                            type="text"
                                            id="time "
                                            name="time "
                                            value={time}
                                            onChange={(e) => settime(e.target.value)}
                                            placeholder='Enter time '
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            No of Persons
                                        </label>
                                        <input
                                            type="number"
                                            id="noofperson "
                                            name="noofperson "
                                            value={noof_person}
                                            onChange={(e) => setnoof_person(e.target.value)}
                                            placeholder='Enter no of persons'
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

                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Multi Stops
                                        </label>
                                        <input
                                            type="text"
                                            id="multistops "
                                            name="multistops "
                                            value={multi_stops}
                                            onChange={(e) => setmutli_stops(e.target.value)}
                                            placeholder='Enter multi stop'
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
                                <strong className='text-black'>“Agraz”</strong> offers a convenient and cost-effective solution for intercity travel, especially for trips where you don't need a round- trip. “Agraz” provide flexibility, transparency in pricing, and a wider range of vehicle options compared to traditional taxis.
                            </p>


                        </div>
                        <div className="mt-5 space-y-6">
                            <h3 className="text-lg font-semibold text-black ">
                                Benefits of One-Way Cabs:
                            </h3>

                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    1. Cost-effective
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    You only pay for the distance travelled, eliminating the cost of a return journey for the driver.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    2.	Flexibility
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Ideal for trips where you're unsure of your return date or prefer to use a different mode of transport for the return journey.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    3.	Wide range of options
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Choose from various vehicle types to suit your needs and budget, from compact cars to spacious SUVs.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    4. Reliability and Punctuality
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    One-way cab services often prioritize punctuality with real-time tracking and professional drivers.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    5.	Ease of booking
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Many services offer user-friendly apps and websites for convenient online booking.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    6. Transparent pricing
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    You'll know the fare upfront, avoiding hidden charges and unexpected costs.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    7. 	Safety
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Services may offer features like GPS tracking and emergency assistance.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    8. Convenience
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    One-way cabs can simplify airport commutes and other trips where a round-trip is unnecessary.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    9. 	Environmentally friendly
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    By eliminating return journeys, one-way cabs can contribute to reduced fuel consumption and emissions.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    When to choose a one-way cab
                                </h3>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Relocating to a new city
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    If you're moving, a one-way cab can be a practical solution.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Attending a one-time event
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    If you're going to a conference or event in another city and don't plan to return immediately.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Taking a flight or train for the return journey
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    If you're flying out or taking a train back, a one-way cab is a convenient option.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    When you don't need a return trip:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    If you're simply traveling from one location to another without needing to return to the starting point.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Book in advance:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    This ensures availability, especially during peak travel times.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Confirm the fare and route:
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Ensure you understand the pricing structure and the agreed-upon route.
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Personalgathering
