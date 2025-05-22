import React from 'react'
import { BsCircleFill } from 'react-icons/bs'

const Registerasvendor = () => {
    return (
        <>
            <section className="lg:py-10 py-5 lg:px-20 px-5 bg-gray-50">
                <div className="container mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="md:text-4xl text-2xl font-bold text-gray-800">Register as a Vendor</h2>
                    </div>

                    {/* Section Heading */}
                    <div className="w-full bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Company Information
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                        {/* Company Name */}
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                Name of the company
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                placeholder="Enter company name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* Year of Establishment */}
                        <div>
                            <label htmlFor="establish" className="block text-sm font-medium text-gray-700 mb-2">
                                Year of Establishment
                            </label>
                            <input
                                type="text"
                                id="establish"
                                name="establish"
                                placeholder="Enter establishment year"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* PAN Card */}
                        <div>
                            <label htmlFor="pancard" className="block text-sm font-medium text-gray-700 mb-2">
                                PAN Card
                            </label>
                            <input
                                type="text"
                                id="pancard"
                                name="pancard"
                                placeholder="Enter PAN card no"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* GSTIN */}
                        <div>
                            <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                GSTIN
                            </label>
                            <input
                                type="text"
                                id="gst"
                                name="gst"
                                placeholder="Enter GST number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                    </div>

                    {/* Office Address Section */}
                    <div className="w-full mt-8 bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Office Addresses
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                        {/* Registered Office Address */}
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Registered Office Address
                            </label>
                            <input
                                type="text"
                                id="registeredAddress"
                                name="registeredAddress"
                                placeholder="Enter registered address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* City */}
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Enter city"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        {/* State */}
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Enter state"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                                Pin Code

                            </label>
                            <input
                                type="text"
                                id="pincode"
                                name="pincode"
                                placeholder="Enter pincode"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
                                Branch Office Address (if any)

                            </label>
                            <input
                                type="text"
                                id="branchoffice"
                                name="branchoffice"
                                placeholder="Enter Office Address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                    </div>
                    <div className="w-full mt-8 bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Contact Information
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="Enter email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>


                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone no"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>





                    </div>
                    <div className="w-full mt-8 bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Company Operations
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                No of Staff
                            </label>
                            <input
                                type="number"
                                id="staff"
                                name="staff"
                                placeholder="Enter number of staff"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                Monthly Turn Over
                            </label>
                            <input
                                type="text"
                                id="monthlyturnover"
                                name="monthlyturnover"
                                placeholder="Enter monthly turn over"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                No of Vehicles
                            </label>
                            <input
                                type="number"
                                id="noofvehicle"
                                name=""
                                placeholder="Enter number of vehicle"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Car No
                            </label>
                            <input
                                type="number"
                                id="carno"
                                name="carno"
                                placeholder="Enter car no"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Model No
                            </label>
                            <input
                                type="number"
                                id="modelno"
                                name="modelno"
                                placeholder="Enter model no"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Car Colour

                            </label>
                            <input
                                type="number"
                                id="carcolour"
                                name="carcolour"
                                placeholder="Enter car color"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                    </div>
                    <div className="w-full mt-8 bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Bank Information
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Bank Name
                            </label>
                            <input
                                type="text"
                                id="bankname"
                                name="bankname"
                                placeholder="Enter bank name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                Account Number
                            </label>
                            <input
                                type="text"
                                id="Accountno"
                                name="Accountno"
                                placeholder="Enter account no"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                IFSC Code
                            </label>
                            <input
                                type="text"
                                id="IFSCcode"
                                name="IFSCcode"
                                placeholder="Enter IFSC code"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                UPI ID
                            </label>
                            <input
                                type="text"
                                id="upiid"
                                name="upiid"
                                placeholder="Enter UPI ID"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Cancelled Cheque
                            </label>
                            <input
                                type="file"
                                id="cancelledcheque"
                                name="cancelledcheque"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                    </div>
                    <div className="w-full mt-8 bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Primary Contact Person Details
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Enter address"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                placeholder="Enter city"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                State
                            </label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                placeholder="Enter state"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Pin Code
                            </label>
                            <input
                                type="text"
                                id="pincode"
                                name="pincode"
                                placeholder="Enter pincode"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Job Title
                            </label>
                            <input
                                type="text"
                                id="jobtitle"
                                name="jobtitle"
                                placeholder="Enter job title"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Office Number
                            </label>
                            <input
                                type="text"
                                id="officenumber"
                                name="officenumber"
                                placeholder="Enter office number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Mobile Number / WhatsApp No
                            </label>
                            <input
                                type="text"
                                id="mobilenumber"
                                name="mobilenumber"
                                placeholder="Enter mobile or whatsApp number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>


                    </div>
                    <div className="w-full mt-8 bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Personal Documents
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Aadhar Card
                            </label>
                            <input
                                type="file"
                                id="adhaarcard"
                                name="adhaarcard"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                DL Number
                            </label>
                            <input
                                type="text"
                                id="dlnumber"
                                name="dlnumber"
                                placeholder="Enter DL number"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                DL Expiry Date
                            </label>
                            <input
                                type="date"
                                id="dlexpiry"
                                name="dlexpiry"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                2 Photos
                            </label>
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                                multiple
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Police Verification / Self Verification
                            </label>
                            <input
                                type="file"
                                id="policeverification"
                                name="policeverification"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>



                    </div>
                    <div className="w-full mt-8 bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4">
                        <BsCircleFill /> Vehicle Documents
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                        <div>
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                Vehicle Type
                            </label>
                            <input
                                type="text"
                                id="vehicletype"
                                name="vehicletype"
                                placeholder="Enter vehicle type"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                               RC (Registration Certificate)
                            </label>
                            <input
                                type="file"
                                id="registrationcertificate"
                                name="registrationcertificate"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                         <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                              Permit
                            </label>
                            <input
                                type="file"
                                id="permit"
                                name="permit"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>

                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                               Insurance Expiry Date
                            </label>
                            <input
                                type="date"
                                id="Insuranceexpiry"
                                name="Insuranceexpiry"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                Vehicle Photo
                            </label>
                            <input
                                type="file"
                                id="photo"
                                name="photo"
                              
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>
                        <div>
                            <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                               Selfie with Car
                            </label>
                            <input
                                type="file"
                                id="carselfie"
                                name="carselfie"

                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                            />
                        </div>



                    </div>
                </div>
            </section>

           
        </>
    )
}

export default Registerasvendor
