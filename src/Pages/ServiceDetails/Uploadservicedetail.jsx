import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../../Api/BaseUrl';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

const Uploadservicedetail = () => {
    const [description, setdescription] = useState('');
    const [service, setservice] = useState('');
    const [data, setdata] = useState([]);
    const handledescription = (event, editor) => {
        const data = editor.getData();
        setdescription(data);
    };
    const handleservice = async () => {
        try {
            const res = await axios.get(`${BaseUrl}service`);
            console.log(res.data);
            setdata(res.data.data);

        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };
    useEffect(() => {
        handleservice();
    }, [])
    const handlesubmit = async (e) => {
        e.preventDefault();
        let requestdata = {
            service: service,
            description: description,
        };
        try {
            {
                await axios.post(`${BaseUrl}service-detail`, requestdata);
                console.log("Insight created successfully");
            }
            setservice('');
            setdescription('');

        } catch (err) {
            console.log("Error submitting insight:", err);
        }
    };

    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
                <div className="container  mx-auto">
                    <div className='bg-gradient-to-br from-blue-50 to-white md:p-8 p-4 rounded-2xl shadow-lg'>
                        <form onSubmit={handlesubmit}>
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5">
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Service
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={service}
                                        onChange={(e)=> setservice(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                                        required
                                    >
                                        <option value="" disabled selected>Select a service</option>
                                        {
                                            data.map((itm) => (
                                                <>
                                                    <option value={itm._id}>{itm.name}</option>
                                                </>
                                            ))
                                        }


                                    </select>
                                </div>
                                <div className='col-span-4'>
                                    <label htmlFor="serviceDescription" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Detail
                                    </label>

                                    <div className="border border-gray-300 rounded-lg p-2">
                                        <CKEditor
                                            editor={ClassicEditor}
                                            data={description || ""}
                                            onChange={handledescription}
                                        />
                                    </div>
                                </div>
                                <div className='mt-6'>
                                    <button type='submit' className='text-white bg-black px-6 py-2 rounded-md'>
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Uploadservicedetail
