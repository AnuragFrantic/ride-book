import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BsCircleFill } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
import { LuMinus } from 'react-icons/lu';
import { toast } from 'react-toastify';
import { BaseUrl } from '../../Api/BaseUrl';
import Select from 'react-select';
import { FileInput, Input, Section, SelectField } from '../../Component/Common';
import PolygonEditorMap from '../../Component/PolygonEditorMap';

const Driverdetail = () => {
    const [activeIndex, setActiveIndex] = useState("");
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    const [cardata, setcardata] = useState([])


    const handleCarfetch = async () => {
        try {
            let res = await axios.get(`${BaseUrl}cars`)
            console.log(res.data)
            setcardata(res.data.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        handleCarfetch()
    }, [])
    const faqdata = [
        {
            question: "Can I attach any car / Cabs? ",
            answer: "Your car must meet Our eligibility criteria, which include its model, condition, and compliance with commercial permits. "
        },
        {
            question: "Do I need a commercial driving license. ",
            answer: "Yes, drivers must have a valid commercial driving license to operate a car."
        },
        {
            question: "How much me to get registration process done?",
            answer: "The process typically takes 3–7 days, depending on how quickly the documents are submitted and approved."
        },
        {
            question: "Can I attach multiple cars under one account? ",
            answer: "Yes, you can attach several vehicles under one account as a fleet operator."
        },
        {
            question: "Is there any registration fee for joining Partner program? ",
            answer: "We charge a nominal registration fee which varies across cities. It’s best to check directly during the registration  process."
        },
    ]
    const [form, setForm] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        car: "",
        pincode: "",
        phone: "",
        email: "",
        dob: "",
        marital_status: "",
        gender: "",
        plate_no: "",
        pan_no: "",
        aadhaar_no: "",
        driving_license_no: "",
        driving_license_expiry_date: "",
        bank_name: "",
        account_number: "",
        account_holder_name: "",
        ifsc: "",
        upi: "",
        city_you_drive_in: "",
    });

    const [files, setFiles] = useState({
        image: [],
        self_police_verification_doc: "",
        pan_front_image: "",
        driving_license: "",
        rc: "",
        aadhaar_front: "",
        aadhaar_back: "",
        permit: "",
        insurance: "",
        vehicle_img: "",
        selfie_with_vehicle: "",
        cancelled_cheque: "",
    });

    const [selectedService, setSelectedService] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleFile = (e) => {
        const { name, files: selected } = e.target;
        setFiles((prev) => ({
            ...prev,
            [name]: name === "image" ? Array.from(selected) : selected[0],
        }));
    };

    const resetForm = () => {
        setForm(Object.fromEntries(Object.keys(form).map((key) => [key, ""])));
        setFiles(Object.fromEntries(Object.keys(files).map((key) => [key, ""])));
        setSelectedService([]);
    };

    const [positions, setPositions] = useState([]);


    function convertToPolygon(coords) {
        if (!coords || coords.length < 3) {
            return null; // polygon needs at least 3 points
        }

        // Convert [{lat, lng}] → [[lng, lat]]
        let polygonCoords = coords.map(point => [point.lng, point.lat]);

        // Close polygon by repeating first point
        polygonCoords.push([coords[0].lng, coords[0].lat]);

        return {
            work_zones: {
                type: "Polygon",
                coordinates: [polygonCoords]
            }
        };
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData();

        // ✅ Append driver-related text fields
        Object.entries(form).forEach(([key, value]) => data.append(key, value));

        // ✅ Append driver-related files only (exclude vehicle files)
        const excludedVehicleFields = [
            "rc",
            "permit",
            "plate_no",
            "car",
            "insurance",
            "vehicle_img",
            "selfie_with_vehicle",
        ];

        Object.entries(files).forEach(([key, value]) => {
            if (!excludedVehicleFields.includes(key)) {
                if (Array.isArray(value)) value.forEach((v) => data.append(key, v));
                else if (value) data.append(key, value);
            }
        });

        // ✅ Convert and append polygon (work_zones)
        const workzone = convertToPolygon(positions);
        if (workzone) {
            data.append("work_zones", JSON.stringify(workzone.work_zones));
        }

        try {
            const res = await axios.post(`${BaseUrl}driver`, data);

            if (!res.data.error) {
                toast.success("Driver information submitted successfully!");


                handleVehicle(res.data.data._id);
                resetForm();
            } else {
                toast.error(res.data.message || "Something went wrong!");
            }
        } catch (err) {
            console.error(err);
            toast.error(err.response.data.errorMsg);


        }
    };




    const handleVehicle = async (driverId) => {
        const data = new FormData();

        // ✅ Append driver reference
        data.append("driver", driverId);

        // ✅ Append non-file fields (from your form state)
        data.append("plate_no", form.plate_no);
        data.append("car", form.car);
        data.append("role", "Driver")

        // ✅ Define file-related fields
        const vehicleFileFields = [
            "rc",
            "permit",
            "insurance",
            "vehicle_img",
            "selfie_with_vehicle",
        ];

        Object.entries(files).forEach(([key, value]) => {
            if (vehicleFileFields.includes(key)) {

                const formKey = key === "vehicle_img" ? "image" : key;

                if (Array.isArray(value)) {
                    value.forEach((v) => data.append(formKey, v));
                } else if (value) {
                    data.append(formKey, value);
                }
            }
        });

        // ✅ (Optional) Debug – see what's being sent
        for (let [key, val] of data.entries()) {
            console.log(`${key}:`, val);
        }

        try {
            const res = await axios.post(`${BaseUrl}vehicles/landing_create_vehicle`, data);
            if (!res.data.error) {
                // toast.success("Vehicle information submitted successfully!");
            } else {
                // toast.error(res.data.message || "Something went wrong!");
            }
        } catch (err) {
            console.error(err);
            // toast.error("Error submitting vehicle information");
        }
    };





    return (
        <>

            <div className="bg-gray-50 md:py-12 py-5 px-6 md:px-20">
                <div className=' mb-5'>
                    <h2 className="md:text-3xl text-xl font-bold text-center  mb-5 text-black"> Drive with Us – Start Your Journey Today!</h2>
                    <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black  text-center">Driver Registration Form </h3>
                    <form onSubmit={handleSubmit}>
                        {/* Personal Info Section */}
                        <Section title="Personal Information" icon={<BsCircleFill />}>
                            <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
                            <Input label="Address" name="address" value={form.address} onChange={handleChange} />
                            <Input label="City" name="city" value={form.city} onChange={handleChange} />
                            <Input label="State" name="state" value={form.state} onChange={handleChange} />
                            <Input label="PIN Code" name="pincode" value={form.pincode} onChange={handleChange} />
                            <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
                            <Input label="Email" name="email" value={form.email} onChange={handleChange} />
                            <Input label="DOB" name="dob" type="date" value={form.dob} onChange={handleChange} />
                            <Input label="City You Drive in" name="city_you_drive_in" value={form.city_you_drive_in} onChange={handleChange} />

                            <div className="">

                                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Marital Status</label>
                                <select name="marital_status" className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black' value={form.marital_status} onChange={handleChange} id="">
                                    <option value="">Select Marital Status</option>
                                    <option value="Married">Married</option>
                                    <option value="UnMarried">UnMarried</option>

                                </select>
                            </div>

                            <SelectField label="Gender" name="gender" value={form.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />
                        </Section>

                        {/* Document Uploads */}
                        <Section title="Document Uploads" icon={<BsCircleFill />}>
                            <Input label="PAN No" name="pan_no" value={form.pan_no} onChange={handleChange} />
                            <FileInput label="Pan Front Image" name="pan_front_image" onChange={handleFile} />

                            <Input label="Aadhaar No" name="aadhaar_no" value={form.aadhaar_no} onChange={handleChange} />
                            <FileInput label="Aadhaar Front Image" name="aadhaar_front" onChange={handleFile} />
                            <FileInput label="Aadhaar Back Image" name="aadhaar_back" onChange={handleFile} />


                            <Input label="DL No" name="driving_license_no" value={form.driving_license_no} onChange={handleChange} />

                            <FileInput label="Driving License" name="driving_license" onChange={handleFile} />
                            <Input label="DL Expiry Date" name="driving_license_expiry_date" type="date" value={form.driving_license_expiry_date} onChange={handleChange} />
                            <FileInput label="Photographs" name="image" onChange={handleFile} multiple />
                            <FileInput label="Police Verification" name="self_police_verification_doc" onChange={handleFile} />
                        </Section>

                        {/* Vehicle Info */}
                        <Section title="Vehicle Information" icon={<BsCircleFill />}>
                            <FileInput label="RC" name="rc" onChange={handleFile} />
                            <FileInput label="Permit" name="permit" onChange={handleFile} />
                            <div className="">
                                <label htmlFor="" className='block text-sm font-medium text-gray-700 mb-2'>Car</label>
                                <select name="car" className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-black' onChange={handleChange} id="">
                                    <option value="">Select Car</option>
                                    {cardata.map((item) => {
                                        return (
                                            <>
                                                <option value={item._id}>{item.name}</option>

                                            </>
                                        )
                                    })}

                                </select>
                            </div>
                            <Input label="Vehicle Plate Number" name="plate_no" type="text" value={form.plate_no} onChange={handleChange} />

                            <FileInput label="Insurance" name="insurance" onChange={handleFile} />
                            <FileInput label="Vehicle Photo" name="vehicle_img" onChange={handleFile} />
                            <FileInput label="Selfie with Vehicle" name="selfie_with_vehicle" onChange={handleFile} />



                        </Section>

                        <div className="mt-2">
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Service Area
                                </label>
                                <div style={{ height: "400px", width: "100%", borderRadius: "8px", overflow: "hidden" }}>
                                    <PolygonEditorMap
                                        positions={positions}
                                        setPositions={setPositions}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Bank Info */}
                        <Section title="Bank Details" icon={<BsCircleFill />}>
                            <Input label="Bank Name" name="bank_name" value={form.bank_name} onChange={handleChange} />
                            <Input label="Account No" name="account_number" value={form.account_number} onChange={handleChange} />
                            <Input label="Account Holder Name " name="account_holder_name" value={form.account_holder_name} onChange={handleChange} />

                            <Input label="IFSC Code" name="ifsc" value={form.ifsc} onChange={handleChange} />
                            <Input label="UPI ID" name="upi" value={form.upi} onChange={handleChange} />
                            <FileInput label="Cancelled Cheque" name="cancelled_cheque" onChange={handleFile} />
                        </Section>

                        <button type="submit" className="bg-black text-white px-6 py-2 rounded-md mt-4">
                            SUBMIT
                        </button>
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
                                AGRAZ offer online / offline end-to-end support to streamline the process and save you time and effort.
                            </p>
                            <p className='text-gray-600 md:text-[16px] text-[14px]'>
                                Here’s how we can help:
                            </p>
                            <ul className="list-disc list-inside space-y-1 mt-2 md:text-[16px] text-[14px]">
                                <li><span className='font-semibold text-black'>Document Assistance: </span>We guide you in collating and submittng all required documents for Cabs Registration.</li>
                                <li><span className='font-semibold text-black'>Commercial Permits: </span> Need a commercial permit for your car? We’ll help you apply for and receive it hassle-free.</li>
                                <li><span className='font-semibold text-black'>Legal Compliance:  </span> Stay compliant with GST registration and other legal norms.</li>
                                <li><span className='font-semibold text-black'>Step-by-Step Guidance: </span>From owner registration to car verification and driver onboarding, we’ll walk you through the entire process.</li>
                            </ul>
                            <p className='text-gray-600 md:text-[16px] text-[14px]'>
                                Our assistance help you to quickly become our Partner and start your earnings journey without stress.
                            </p>

                        </div>

                        <div className="md:mt-8 mt-4">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-4">How Much Money and Bonus You Can Make with Cabs? </h3>
                            <p className="text-gray-600 my-2 md:text-[16px] text-[14px]">One of the top reasons people choose to attach their cars with AGRAZ to the lucrative earnings potential. Here’s a breakdown of how much you can earn and the
                                additional bonuses & offers. Additionally, AGRAZ offers promotional bonuses for new registrations. Drivers who consistently perform well and maintain high ratings
                                can earn additional incentives.</p>
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
                                            <td className="border border-gray-300 px-4 py-2">Daily Earning Potential </td>
                                            <td className="border border-gray-300 px-4 py-2">₹1,500–₹4,000 per day</td>
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
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-2">Why Choose AGRAZ  to Attach the Car? </h3>
                            <p className="text-gray-600 my-2 md:text-[16px] text-[14px]">Attaching your car to AGRAZ offers numerous advantages for car owners and drivers alike. Here are the key benefits:</p>
                            <ul className="list-disc list-inside space-y-1 md:text-[16px] text-[14px]">
                                <li><span className='font-semibold text-black'>Best Income Source:</span>The Growing market and high demand for rides ensures a consistent flow of income.</li>
                                <li><span className='font-semibold text-black'> Flexibility:</span>Choose when and where to drive based on your convenience.</li>
                                <li><span className='font-semibold text-black'>Fair Payment Structure:</span>We maintain a transparent earning structure, offering fair payouts and bonuses.</li>
                                <li><span className='font-semibold text-black'>Modern Technology-Driven Platform: </span>With a user-friendly app for drivers, easy to manage trips, payments.</li>
                                <li><span className='font-semibold text-black'> Trusted Brand: </span>As a leading ride-hailing platform, customers trust for safety and reliability.</li>
                                <li><span className='font-semibold text-black'>  Customer Support:</span>AGRAZ offers 24/7 support for its partners to resolve any issues efficiently within specified time limit.</li>
                            </ul>

                        </div>
                        <div className="md:mt-8 mt-4 space-y-2">
                            <h3 className="md:text-2xl sm:text-xl text-lg font-semibold text-black mb-2">Conclusion</h3>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px]'>
                                Attaching your car with AGRAZ  is a great way to leverage your vehicle as a source of income. With a straight forward Cabs Registration process, attractive earning
                                potential, and the flexibility to work on your terms, becoming a Partner can be a rewarding step.
                            </p>
                            <p className='text-gray-600 my-2 md:text-[16px] text-[14px]'>
                                If you’re ready to take the plunge but need assistance, our Team (Online / Offline  available 24/7) From helping you compile the required documents to ensuring all
                                compliance requirements are met, we make the registration process stress-free so you can focus on growing your our Business Model.
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




