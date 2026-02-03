import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const Corporateride = () => {
    const location = useLocation();
    const url = location.state?.service || '';
    const [name, setname] = useState();
    const [company_name, setcompany_name] = useState();
    const [vehicle_type, setvehicle_type] = useState();
    const [designation, setdesignation] = useState();
    const [address, setaddress] = useState();
    const [noof_vehicla, setnoof_vehicla] = useState();
    const [phone, setphone] = useState();
    const [gst, setgst] = useState();
    const [email, setemail] = useState();
    const [requirement_type, setrequirement_type] = useState();
    const [file, setfile] = useState();
    const [remarks, setremarks] = useState();
    const handlefile = (e) => {
        const selectedfile = e.target.files[0];
        console.log(selectedfile);
        setfile(selectedfile);
    };
    const resetform = () => {
        setname("");
        setcompany_name("");
        setvehicle_type("");
        setdesignation("");
        setphone("");
        setaddress("");
        setnoof_vehicla("");
        setgst("");
        setemail("");
        setrequirement_type("");
        setfile("");
        setremarks("");
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("name", name);
        formdata.append("company_name", company_name);
        formdata.append("vehicle_type", vehicle_type);
        formdata.append("designation", designation);
        formdata.append("address", address);
        formdata.append("noof_vehicla", noof_vehicla);
        formdata.append("phone", phone);
        formdata.append("gst", gst);
        formdata.append("email", email);
        formdata.append("requirement_type", requirement_type);
        formdata.append("image", file);
        formdata.append("remarks", remarks);
        formdata.append("type", url)
        try {
            const resp = await axios.post(`${BaseUrl}service-form`, formdata);
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
                                <h2 className="md:text-3xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Corporate Ride Simplified
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
                                            Name of Company
                                        </label>
                                        <input
                                            type="text"
                                            id="companyname"
                                            name="company name"
                                            value={company_name}
                                            onChange={(e) => setcompany_name(e.target.value)}
                                            placeholder="Enter  company name"
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
                                            Designation
                                        </label>
                                        <input
                                            type="text"
                                            id="designation"
                                            name="designation"
                                            value={designation}
                                            onChange={(e) => setdesignation(e.target.value)}
                                            placeholder="Enter designation"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={address}
                                            onChange={(e) => setaddress(e.target.value)}
                                            placeholder="Enter address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                            No of Vehicles
                                        </label>
                                        <input
                                            type="text"
                                            id="noofvehicles"
                                            name="noofvehicles"
                                            value={noof_vehicla}
                                            onChange={(e) => setnoof_vehicla(e.target.value)}
                                            placeholder="Enter no of vehicles"
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
                                            GST No.
                                        </label>
                                        <input
                                            type="text"
                                            id="gst"
                                            name="gst"
                                            value={gst}
                                            onChange={(e) => setgst(e.target.value)}
                                            placeholder="Enter gst no"
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
                                            id="requirementtype"
                                            name="requirementtype"
                                            value={requirement_type}
                                            onChange={(e) => setrequirement_type(e.target.value)}
                                            placeholder='Enter requirement type'
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
                                        <label htmlFor="businessCard" className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload Business Card
                                        </label>
                                        <input
                                            type="file"
                                            id="businessCard"
                                            name="businessCard"
                                            onChange={handlefile}
                                            accept=".jpg,.jpeg,.png,.pdf"
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
                                Corporate car rental refers to the practice of renting vehicles for business purposes. Although it refers to the practice of renting vehicles for business purposes. Companies may rent Cars, Vans, Buses or other vehicles for a variety of reasons, including employee travel, client transportation, or support operations such as deliveries.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                <strong className='text-black'>“VERDE”</strong> Corporate care can provide businesses with access to a wide range of vehicles, often at discounted rates, and may also offer additional services such as insurance, fuel management, and 24/7 roadside assistance. These services can help companies save time and money, while also ensuring that their employees and clients have reliable transportation when needed.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                One of the primary <strong className='text-black'>advantages of “VERDE” corporate care</strong> is the flexibility they offer. Companies can rent vehicles for a variety of purposes, including airport transfers, business meetings, and client visits. This flexibility allows businesses to meet their transportation needs without having to invest in expensive vehicles that may only be used occasionally.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                In addition to flexibility, “VERDE” corporate care offer a range of cost-saving benefits. For example, many rental companies offer discounted rates for long-term rentals or for renting multiple vehicles at once. This can be especially beneficial for businesses that require frequent travel or have a large number of employees.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                Another <strong className='text-black'>cost-saving benefit is</strong>  the ability to avoid the expenses associated with owning and maintaining a fleet of vehicles. These expenses can include insurance, registration fees, maintenance costs, and more. By renting vehicles as needed, businesses can avoid these costs and save money in the long run.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                Finally, “VERDE” corporate care can also help businesses improve their sustainability efforts. By renting fuel-efficient vehicles, companies can reduce their carbon footprint and contribute to a more sustainable future.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                The primary aim of “VERDE” corporate <strong className='text-black'>cab services</strong> is to provide comfortable and safe transportation for employees and clients, while also ensuring convenience and cost-effectiveness for the company. These services are especially useful for companies that require frequent transportation of their employees and clients to different locations within a city or across cities.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px] mt-3'>
                                The services typically include pick-up and drop-off at designated locations, booking through online platforms, tracking of cabs, and payment through various modes. The companies may also choose to customize the services based on their specific requirements, such as adding extra safety features, selecting the type of vehicle, or scheduling pickups and drops at particular times.
                            </p>


                        </div>
                        <div className="mt-5 space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    1.	Online Booking
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Corporate online booking platforms that enable businesses to reserve vehicles quickly and easily. These platforms allow businesses to select the type of vehicle they require, the pickup and drop-off location, and the dates and times of the rental.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    2.	Online Tracking
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Online tracking services to enable businesses to track the location of their rented vehicles. This feature ensures that businesses can keep track of their vehicles' whereabouts, ensuring that they are being used efficiently and that they are safe
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    3.	Automated Billing
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    With technology, corporate can automate billing and invoicing processes, streamlining the payment process for businesses. This feature ensures that businesses receive accurate and timely bills, enabling them to manage their expenses more effectively.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-black mb-1">
                                    4. Fleet Management
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    Technology enables corporate can manage their fleets more efficiently. GPS tracking, automated maintenance scheduling, and fuel consumption monitoring are just a few of the features that can help rental companies ensure that their fleets are running smoothly.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Corporateride
