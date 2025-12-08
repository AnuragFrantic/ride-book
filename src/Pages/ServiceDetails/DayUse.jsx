import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { BaseUrl } from '../../Api/BaseUrl';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';




const DayUse = () => {
    const location = useLocation();
    const url = location.state?.service || '';
    console.log("url", url)
    // const [data , setdata] = useState([]);
    const [activeIndex, setActiveIndex] = useState("");
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    // const handleservice = async () => {
    //     try {
    //         const res = await axios.get(`${BaseUrl}service-detail/${url}`);
    //         console.log(res.data);
    //         setdata(res.data.data);

    //     } catch (error) {
    //         console.error("Error fetching services:", error);
    //     }
    // };
    // useEffect(() => {
    //     handleservice();
    // }, [])

    const [name, setname] = useState();
    const [requirement_type, setrequirement_type] = useState();
    const [vehicle_type, setvehicle_type] = useState();
    const [phone, setphone] = useState();
    const [date, setdate] = useState();
    const [pickup_address, setpickup_address] = useState();
    const [email, setemail] = useState();
    const [start_time, setstart_time] = useState();
    const [end_time, setend_time] = useState();
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
            question: "How much does hourly car rental with a driver cost?  ",
            answer: "Hourly rates typically start at ₹499–₹ 699 for 4 hours, depending on the city, vehicle type, and package. Some companies also offer flat full-day packages. "
        },
        {
            question: " Can I extend the hours if needed? ",
            answer: "Yes. easy extensions via app or call. Charges are usually on a per-hour basis after your initial package. "
        },
        {
            question: " Is this available in tier-2 and tier-3 cities? ",
            answer: "Yes. “Agraz” in a process for  expansions across metros and smaller cities, offering consistent quality nationwide."
        },
        {
            question: " Are the drivers verified and trained? ",
            answer: "“Agraz” ensures all drivers undergo background checks, training, and regular vehicle sanitization for maximum safety. "
        },
        {
            question: "What if I need the same car the next day? ",
            answer: "You can pre-book it or use multi-day hourly packages if same car is available.  "
        },
    ]

    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
                <div className="container mx-auto">
                    <div className='bg-gradient-to-br from-blue-50 to-white md:p-8 p-4 rounded-2xl shadow-lg'>
                        <div className="grid grid-cols-1">
                            <div className="col-span-1 text-center">
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Rent a Car with a Driver for Day Use
                                </h2>
                            </div>
                        </div>
                        <div className="">
                            <div>
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
                                In today’s fast-packed urban life, flexibility and convenience often dictate our travel choices. Whether you're attending
                                multiple business meetings, exploring a new city on a tight schedule, committing to a full-day cab or dealing with
                                inconsistent ride-hailing apps isn’t always ideal. <strong className='text-black'>“Agraz”</strong> offers a <strong className='text-black'>Hourly Car Rental Services with professional
                                    drivers</strong> emerge as a perfect solution.
                            </p>

                        </div>
                        <div className="mt-5 space-y-6">

                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    1. Flexible Travel as per your Convenience
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Imagine you need to visit a government office, stop by your bank, meet a friend for lunch, and then head to the airport.
                                    Booking individual rides for each stop wastes both time and money—not to mention the hassle of finding a new cab every time.
                                    With an hourly car rental service, you get a dedicated driver and car at your disposal for a fixed number of hours.
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li>Make multiple stops without additional charges</li>
                                    <li>Change your plan mid-way</li>
                                    <li>Avoid booking multiple app-based rides</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    It's like having your own private chauffeur—without the long-term costs.
                                </p>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    2. Professional Drivers Ensure Safety and Local Know-How
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    When you rent a car with a driver, you’re not just hiring a vehicle—you’re getting access to a professional who knows
                                    the local routes, traffic conditions, and safe driving practices. This can be especially important if:
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li>You’re new to the city</li>
                                    <li>You’re visiting for business and need to make a good impression</li>
                                    <li>You’re traveling late at night or in unfamiliar areas</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    Having a trained chauffeur behind the wheel reduces stress and allows you to focus on what matters—whether it’s
                                    preparing for a meeting or simply enjoying the ride.
                                </p>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    3. Cost-Effective for Short-Term Urban Use
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Many people wrongly assume that hiring a car with a driver for a few hours will be expensive. In reality, car rental for short
                                    duration (say 4 to 8 hours) can be more economical than booking multiple taxis—especially when surge pricing hits.
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li>Multiple cab rides in a day = unpredictable fares + waiting time</li>
                                    <li>Hourly rental = one flat rate + unlimited stops (within time limit)</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    You also save on parking fees, fuel costs, and any surge pricing, making affordable car with driver for half-day local use an
                                    ideal op on for both individuals and companies.
                                </p>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    4. Enhanced Comfort and Privacy
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    “Agraz” Car for day use comes to comfort and privacy—especially if you're carrying luggage, documents, or traveling with family.
                                    Hourly rentals offer:
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li>Clean, air-conditioned vehicles</li>
                                    <li>Ample space for bags and belongings</li>
                                    <li>No need to share your ride with strangers</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    You can take calls, work on your laptop, or just relax during the ride—something not always possible in public or shared
                                    cabs. For elderly passengers or families with kids, the comfort factor is unmatched.
                                </p>
                            </div>


                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    5. Ideal for Sightseeing, Events, and Day Tours
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Whether it’s a day out exploring tourist attractions or attending a wedding in another part of town, renting a car with a
                                    driver for the day gives you full control over your schedule.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Tourists, in particular, love hourly rentals because:
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 my-2 pl-4">
                                    <li>The driver often acts as an informal guide</li>
                                    <li>You don’t waste time finding parking or waiting for cabs</li>
                                    <li>You can explore offbeat places without transport worries</li>
                                </ul>
                                <p className="text-gray-700 text-sm">
                                    For local users, it’s perfect for:
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-700 mt-2 pl-4">
                                    <li>Weddings and family functions </li>
                                    <li>Shopping marathons</li>
                                    <li>Airport pickups with multiple stops en route</li>
                                </ul>
                                <p className="text-gray-700 text-sm mt-2">
                                    Hourly rentals are a go-to solu on when you want freedom without compromising on comfort or safety.
                                </p>
                            </div>
                        </div>

                        <div className=" mt-4">
                            <h3 className="md:text-xl sm:text-ll text-lg font-semibold text-black ">Use Cases Where Hourly Car Rentals Make Perfect Sense </h3>
                            <p className='text-gray-700 text-sm my-3'>
                                Still not sure when to use an hourly rental? Here are some real-world examples:
                            </p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 md:text-sm text-[12px]">
                                    <thead className="bg-gray-200 text-gray-800">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Scenario </th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Why Hourly Rental Wins </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Business mee ngs across the city </td>
                                            <td className="border border-gray-300 px-4 py-2">Saves me, ensures punctuality </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Shopping day with mul ple stops</td>
                                            <td className="border border-gray-300 px-4 py-2">Keep bags in the car, move hassle</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Medical appointments with family</td>
                                            <td className="border border-gray-300 px-4 py-2"> Comfortable for elderly, no rush</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Airport transfer with detour</td>
                                            <td className="border border-gray-300 px-4 py-2">Affordable vs mul ple cabs</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">City tour with guests </td>
                                            <td className="border border-gray-300 px-4 py-2">Personalized, stress-free travel </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:mt-10 mt-5">
                            <div className="container mx-auto md:px-4">

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

export default DayUse

