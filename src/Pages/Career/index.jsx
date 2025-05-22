import React from 'react';

const Career = () => {
  

    return (
        <>
            {/* Banner */}
            <section className='innerbanner flex items-center justify-center relative sm:h-[300px] h-[200px] bg-cover bg-center '>
                <div className="absolute inset-0 bg-[#00000075] bg-opacity-50 z-0"></div>
                <div className="container mx-auto z-10 text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white">Career</h2>
                </div>
            </section>

            {/* Form Section */}
            <section className="md:py-16 py-10 bg-gray-50">
                <div className="container mx-auto max-w-2xl bg-white p-8 rounded-2xl shadow-xl">
                    <h3 className="md:text-3xl text-2xl font-semibold text-center mb-8">Join Our Team</h3>
                    <form  className="space-y-6">
                        {/* Name */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                               
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                               
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Mobile */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Mobile</label>
                            <input
                                type="tel"
                                name="mobile"
                              
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Resume Upload */}
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Upload Resume (PDF/DOC)</label>
                            <input
                                type="file"
                                name="resume"
                                accept=".pdf,.doc,.docx"
                              
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-black text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                            >
                                Submit 
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default Career;
