import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Weddingspecial = () => {
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
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Wedding Special Rides
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
                                For the perfect wedding, every little thing counts and the arrival and departure of the bride and groom are key moments. The main goal of a grand entrance and a memorable send-off is not only to move guests but to make an enduring statement. In the recent past, choosing to rent luxury cars has become a common choice for many couples on their wedding day. Rather than just being a fashion, this choice aims to make the whole experience more polished, comfortable and unique. Luxury cars, whether classic or brand new, give a movie-style elegance to your special day. Couples now want their wedding to be more than an event; they want to design a special experience for themselves and their guests. This is a closer explanation of why renting luxury vehicles has become a key part of weddings these days.
                            </p>


                        </div>
                        <div className="mt-5 space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    A Grand Entrance Worth Remembering
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    The opening moments usually establish the overall mood for the wedding. So, coming into the event in a luxury car helps create an upscale and exciting atmosphere. Seeing the bride enter the ceremony in a shiny Mercedes-Benz or vintage Rolls- Royce, with cheers and cameras going off is so rewarding—it really feels like a fairytale moment.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    There is something visually unique about luxury cars that normal cars just don’t have. If you want to enter with a big statement, these vehicles are just right for you.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Comfort Meets Class
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Weddings are often days full of ceremonies, driving between several locations and strict timings. When things get busy, comfort becomes more important than anything else. The comfort and space in luxury cars allow couples to rest, refresh themselves and have some privacy.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Because of the luxury amenities, large interiors and smooth ride, the couple can expect to feel special throughout. The mix of luxury and ease is why luxury car rentals suit discerning couples perfectly.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Adds a Cinematic Touch to Photos and Videos
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Weddings now leave behind not only memories but also visually stunning photos and videos from photographers and videographers. Having luxury cars in the frame creates an extra eye-catching effect. Be it a love portrait against a sparkling bonnet or the bride showing herself from within the window with her veil, the vehicle takes an important role in the photograph.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Some upscale rental services let you choose extra decorations for the vehicles, matching the wedding’s theme. Now that sharing photos of weddings is common on social media; these carefully selected images have a strong impact.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Customization and Variety
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    A main reason why <strong className='text-black'>luxury car rental for wedding</strong> celebrations are chosen is because of their flexibility and multiple options. Couples can choose anything from an old Ambassador if they like tradition, to a modern Audi or BMW.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Having these different choices enables the car to suit the couple’s personality and the style of their wedding. Certain individuals will prefer the openness of a convertible and others will want the elegance of a sedan. Personalizing the ride enhances how enjoyable the journey is.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    A Symbol of Celebration and Status
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    For many, weddings are special occasions they get to experience just once and they like to make them grand and memorable. Driving a luxury car can mark a small yet important sign of success for people. It shows concern for the smaller things and admiration for quality.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Because weddings are celebrated so vibrantly in cities such as Delhi / Mumbai / Hyderabad & Bangalore, <strong className='text-black'>Luxury car rental for wedding</strong> ceremonies is a usual practice. It highlights fashion and also reflects a strong wish to celebrate love in the best way possible.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Seamless Logistics and Professional Service
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Hiring a high-end car for your wedding ensures you get services from highly professional drivers. “Agraz” aim for punctual pickups, tidy cars and trained drivers. So, couples won’t stress about surprises or running into difficulties on their special day.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Ideal for Pre-Wedding and Post-Wedding Events
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    A luxury car can be useful on several special occasions, apart from the wedding ceremony. For bachelor/bachelorette parties, engagement ceremonies, photo shoots and the wedding reception, these vehicles contribute an extra touch of magic.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    A lot of couples choose expensive cars for their trip after the wedding, making the start of their marriage extra special. Intimacy, elegance and exclusivity make the experience even better.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Affordability and Accessibility
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Contrary to popular belief, booking a luxury car is not reserved for the ultra-rich. Today, with increasing competition and better infrastructure, luxury car rentals have become more accessible and budget-friendly. Couples can choose from hourly rates, packages, or full-day services depending on their needs and budget.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    An Experience That Lasts a Lifetime
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Besides getting you from one place to another, luxury cars provide an unforgettable drive. They add to the happiness, thrill and memories that make weddings special. Looking back at the event, couples treasure riding an elegant car as one of their most pleasant memories from the day.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Appearance is only one aspect—how the couple felt is more important. Sharing the ride in a fancy vehicle with your partner, as you are beginning the next chapter in your lives, is really something wonderful.
                                </p>

                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    Conclusion
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    A wedding is all about making memories, sharing feelings and celebrating one unique event. Choosing the setting, clothing and transportation methods all play a part in making the celebration memorable. Luxury car rental for wedding celebrations are valued for reasons beyond their looks; they are more about comfort, style and a chance to celebrate each moment.
                                </p>
                                <p className="text-gray-700 text-sm">
                                    Thanks to a large selection, professional services and unique packages, luxury car rentals have become common in today’s wedding events. Making a memorable occasion calls for attention to this one thing in particular.
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Weddingspecial
