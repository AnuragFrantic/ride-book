import React, { useEffect, useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { GrMapLocation } from 'react-icons/gr'
import { MdOutlineMail } from 'react-icons/md'
import contact from '../../assets/Image/contact.jpg'
import axios from 'axios'
import { BaseUrl } from '../../Api/BaseUrl'
import { toast } from 'react-toastify'

const Contactus = () => {
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [settingdata, setsettingdata] = useState([[]])
    const [subject, setsubject] = useState();
    const [message, setmessage] = useState();
    const resetform = () => {
        setname("");
        setemail("");
        setsubject("");
        setmessage("");
    }


    const handleSetting = async () => {
        let res = await axios.get(`${BaseUrl}settings?page=1&limit=100`)
        setsettingdata(res.data.data)
    }


    useEffect(() => {
        handleSetting()
    }, [])
    const handlesubmit = async (e) => {
        e.preventDefault();
        let requestdata = {
            name: name,
            email: email,
            subject: subject,
            message: message,
        }
        try {
            const resp = await axios.post(`${BaseUrl}contact-form`, requestdata);
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

            <section className='innerbanner flex items-center justify-center relative sm:h-[300px] h-[200px] bg-cover bg-center '>
                <div className="absolute inset-0 bg-[#00000075] bg-opacity-50 z-0"></div>
                <div className="container mx-auto z-10 text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white">Contact Us</h2>
                </div>
            </section>
            <section className="py-16 bg-gray-100 xl:px-30 lg:px-20 px-5 ">
                <div className="container  mx-auto">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                        <div className="col-span-1 text-center relative">
                            <div className="w-full bg-white rounded-[20px] p-7 contact-info h-full">
                                <div className='bg-black md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full flex justify-center items-center text-white mx-auto mb-4'>
                                    <GrMapLocation className='md:text-[30px] text-[20px]' />
                                </div>
                                <h2 className='text-[20px] font-[700] mb-[8px]'>
                                    Office Address
                                </h2>
                                <p className='text-[16px] font-[500]'>
                                    {settingdata.find(item => item.key === "office_address")?.value}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 text-center relative">
                            <div className="w-full bg-white rounded-[20px] p-7 contact-info h-full">
                                <div className='bg-black md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full flex justify-center items-center text-white mx-auto mb-4'>
                                    <FiPhoneCall className='md:text-[30px] text-[20px]' />
                                </div>
                                <h2 className='text-[20px] font-[700] mb-[8px]'>
                                    Call Us

                                </h2>
                                <p className='text-[16px] font-[500]'>
                                    {settingdata.find(item => item.key === "call_us")?.value}
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1 text-center relative">
                            <div className="w-full bg-white rounded-[20px] p-7 contact-info h-full">
                                <div className='bg-black md:h-[80px] h-[60px] md:w-[80px] w-[60px] rounded-full flex justify-center items-center text-white mx-auto mb-4'>
                                    <MdOutlineMail className='md:text-[30px] text-[20px]' />
                                </div>
                                <h2 className='text-[20px] font-[700] mb-[8px]'>
                                    Email Us

                                </h2>
                                <p className='text-[16px] font-[500]'>
                                    {settingdata.find(item => item.key === "email")?.value}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 bg-white md:p-10 p-5 rounded-[20px] mt-10 gap-10 items-center">
                        <div className="col-span-1 contact-img relative md:block hidden">
                            <img src={contact} alt='image' className='contactimg' />

                        </div>
                        <div className="col-span-1">
                            <div className="w-full">
                                <h2 className="lg:text-3xl text-xl font-bold mb-2">Get In Touch</h2>
                                {/* <p className="text-gray-500 mb-6">
                                    It is a long established fact that a reader will be distracted by the readable content of a page randomised words slightly when looking at its layout.
                                </p> */}

                                <form className="space-y-4" onSubmit={handlesubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Your Subject"
                                        value={subject}
                                        onChange={(e) => setsubject(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    />
                                    <textarea
                                        placeholder="Write Your Message"
                                        rows="5"
                                        value={message}
                                        onChange={(e) => setmessage(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="bg-black text-white font-semibold md:py-3 py-2 md:px-6 px-4 rounded-full flex items-center gap-2 transition-all duration-200 shadow-md md:text-lg text-sm"
                                    >
                                        SEND MESSAGE

                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Contactus
