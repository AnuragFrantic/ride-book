import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Seamlessride = () => {
  const location = useLocation();
  const url = location.state?.service || '';
  const [name, setname] = useState();
  const [requirement_type, setrequirement_type] = useState();
  const [vehicle_type, setvehicle_type] = useState();
  const [phone, setphone] = useState();
  const [start_date, setstart_date] = useState();
  const [end_date, setend_date] = useState();
  const [pickup_address, setpickup_address] = useState();
  const [email, setemail] = useState();
  const [noof_days, setnoof_days] = useState();
  const [destination_visit, setdestination_visit] = useState();
  const [noof_person, setnoof_person] = useState();
  const [remarks, setremarks] = useState();
  const resetform = () => {
    setname("");
    setrequirement_type("");
    setvehicle_type("");
    setphone("");
    setstart_date("");
    setend_date("");
    setpickup_address("");
    setemail("");
    setnoof_days("");
    setdestination_visit("");
    setremarks("");
    setnoof_person("");

  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    let requestdata = {
      name: name,
      requirement_type: requirement_type,
      vehicle_type: vehicle_type,
      phone: phone,
      start_date: start_date,
      end_date: end_date,
      pickup_address: pickup_address,
      email: email,
      noof_days: noof_days,
      destination_visit: destination_visit,
      noof_person: noof_person,
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
                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Car Rental Services for Outstation Trips
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
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="startdate"
                      name="startdate"
                      value={start_date}
                      onChange={(e) => setstart_date(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                   <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      End Date
                    </label>
                    <input
                      type="date"
                      id="enddate"
                      name="enddate"
                      value={end_date}
                      onChange={(e) => setend_date(e.target.value)}
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
                      No of Days
                    </label>
                    <input
                      type="number"
                      id="noofdays "
                      name="noofdays "
                      value={noof_days}
                      onChange={(e) => setnoof_days(e.target.value)}
                      placeholder='Enter no of days'
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                      Destinations to be visit
                    </label>
                    <input
                      type="text"
                      id="destination "
                      name="destination "
                      value={destination_visit}
                      onChange={(e) => setdestination_visit(e.target.value)}
                      placeholder='Enter destination'
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
                      No of Persons
                    </label>
                    <input
                      type="number"
                      id="=noofperson "
                      name="=noofperson "
                      value={noof_person}
                      onChange={(e) => setnoof_person(e.target.value)}
                      placeholder='Enter no of person'
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
                For an outstation trip, it is crucial to find the right car that can significantly improve your experience. When going on a vacation, business trip, or visiting relatives, <strong className='text-black'>“Agraz”</strong> is Just a click away - Reliable & Affordable outstation Cabs - will get you there comfortably without stretching your budget too much. We always provide Cars that caters to your specific requirements and ensures that you have an enjoyable ride throughout. Through providing the appropriate vehicle, with seamless travel experiences
              </p>
            </div>
            <div className="mt-5 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  Choosing the Best Car Rental for Your Outstation Trip
                </h3>
                <p className="text-gray-700 text-sm">
                  Picking the right vehicle is crucial when it comes to trips and car hire services. If you are looking for affordable outstation cab services, there are things that you must reflect upon. One of them is how long your journey will last so as to identify what kind of comfort level would best suit you. Choose a big, spacious, comfortable car if you plan on going long distances. A bigger car, such as an SUV or sedan, gives more room and comfort over long journeys.
                </p>

              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  Benefits of Renting a Car vs. Hiring a Taxi
                </h3>
                <p className="text-gray-700 text-sm">
                  When travelling across towns, deciding whether to rent or hire a taxi brings significant dissimilarities between these two choices. Renting stands head above shoulders in relation to flexibility and being economical as well.
                </p>
                <p className="text-gray-700 text-sm">
                  One of the best things about car rental is the independence it offers. This means you can travel to your destination at any speed and even have stopovers on the way when you rent a vehicle. Having your own car, taking road trips, or just exploring new areas would be much easier when taxi timetables do not bind you. Such control is significant in long-distance drives where flexibility adds value to one’s trip.
                </p>
                <p className="text-gray-700 text-sm">
                  <strong className='text-black'>“Agraz”</strong> charge flat fee or have daily prices, which are more pocket-friendly. This means that you will know exactly what your total expenditure will be and can even save some money especially if it is a longer trip.
                </p>
                <p className="text-gray-700 text-sm">
                  Overall, outstation travel-wise, renting a vehicle gives greater flexibility, thereby enabling one to manipulate their journeys based on personal preferences and budgetary considerations, leading to better experiences.
                </p>

              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-1">
                  What to Check Before Embarking on an Outstation Trip with a Rental Car
                </h3>
                <p className="text-gray-700 text-sm">
                  Before going for an outstation trip, you must take into account some essential details to ensure that the travelling is smooth and stress-free. The first thing which must be done is plan your itinerary carefully (As our online platform help to design by including maximum visiting point as per your available time and interest). It will help better comprehend points such as extra charges, mileage restrictions and so on. Thus, you can avoid any unexpected costs and unpredictability.
                </p>
                <p className="text-gray-700 text-sm">
                  Ready to make your next trip seamless? Check out “Agraz” Booking App for high quality Vehicles, that fit your budget. Rent a car now and enjoy stress-free outstation trips!
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Seamlessride
