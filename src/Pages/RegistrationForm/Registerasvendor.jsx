import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';

const Registerasvendor = () => {
    const [company_name, setcompany_name] = useState("");
    const [year_establishment, setyear_establishment] = useState("");
    const [pan_no, setpan_no] = useState("");
    const [gst_no, setgst_no] = useState("");
    const [reg_officeadd, setreg_officeadd] = useState("");
    const [branch_officeadd, setbranch_officeadd] = useState("");
    const [office_city, setoffice_city] = useState("");
    const [office_state, setoffice_state] = useState("");
    const [office_pincode, setoffice_pincode] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [no_of_staff, setno_of_staff] = useState("");
    const [turn_over, setturn_over] = useState("");
    const [no_of_vehicle, setno_of_vehicle] = useState("");
    const [car_no, setcar_no] = useState("");
    const [model_no, setmodel_no] = useState("");
    const [car_color, setcar_color] = useState("");
    const [bank_name, setbank_name] = useState("");
    const [account_no, setaccount_no] = useState("");
    const [ifsc_code, setifsc_code] = useState("");
    const [upi, setupi] = useState("");
    const [cancelled_cheque, setcancelled_cheque] = useState("");
    const [name, setname] = useState("");
    const [address, setaddress] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [jobtitle, setjobtitle] = useState("");
    const [office_no, setoffice_no] = useState("");
    const [mobile_no, setmobile_no] = useState("");
    const [adhaar_card, setadhaar_card] = useState("");
    const [dl_no, setdl_no] = useState("");
    const [dl_expdate, setdl_expdate] = useState("");
    const [images, setimages] = useState("");
    const [police_verification, setpolice_verification] = useState("");
    const [vehicletype, setvehicletype] = useState("");
    const [reg_certificate, setreg_certificate] = useState("");
    const [permit, setpermit] = useState("");
    const [insurance_expdate, setinsurance_expdate] = useState("");
    const [vehicle_img, setvehicle_img] = useState("");
    const [car_selfie, setcar_selfie] = useState("");

    const resetform = () => {
        setcompany_name("");
        setyear_establishment("");
        setpan_no("");
        setgst_no("");
        setreg_officeadd("");
        setbranch_officeadd("");
        setoffice_city("");
        setoffice_state("");
        setoffice_pincode("");
        setemail("");
        setphone("");
        setno_of_staff("");
        setturn_over("");
        setno_of_vehicle("");
        setcar_no("");
        setmodel_no("");
        setcar_color("");
        setbank_name("");
        setaccount_no("");
        setifsc_code("");
        setupi("");
        setcancelled_cheque("");
        setname("");
        setaddress("");
        setcity("");
        setstate("");
        setpincode("");
        setjobtitle("");
        setoffice_no("");
        setmobile_no("");
        setadhaar_card("");
        setdl_no("");
        setdl_expdate("");
        setimages("");
        setpolice_verification("");
        setvehicletype("");
        setreg_certificate("");
        setpermit("");
        setinsurance_expdate("");
        setvehicle_img("");
        setcar_selfie("");
    };


    const handlecheque = (e) => {
        const selectedfiles = e.target.files[0];
        setcancelled_cheque(selectedfiles);
    }
    const handleadhaar = (e) => {
        const selectedfiles = e.target.files[0];
        setadhaar_card(selectedfiles);
    }
    const handleimage = (e) => {
        const selectedfiles = Array.from(e.target.files);
        setimages(selectedfiles);
    };
    // const handleimage = (e) => {
    //     const newFiles = Array.from(e.target.files);
    //     setimages(prevImages => [...prevImages, ...newFiles]);
    // };
    const handleverification = (e) => {
        const selectedfiles = e.target.files[0];
        setpolice_verification(selectedfiles);
    }
    const handleregistrationcertificate = (e) => {
        const selectedfiles = e.target.files[0];
        setreg_certificate(selectedfiles);
    }
    const handlepermit = (e) => {
        const selectedfiles = e.target.files[0];
        setpermit(selectedfiles);
    }
    const handlevehiclephot = (e) => {
        const selectedfiles = e.target.files[0];
        setvehicle_img(selectedfiles);
    }
    const handlecarselfie = (e) => {
        const selectedfiles = e.target.files[0];
        setcar_selfie(selectedfiles);
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        let formdata = new FormData();

        formdata.append("company_name", company_name);
        formdata.append("year_establishment", year_establishment);
        formdata.append("pan_no", pan_no);
        formdata.append("gst_no", gst_no);
        formdata.append("reg_officeadd", reg_officeadd);
        formdata.append("branch_officeadd", branch_officeadd);
        formdata.append("office_city", office_city);
        formdata.append("office_state", office_state);
        formdata.append("office_pincode", office_pincode);
        formdata.append("email", email);
        formdata.append("phone", phone);
        formdata.append("no_of_staff", no_of_staff);
        formdata.append("turn_over", turn_over);
        formdata.append("no_of_vehicle", no_of_vehicle);
        formdata.append("car_no", car_no);
        formdata.append("model_no", model_no);
        formdata.append("car_color", car_color);
        formdata.append("bank_name", bank_name);
        formdata.append("account_no", account_no);
        formdata.append("ifsc_code", ifsc_code);
        formdata.append("upi", upi);
        formdata.append("cancelled_cheque", cancelled_cheque);
        formdata.append("name", name);
        formdata.append("address", address);
        formdata.append("city", city);
        formdata.append("state", state);
        formdata.append("pincode", pincode);
        formdata.append("jobtitle", jobtitle);
        formdata.append("office_no", office_no);
        formdata.append("mobile_no", mobile_no);
        formdata.append("adhaar_card", adhaar_card);
        formdata.append("dl_no", dl_no);
        formdata.append("dl_expdate", dl_expdate);
        images.forEach((image) => {
            formdata.append("images", image);
        });
       
        formdata.append("police_verification", police_verification);
        formdata.append("vehicletype", vehicletype);
        formdata.append("reg_certificate", reg_certificate);
        formdata.append("permit", permit);
        formdata.append("insurance_expdate", insurance_expdate);
        formdata.append("vehicle_img", vehicle_img);
        formdata.append("car_selfie", car_selfie);

        try {
            const resp = await axios.post(`${BaseUrl}vendorform`, formdata);
            console.log(resp);
            if (resp.data.error === 0) {
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
            <section className="lg:py-10 py-5 lg:px-20 px-5 bg-gray-50">
                <div className="container mx-auto">
                    <form onSubmit={handlesubmit}>
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
                                    value={company_name}
                                    onChange={(e) => setcompany_name(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={year_establishment}
                                    onChange={(e) => setyear_establishment(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={pan_no}
                                    onChange={(e) => setpan_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={gst_no}
                                    onChange={(e) => setgst_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={reg_officeadd}
                                    onChange={(e) => setreg_officeadd(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={office_city}
                                    onChange={(e) => setoffice_city(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={office_state}
                                    onChange={(e) => setoffice_state(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={office_pincode}
                                    onChange={(e) => setoffice_pincode(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={branch_officeadd}
                                    onChange={(e) => setbranch_officeadd(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    maxLength={10}
                                    placeholder="Enter phone no"
                                    value={phone}
                                    onChange={(e) => setphone(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={no_of_staff}
                                    onChange={(e) => setno_of_staff(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={turn_over}
                                    onChange={(e) => setturn_over(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={no_of_vehicle}
                                    onChange={(e) => setno_of_vehicle(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                    Car No
                                </label>
                                <input
                                    type="text"
                                    id="carno"
                                    name="carno"
                                    placeholder="Enter car no"
                                    value={car_no}
                                    onChange={(e) => setcar_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                    Model No
                                </label>
                                <input
                                    type="text"
                                    id="modelno"
                                    name="modelno"
                                    placeholder="Enter model no"
                                    value={model_no}
                                    onChange={(e) => setmodel_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                    Car Colour

                                </label>
                                <input
                                    type="text"
                                    id="carcolour"
                                    name="carcolour"
                                    placeholder="Enter car color"
                                    value={car_color}
                                    onChange={(e) => setcar_color(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={bank_name}
                                    onChange={(e) => setbank_name(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={account_no}
                                    onChange={(e) => setaccount_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={ifsc_code}
                                    onChange={(e) => setifsc_code(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={upi}
                                    onChange={(e) => setupi(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handlecheque}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={name}
                                    onChange={(e) => setname(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={address}
                                    onChange={(e) => setaddress(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={city}
                                    onChange={(e) => setcity(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={state}
                                    onChange={(e) => setstate(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={pincode}
                                    onChange={(e) => setpincode(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={jobtitle}
                                    onChange={(e) => setjobtitle(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={office_no}
                                    onChange={(e) => setoffice_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mobile Number / WhatsApp No
                                </label>
                                <input
                                    type="tel"
                                    id="mobilenumber"
                                    name="mobilenumber"
                                    maxLength={10}
                                    placeholder="Enter mobile or whatsApp number"
                                    value={mobile_no}
                                    onChange={(e) => setmobile_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handleadhaar}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={dl_no}
                                    onChange={(e) => setdl_no(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={dl_expdate}
                                    onChange={(e) => setdl_expdate(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handleimage}
                                    multiple
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handleverification}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={vehicletype}
                                    onChange={(e) => setvehicletype(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handleregistrationcertificate}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handlepermit}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    value={insurance_expdate}
                                    onChange={(e) => setinsurance_expdate(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handlevehiclephot}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
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
                                    onChange={handlecarselfie}
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
            </section>


        </>
    )
}

export default Registerasvendor
