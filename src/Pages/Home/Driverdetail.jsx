import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { BaseUrl } from '../../Api/BaseUrl';
import Select from 'react-select';

const Driverdetail = () => {
    const [activeIndex, setActiveIndex] = useState("");
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    const faqdata = [
        {
            question: "Can I a ach any car / Cabs? ",
            answer: "Your car must meet Our eligibility criteria, which include its model, condi on, and compliance with commercial permits. "
        },
        {
            question: "Do I need a commercial driving license. ",
            answer: "Yes, drivers must have a valid commercial driving license to operate a car."
        },
        {
            question: "How much me to get registra on process done?",
            answer: "The process typically takes 3–7 days, depending on how quickly the documents are submi ed and approved."
        },
        {
            question: "Can I a ach mul ple cars under one account? ?",
            answer: "Yes, you can a ach several vehicles under one account as a fleet operator."
        },
        {
            question: "Is there any registra on fee for joining Partner program? ",
            answer: "We charge a nominal registra on fee which varies across ci es. It’s best to check directly during the registra on process."
        },
    ]
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [dob, setdob] = useState("");
    const [marital_status, setmarital_status] = useState("");
    const [gender, setgender] = useState("");
    const [pan_no, setpan_no] = useState("");
    const [adhaar_no, setadhaar_no] = useState("");
    const [dl_no, setdl_no] = useState("");
    const [exp_date, setexp_date] = useState("");
    const [images, setimages] = useState("");
    const [police_verification, setpolice_verification] = useState("");
    const [rc, setrc] = useState("");
    const [permit, setpermit] = useState("");
    const [insurance, setinsurance] = useState("");
    const [vehicle_img, setvehicle_img] = useState("");
    const [vehicle_selfie, setvehicle_selfie] = useState("");
    const [bank_name, setbank_name] = useState("");
    const [account_no, setaccount_no] = useState("");
    const [ifsc, setifsc] = useState("");
    const [upi, setupi] = useState("");
    const [cancelled_cheque, setcancelled_cheque] = useState("");
    const [selectedService, setselectedService] = useState(null);
    const resetform = () => {
        setname("");
        setaddress("");
        setcity("");
        setstate("");
        setpincode("");
        setphone("");
        setemail("");
        setdob("");
        setmarital_status("");
        setgender("");
        setpan_no("");
        setadhaar_no("");
        setdl_no("");
        setexp_date("");
        setimages("");
        setpolice_verification("");
        setrc("");
        setpermit("");
        setinsurance("");
        setvehicle_img("");
        setvehicle_selfie("");
        setbank_name("");
        setaccount_no("");
        setifsc("");
        setupi("");
        setcancelled_cheque("");
        setselectedService("");
    };

    const serviceOptions = [
        { value: 'pickup_drop', label: 'Pick up and drop' },
        { value: 'day_use', label: 'Day use' },
        { value: 'one_way_cab', label: 'One Way cab' },
        { value: 'outstation_trip', label: 'Outstation Trip' },
        { value: 'child_women_friendly', label: 'Child / Women Friendly' },
        { value: 'sr_citizen_friendly', label: 'Sr Citizen Friendly' },
        { value: 'differently_abled', label: 'Differently abled Friendly' },
    ];
    const handleimage = (e) => {
        const selectedfiles = Array.from(e.target.files);
        setimages(selectedfiles);
    };
    const handleverification = (e) => {
        const selectedfiles = e.target.files[0]
        console.log(selectedfiles)
        setpolice_verification(selectedfiles);
    }
    const handlerc = (e) => {
        const selectedfiles = e.target.files[0]

        setrc(selectedfiles);
    }
    const handlepermit = (e) => {
        const selectedfiles = e.target.files[0]
        setpermit(selectedfiles);
    }
    const handleinsurance = (e) => {
        const selectedfiles = e.target.files[0]
        setinsurance(selectedfiles);
    }
    const handlevehiclephoto = (e) => {
        const selectedfiles = e.target.files[0]
        setvehicle_img(selectedfiles);
    }
    const hadlevehicleselfie = (e) => {
        const selectedfiles = e.target.files[0]
        setvehicle_selfie(selectedfiles);
    }
    const handlecheque = (e) => {
        const selectedfiles = e.target.files[0]
        setcancelled_cheque(selectedfiles);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();

        formdata.append("name", name);
        formdata.append("address", address);
        formdata.append("city", city);
        formdata.append("state", state);
        formdata.append("pincode", pincode);
        formdata.append("phone", phone);
        formdata.append("email", email);
        formdata.append("dob", dob);
        formdata.append("marital_status", marital_status);
        formdata.append("gender", gender),
            formdata.append("pan_no", pan_no);
        formdata.append("adhaar_no", adhaar_no);
        formdata.append("dl_no", dl_no);
        formdata.append("exp_date", exp_date);
        images.forEach((image) => {
            formdata.append("images", image);
        });
        formdata.append("police_verification", police_verification);
        formdata.append("rc", rc);
        formdata.append("permit", permit);
        formdata.append("insurance", insurance);
        formdata.append("vehicle_img", vehicle_img);
        formdata.append("vehicle_selfie", vehicle_selfie);
        formdata.append("bank_name", bank_name);
        formdata.append("account_no", account_no);
        formdata.append("ifsc", ifsc);
        formdata.append("upi", upi);
        formdata.append("cancelled_cheque", cancelled_cheque);
        // ✅ Add selected service(s)
        if (Array.isArray(selectedService)) {
            // For multi-select
            selectedService.forEach((service) => {
                formdata.append("service_area[]", service.value);
            });
        } else if (selectedService?.value) {
            // For single select
            formdata.append("service_area", selectedService.value);
        }

        try {
            const resp = await axios.post(`${BaseUrl}driverform`, formdata);
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
    };

    return (
        <>

            <div className="bg-gray-50 md:py-12 py-5 px-6 md:px-20">
                <div className=' mb-5'>
                    <h2 className="md:text-3xl text-xl font-bold text-center  mb-5 text-black">🚗 Drive with Us – Start Your Journey Today!</h2>
                    <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black  text-center">Driver Registration Form </h3>
                    <form onSubmit={handlesubmit}>
                        <div className="w-full bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4 mt-4">
                            <BsCircleFill /> Personal Information
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Enter  name"
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="establish" className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Enter address"
                                    value={address}
                                    onChange={(e) => setaddress(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="pancard" className="block text-sm font-medium text-gray-700 mb-2">
                                    City
                                </label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="Enter city"
                                    value={city}
                                    onChange={(e) => setcity(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    State
                                </label>
                                <input
                                    type="text"
                                    id="state"
                                    name="state"
                                    placeholder="Enter state"
                                    value={state}
                                    onChange={(e) => setstate(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    PIN Code
                                </label>
                                <input
                                    type="text"
                                    id="pincode"
                                    name="pincode"
                                    placeholder="Enter pincode"
                                    value={pincode}
                                    onChange={(e) => setpincode(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone Numbers
                                </label>
                                <input
                                    type="tel"
                                    id="phoneno"
                                    name="phoneno"
                                    maxLength={10}
                                    placeholder="Enter phone no"
                                    value={phone}
                                    onChange={(e) => setphone(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Email ID
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Date of Birth
                                </label>
                                <input
                                    type="date"
                                    id="date of birth"
                                    name="date of borth"
                                    value={dob}
                                    onChange={(e) => setdob(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Marital Status
                                </label>
                                <input
                                    type="text"
                                    id="marital status"
                                    name="marital status"
                                    placeholder="Enter marital status"
                                    value={marital_status}
                                    onChange={(e) => setmarital_status(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                                    Gender
                                </label>
                                <select
                                    id="gender"
                                    name="gender"
                                    value={gender}
                                    onChange={(e) => setgender(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                >
                                    <option value="" disabled>Select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                        </div>
                        <div className="w-full bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4 mt-4">
                            <BsCircleFill /> Document Uploads

                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                    PAN Card (PAN No.)
                                </label>
                                <input
                                    type="text"
                                    id="panno"
                                    name="panno"
                                    placeholder="Enter PAN no"
                                    value={pan_no}
                                    onChange={(e) => setpan_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="establish" className="block text-sm font-medium text-gray-700 mb-2">
                                    Aadhar Card (Aadhar No.)
                                </label>
                                <input
                                    type="text"
                                    id="adhaarno"
                                    name="adhaarno"
                                    placeholder="Enter adhaar no"
                                    value={adhaar_no}
                                    onChange={(e) => setadhaar_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="pancard" className="block text-sm font-medium text-gray-700 mb-2">
                                    Driving License (DL No)
                                </label>
                                <input
                                    type="text"
                                    id="DLno"
                                    name="DLno"
                                    placeholder="Enter DL no"
                                    value={dl_no}
                                    onChange={(e) => setdl_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Expiry Date
                                </label>
                                <input
                                    type="date"
                                    id="expirydate"
                                    name="expirydate"
                                    placeholder="Enter state"
                                    value={exp_date}
                                    onChange={(e) => setexp_date(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Photographs (2 Passport Size)
                                </label>
                                <input
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={handleimage}
                                    multiple
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Police Verification / Self Verification Document
                                </label>
                                <input
                                    type="file"
                                    id="policeverification"
                                    name="policeverification"
                                    onChange={handleverification}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>

                        </div>
                        <div className="w-full bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4 mt-4">
                            <BsCircleFill /> Vehicle Information


                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                    RC
                                </label>
                                <input
                                    type="file"
                                    id="rc"
                                    name="rc"
                                    onChange={handlerc}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="establish" className="block text-sm font-medium text-gray-700 mb-2">
                                    Permit
                                </label>
                                <input
                                    type="file"
                                    id="permit"
                                    name="permit"
                                    onChange={handlepermit}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="pancard" className="block text-sm font-medium text-gray-700 mb-2">
                                    Insurance (DOE)
                                </label>
                                <input
                                    type="file"
                                    id="insurance"
                                    name="insurance"
                                    onChange={handleinsurance}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Vehicle Photo
                                </label>
                                <input
                                    type="file"
                                    id="vehiclephoto"
                                    name="vehiclephoto"
                                    placeholder="Enter state"
                                    onChange={handlevehiclephoto}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Selfie with Vehicle
                                </label>
                                <input
                                    type="file"
                                    id="vehicleselfie"
                                    name="vehicleselfie"
                                    multiple
                                    onChange={hadlevehicleselfie}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Service Area<span className='text-red-600'>  (You can select multiple service areas)</span>
                                </label>
                                <Select
                                    id="service"
                                    options={serviceOptions}
                                    value={selectedService}
                                    onChange={setselectedService}
                                    isMulti
                                    placeholder="Select service"
                                    className="w-full"
                                    classNamePrefix="custom-select"
                                    styles={{
                                        control: (base, state) => ({
                                            ...base,
                                            padding: '0.25rem 0.5rem',
                                            borderRadius: '0.5rem',
                                            borderColor: state.isFocused ? '#000' : '#d1d5db', // black or gray-300
                                            boxShadow: state.isFocused ? '0 0 0 1px #000' : 'none',
                                            '&:hover': {
                                                borderColor: '#000',
                                            },
                                            minHeight: '40px',
                                        }),
                                        valueContainer: (base) => ({
                                            ...base,
                                            padding: '0px',
                                        }),
                                        input: (base) => ({
                                            ...base,
                                            margin: 0,
                                            padding: 0,
                                        }),
                                        indicatorsContainer: (base) => ({
                                            ...base,
                                            height: '40px',
                                        }),
                                    }}
                                />

                            </div>


                        </div>
                        <div className="w-full bg-gray-200 text-black text-sm p-2 border-l border-black flex items-center gap-2 rounded-md mb-4 mt-4">
                            <BsCircleFill /> Bank Details
                        </div>

                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">

                            <div>
                                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Bank Name
                                </label>
                                <input
                                    type="text"
                                    id="bankname"
                                    name="bankname"
                                    placeholder='Enter bankname'
                                    value={bank_name}
                                    onChange={(e) => setbank_name(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="establish" className="block text-sm font-medium text-gray-700 mb-2">
                                    Account Number
                                </label>
                                <input
                                    type="text"
                                    id="accountnumber"
                                    name="accountnumber"
                                    placeholder='Enter account no'
                                    value={account_no}
                                    onChange={(e) => setaccount_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>


                            <div>
                                <label htmlFor="pancard" className="block text-sm font-medium text-gray-700 mb-2">
                                    IFSC Code
                                </label>
                                <input
                                    type="text"
                                    id="ifsccode"
                                    name="ifsccode"
                                    placeholder='Enter IFSC code'
                                    value={ifsc}
                                    onChange={(e) => setifsc(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="pancard" className="block text-sm font-medium text-gray-700 mb-2">
                                    UPI ID
                                </label>
                                <input
                                    type="text"
                                    id="upiid"
                                    name="upiid"
                                    placeholder='Enter UPI ID'
                                    value={upi}
                                    onChange={(e) => setupi(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="gst" className="block text-sm font-medium text-gray-700 mb-2">
                                    Cancelled Cheque
                                </label>
                                <input
                                    type="file"
                                    id="cheque"
                                    name="cheque"
                                    onChange={handlecheque}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                        </div>
                        <div className='mt-4'>
                            <button type='submit' className='text-white bg-black px-6 py-2 rounded-md'>
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>



                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white md:p-6 p-4 rounded-xl shadow-md">
                        <h3 className="md:text-xl text-lg font-semibold mb-2">📝 Registration with the Platform</h3>
                        <p> Complete the online registration process by providing all the necessary details about yourself and your
                            vehicle.</p>
                    </div>
                    <div className="bg-white  md:p-6 p-4 rounded-xl shadow-md">
                        <h3 className="md:text-xl text-lg font-semibold mb-2">🔓 Activation and Account Setup</h3>
                        <p>
                            Once your registration is approved, you will need to download the respective mobile app and set up your driver account.
                        </p>
                    </div>
                    <div className="bg-white  md:p-6 p-4 rounded-xl shadow-md">
                        <h3 className="md:text-xl text-lg font-semibold mb-2">🕒 Flexible Work Hours</h3>
                        <p> You can choose your own schedule and work hours, allowing for greater flexibility and work-life balance. </p>
                    </div>
                    <div className="bg-white md:p-6 p-4 rounded-xl shadow-md">
                        <h3 className="md:text-xl text-lg font-semibold mb-2">💳 Cashless Transactions</h3>
                        <p>Passengers can pay electronically through the app, which provides convenience and reduces the need for cash
                            handling.</p>
                    </div>
                    <div className="bg-white md:p-6 p-4 rounded-xl shadow-md">
                        <h3 className="md:text-xl text-lg font-semibold mb-2">🛡️ Insurance Coverage</h3>
                        <p>Provide insurance coverage for both you and your passengers during the rides, offering an added layer of protection. </p>
                    </div>
                    <div className="bg-white md:p-6 p-4 rounded-xl shadow-md">
                        <h3 className="md:text-xl text-lg font-semibold mb-2">⭐ Reputation Building</h3>
                        <p>Maintaining a good rating and positive feedback from passengers can help you build a strong reputation as a reliable driver on the platform. </p>
                    </div>
                </div>
                <div className="mt-12 space-y-5 ">

                    {/* Driver Requirements */}
                    <div className="bg-white shadow-md rounded-xl md:p-6 p-4 border-l-4 border-blue-500">
                        <div className="flex items-start md:gap-4 gap-2">
                            <div className="bg-blue-500 text-white md:p-3 p-2 rounded-full md:text-lg text-sm">📋</div>
                            <div>
                                <h3 className="md:text-2xl text-lg font-bold mb-2 text-blue-600"> Requirements</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 md:text-[16px] text-[14px]">
                                    <li> 18 years at the time of signup
                                    </li>
                                    <li>Clear a background screening</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Required Documents */}
                    <div className="bg-white shadow-md rounded-xl md:p-6 p-4 border-l-4 border-green-500">
                        <div className="flex items-start md:gap-4 gap-2">
                            <div className="bg-green-500 text-white  md:p-3 p-2 rounded-full md:text-lg text-sm">📑</div>
                            <div>
                                <h3 className="md:text-2xl text-lg  font-bold mb-2 text-green-600">Documents</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 md:text-[16px] text-[14px]">
                                    <li>Valid Driver’s License (Private or Commercial), if you plan to drive</li>
                                    <li>Proof of residency in your city, state or province
                                    </li>
                                    <li>Car documents such as commercial insurance, vehicle registration cerƟficate, permit </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Signup Process */}
                    <div className="bg-white shadow-md rounded-xl md:p-6 p-4 border-l-4 border-yellow-500">
                        <div className="flex items-start md:gap-4 gap-2">
                            <div className="bg-yellow-500 text-white md:p-3 p-2 rounded-full md:text-lg text-sm">🛎️</div>
                            <div>
                                <h3 className="md:text-2xl text-lg font-bold mb-2 text-yellow-600">Signup Process</h3>
                                <ul className="list-disc list-inside text-gray-700 space-y-1 md:text-[16px] text-[14px]">
                                    <li>Visit the nearest Partner Seva Kendra in your city or Visit Website or Scan QR code </li>
                                    <li>Submit documents and photo </li>
                                    <li>Provide information for a background check
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Training Program */}
                    <div className="bg-white shadow-md rounded-xl md:p-6 p-4 border-l-4 border-purple-500">
                        <div className="flex items-start md:gap-4 gap-2">
                            <div className="bg-purple-500 text-white p-3 rounded-full  md:text-lg text-sm">🎓</div>
                            <div>
                                <h3 className="md:text-2xl text-lg font-bold mb-2 text-purple-600">Training Program</h3>
                                <p className="text-gray-700 md:text-[16px] text-[14px]">
                                    Free Training program to each driver – Help them to create more money and social value 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="md:mt-16 mt-10 bg-gradient-to-br from-blue-50 to-white md:p-8 p-4 rounded-2xl shadow-lg">

                    {/* Header */}
                    <div className="text-center mb-6">
                        <h2 className="md:text-3xl text-xl font-bold text-black">🚖 Driver’s Sign-up Programme <span className="text-red-600">(Promotional Offer)</span></h2>
                        <p className="text-gray-600 mt-2 md:text-[16px] text-[14px]">This is a pre-launching offer available for all Drivers and valid for a limited period.</p>
                    </div>

                    {/* Offer Details */}
                    <div className="space-y-6 text-gray-700 text-base">
                        <ul className="list-disc list-inside space-y-1 md:text-[16px] text-[14px]">
                            <li>Fill the forms available in Hindi & English</li>
                            <li>Attach supporting documents</li>
                            <li>Incentives on completed rides</li>
                            <li>Waiver in Service fees</li>
                            <li>Reward / offers / loyalty Points convertible into E-Cash</li>
                            <li>Any payment due will be automatically added to your account after you complete the required trips.</li>
                            <li>
                                Earnings from your Trips, Tips and Promotions (after certain charges are deducted, such as city or local government charges,
                                Service Fee if any) are included toward your guaranteed amount.
                            </li>
                            <li>Offers and Terms are subject to change.</li>
                            <li>This is a promotional offer and is not a promise or guarantee of future earnings.</li>
                            <li>
                                Earnings from your trips (after service fees and certain charges are deducted, such as city or local government charges) are
                                included toward your guaranteed amount; any tips and promotions you make are on top of that amount.
                            </li>
                            <li>
                                Any payment due will be automatically added to your account after you complete the required trips. We reserve the right to
                                withhold or deduct payments that it determines or believes were fraudulent, illegal, in error, or in violation of the driver
                                terms or these terms. Limited time only. Offer and terms are subject to change.
                            </li>
                        </ul>

                        {/* Document Table */}
                        <div className="md:mt-8 mt-4">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-4">📄 Document Type & Requirement</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 md:text-sm text-[12px]">
                                    <thead className="bg-gray-100 text-gray-800">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Document Type</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">PAN Card</td>
                                            <td className="border border-gray-300 px-4 py-2">Mandatory for tax compliance</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Aadhaar Card</td>
                                            <td className="border border-gray-300 px-4 py-2">Identity verification</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Cancelled Cheque/Bank Passbook</td>
                                            <td className="border border-gray-300 px-4 py-2">For linking your bank account</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Address Proof</td>
                                            <td className="border border-gray-300 px-4 py-2">Utility bill, voter ID, or driving license</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Recent Passport-Sized Photos</td>
                                            <td className="border border-gray-300 px-4 py-2">2 copies</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Reminder Note */}
                        <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                            <p className="text-blue-800 sm:text-sm text-xs">
                                <strong>Note:</strong> Cabs registration requires accurate and valid owner details to ensure smooth processing. Be sure to keep soft copies of all documents ready for upload.
                            </p>
                        </div>
                        <div className="md:mt-8 mt-4">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-4">🚖 Car Documents </h3>
                            <p className="text-gray-600 md:my-2 my-1  md:text-[16px] text-[14px]">Here is a list of documents required for a vehicle to be attached:</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 md:text-sm text-[12px]">
                                    <thead className="bg-gray-100 text-gray-800">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Document Type</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">RC Book (Registration Certificate) </td>
                                            <td className="border border-gray-300 px-4 py-2">Verifies car ownership </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Insurance Policy</td>
                                            <td className="border border-gray-300 px-4 py-2">Comprehensive, valid insurance cover</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Road Tax Clearance Certificate
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">Proof of road tax payment </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Pollution Under Control (PUC) Certificate</td>
                                            <td className="border border-gray-300 px-4 py-2"> Ensures car complies with emission norms </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Commercial Permit </td>
                                            <td className="border border-gray-300 px-4 py-2">Mandatory if applying for business purposes </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                            <p className="text-blue-800 sm:text-sm text-xs">
                                <strong>Note:</strong> The car must meet  safety and cleanliness standards. Older or poorly maintained vehicles may not qualify.
                            </p>
                        </div>
                        <div className="md:mt-8 mt-4">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-4">👨‍✈️ Driver Documents  </h3>
                            <p className="text-gray-600 my-2 md:text-[16px] text-[14px]">If you hire a driver or plan to drive the vehicle yourself, the following driver documents are required: </p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 md:text-sm text-[12px]">
                                    <thead className="bg-gray-100 text-gray-800">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Document Type</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Requirement</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Valid Driver’s License
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">Proof the driver is legally permitted</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Police Verification </td>
                                            <td className="border border-gray-300 px-4 py-2">Confirms a clean background check </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Medical Fitness Certificate
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2"> States the driver is fit for duty </td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Aadhaar Card </td>
                                            <td className="border border-gray-300 px-4 py-2">Identity verification</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Passport-Sized Photos </td>
                                            <td className="border border-gray-300 px-4 py-2">Recent, clear photos  </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                            <p className="text-blue-800 sm:text-sm text-xs">
                                <strong>Note:</strong> Drivers are also required to undergo onboarding and training program to ensure top-notch service quality.
                            </p>
                        </div>
                        <div className='md:mt-8 mt-4 space-y-1'>
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-4">How we help the  Drivers to Attach their Car with AGRAZ.  </h3>
                            <p className='text-gray-600 md:text-[16px] text-[14px]'>
                                AGRAZ offer online / offline end-to-end support to streamline the process and save you me and effort.
                            </p>
                            <p className='text-gray-600 md:text-[16px] text-[14px]'>
                                Here’s how we can help:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2 md:text-[16px] text-[14px]">
                                <li><span className='font-semibold text-black'>Document Assistance: </span>We guide you in collating and submittng all required documents for Cabs Registra on.</li>
                                <li><span className='font-semibold text-black'>Commercial Permits: </span> Need a commercial permit for your car? We’ll help you apply for and receive it hassle-free.</li>
                                <li><span className='font-semibold text-black'>Legal Compliance:  </span> Stay compliant with GST registra on and other legal norms.</li>
                                <li><span className='font-semibold text-black'>Step-by-Step Guidance: </span>From owner registra on to car verifica on and driver onboarding, we’ll walk you through the en re process.</li>
                            </ul>
                            <p className='text-gray-600 md:text-[16px] text-[14px]'>
                                Our assistance help you to quickly become our Partner and start your earnings journey without stress.
                            </p>

                        </div>

                        <div className="md:mt-8 mt-4">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-4">How Much Money and Bonus You Can Make with Cabs? </h3>
                            <p className="text-gray-600 my-2 md:text-[16px] text-[14px]">One of the top reasons people choose to a ach their cars with AGRAZ to the lucra ve earnings poten al. Here’s a breakdown of how much you can earn and the
                                addi onal bonuses & offers. Addi onally, AGRAZ offers promo onal bonuses for new registra ons. Drivers who consistently perform well and maintain high ra ngs
                                can earn addi onal incen ves.</p>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border border-gray-300 md:text-sm text-[12px]">
                                    <thead className="bg-gray-100 text-gray-800">
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Earning Type
                                            </th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Per Trip Earnings </td>
                                            <td className="border border-gray-300 px-4 py-2">₹12–₹15 per km depends on city and route</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Daily Earning Poten al </td>
                                            <td className="border border-gray-300 px-4 py-2">₹1,500–₹4,000 per dayr</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">Weekly or Monthly Bonuses
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">Performance & Service -based bonuses  </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:mt-8 mt-4 space-y-1">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-2">Why Choose AGRAZ  to A ach the Car? </h3>
                            <p className="text-gray-600 my-2 md:text-[16px] text-[14px]">A aching your car to AGRAZ offers numerous advantages for car owners and drivers alike. Here are the key benefits:</p>
                            <ul className="list-disc list-inside space-y-1 md:text-[16px] text-[14px]">
                                <li><span className='font-semibold text-black'>Best Income Source:</span>The Growing market and high demand for rides ensures a consistent flow of income.</li>
                                <li><span className='font-semibold text-black'> Flexibility:</span>Choose when and where to drive based on your convenience.</li>
                                <li><span className='font-semibold text-black'>Fair Payment Structure:</span>We maintain a transparent earning structure, offering fair payouts and bonuses.</li>
                                <li><span className='font-semibold text-black'>Modern Technology-Driven Pla orm: </span>With a user-friendly app for drivers, easy to manage trips, payments.</li>
                                <li><span className='font-semibold text-black'> Trusted Brand: </span>As a leading ride-hailing pla orm, customers trust for safety and reliability.</li>
                                <li><span className='font-semibold text-black'>  Customer Support:</span>AGRAZ offers 24/7 support for its partners to resolve any issues efficiently within specified me limit.</li>
                            </ul>

                        </div>
                        <div className="md:mt-8 mt-4 space-y-2">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-2">Conclusion</h3>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px]'>
                                A aching your car with AGRAZ  is a great way to leverage your vehicle as a source of income. With a straight forward Cabs Registra on process, a rac ve earning
                                poten al, and the flexibility to work on your terms, becoming a Partner can be a rewarding step.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px]'>
                                If you’re ready to take the plunge but need assistance, our Team (Online / Offline  available 24/7) From helping you compile the required documents to ensuring all
                                compliance requirements are met, we make the registra on process stress-free so you can focus on growing your OUR Business Model.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px]'>
                                Start your journey as an AGRAZ Partner today and drive your way to success!
                            </p>
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
            </div>

        </>
    )
}

export default Driverdetail
