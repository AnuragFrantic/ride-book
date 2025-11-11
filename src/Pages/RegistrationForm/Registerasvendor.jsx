import axios from 'axios';
import React, { useState } from 'react'
import { BsCircleFill } from 'react-icons/bs'
import { BaseUrl } from '../../Api/BaseUrl';
import { toast } from 'react-toastify';
import { FileInput, Input, Section } from '../../Component/Common';
import PolygonEditorMap from '../../Component/PolygonEditorMap';

const Registerasvendor = () => {
    const [form, setForm] = useState({
        company_name: "",
        estb: "",
        pan_no: "",
        gst: "",
        address: "",
        branch_address: "",
        city: "",
        state: "",
        pincode: "",
        email: "",
        phone: "",
        no_of_staff: "",
        monthly_turn_over: "",
        no_of_vehicles: "",
        bank_name: "",
        account_number: "",
        account_holder_name: "",
        ifsc: "",
        upi: "",
        name: "",
        whats_app_number: "",
        office_address: "",
        office_city: "",
        office_state: "",
        office_pincode: "",
    });

    const [files, setFiles] = useState({
        cancelled_cheque: "",
        business_card: "",
        reg_certificate: "",
        permit: "",
        vehicle_img: "",
        car_selfie: "",
    });



    const [positions, setPositions] = useState([]);


    function convertToPolygon(coords) {
        if (!coords || coords.length < 3) {
            return null; // polygon needs at least 3 points
        }

        // Convert [{lat, lng}] → [[lng, lat]]
        const polygonCoords = coords.map((point) => [point.lng, point.lat]);

        // Close polygon by repeating the first point
        polygonCoords.push([coords[0].lng, coords[0].lat]);

        return {
            work_zones: {
                type: "Polygon",
                coordinates: polygonCoords, // ✅ Removed one array level
            },
        };
    }



    // ✅ Generic input handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ✅ Generic file handler
    const handleFile = (e) => {
        const { name, files: selected } = e.target;
        setFiles((prev) => ({
            ...prev,
            [name]: name === "image" ? Array.from(selected) : selected[0],
        }));
    };

    // ✅ Reset both form + files
    const resetForm = () => {
        setForm(Object.fromEntries(Object.keys(form).map((key) => [key, ""])));
        setFiles(Object.fromEntries(Object.keys(files).map((key) => [key, ""])));

    };

    const handlesubmit = async (e) => {
        e.preventDefault();

        let formdata = new FormData();


        Object.entries(form).forEach(([key, value]) => {
            formdata.append(key, value ?? ""); // ensures no undefined/null
        });


        Object.entries(files).forEach(([key, value]) => {
            if (Array.isArray(value)) {
                value.forEach((file) => formdata.append(key, file));
            } else if (value) {
                formdata.append(key, value);
            }
        });

        // ✅ Convert and append polygon (work_zones)
        const workzone = convertToPolygon(positions);
        if (workzone) {
            formdata.append("work_zones", JSON.stringify(workzone.work_zones));
            formdata.append("role", "68389bf4e1e051de972b2093")
        }

        try {
            const resp = await axios.post(`${BaseUrl}vendor/landing-page-vendor`, formdata, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log(resp);
            if (!resp.data.error) {
                toast.success("Form submitted successfully!");
                resetForm();
            } else {
                toast.error(resp.data.message || "Something went wrong!");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(error.response.data.message);

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


                        <Section title="Company Information" icon={<BsCircleFill />}>

                            <Input label="Company Name" name="company_name" value={form.company_name} onChange={handleChange} />
                            <Input label="ESTB" name="estb" value={form.estb} onChange={handleChange} />
                            <Input label="Office Phone" name="office_phone" value={form.office_phone} onChange={handleChange} />

                            <Input label="Pan Number" name="pan_no" value={form.pan_no} onChange={handleChange} />
                            <FileInput label="Pan Front Image" name="pan_front_image" onChange={handleFile} />

                            <Input label="GST" name="gst" value={form.gst} onChange={handleChange} />
                            <FileInput label="GST  Image" name="gst_image" onChange={handleFile} />

                        </Section>




                        <Section title="Office Addresses" icon={<BsCircleFill />}>
                            <Input label="Registered Office Address" name="office_address" value={form.office_address} onChange={handleChange} />
                            <Input label="City" name="office_city" value={form.office_city} onChange={handleChange} />
                            <Input label="State" name="office_state" value={form.office_state} onChange={handleChange} />
                            <Input label="Pin Code" name="office_pincode" value={form.office_pincode} onChange={handleChange} />
                            <Input label="Branch Office Address (if any)" name="branch_address" value={form.branch_address} onChange={handleChange} />
                        </Section>

                        <Section title="Contact Information" icon={<BsCircleFill />}>
                            <Input label="Email" name="email" value={form.email} onChange={handleChange} />
                            <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />


                        </Section>


                        <Section title="Company Operations" icon={<BsCircleFill />}>
                            <Input label="Number of Staff" name="no_of_staff" value={form.no_of_staff} onChange={handleChange} />
                            <Input label="Monthly Turn Over" name="monthly_turn_over" value={form.monthly_turn_over} onChange={handleChange} />
                            <Input label="Number of Vehicles" name="no_of_vehicles" value={form.no_of_vehicles} onChange={handleChange} />
                            <FileInput label="Business Card" name="business_card" onChange={handleFile} />


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

                        <Section title=" Bank Information" icon={<BsCircleFill />}>
                            <Input label="Bank Name" name="bank_name" value={form.bank_name} onChange={handleChange} />
                            <Input label="Account Number" name="account_number" value={form.account_number} onChange={handleChange} />
                            <Input label="Account Holder Name" name="account_holder_name" value={form.account_holder_name} onChange={handleChange} />
                            <Input label="ifsc" name="ifsc" value={form.ifsc} onChange={handleChange} />
                            <Input label="upi" name="upi" value={form.upi} onChange={handleChange} />



                            <FileInput label=" Cancelled Cheque" name="cancelled_cheque" onChange={handleFile} />


                        </Section>




                        <Section title=" Primary Contact Person Details" icon={<BsCircleFill />}>
                            <Input label="Name" name="name" value={form.name} onChange={handleChange} />
                            <Input label="Mobile Number / WhatsApp No" name="whats_app_number" value={form.whats_app_number} onChange={handleChange} />
                            <Input label="Registered Office Address" name="address" value={form.address} onChange={handleChange} />
                            <Input label="City" name="city" value={form.city} onChange={handleChange} />
                            <Input label="State" name="state" value={form.state} onChange={handleChange} />
                            <Input label="Pin Code" name="pincode" value={form.pincode} onChange={handleChange} />
                        </Section>










                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                            {/* <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    placeholder="Enter address"

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

                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                    required
                                />
                            </div> */}

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
