import React from 'react'

const Policy = () => {
    return (
        <>
            {/* Banner */}
            <section className='innerbanner flex items-center justify-center relative sm:h-[300px] h-[200px] bg-cover bg-center'>
                <div className="absolute inset-0 bg-[#00000075] z-0"></div>
                <div className="container mx-auto z-10 text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white">Privacy Policy</h2>
                </div>
            </section>

            {/* Policy Content */}
            <section className='lg:px-20 px-5 py-10'>
                <div className="container mx-auto">
                    <div className="space-y-6 text-gray-600 md:text-lg text-sm text-justify">

                        <p>
                            At Verde Ride, we respect your privacy and are committed to protecting your personal
                            information. This Privacy Policy explains how we collect, use, and safeguard your
                            information when you use our ride-booking services for autos, cabs, and bikes.
                        </p>

                        {/* Information We Collect */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                1. Information We Collect
                            </h3>
                            <p>
                                When you use our platform, we may collect personal information such as your name,
                                contact number, email address, pickup and drop locations, and payment details.
                                This information helps us provide a smooth and reliable ride-booking experience.
                            </p>
                        </div>

                        {/* How We Use Information */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                2. How We Use Your Information
                            </h3>
                            <p>
                                Your information is used to process ride bookings, communicate ride updates,
                                improve service quality, and provide customer support. We may also use your
                                information to notify you about service updates, offers, or important changes
                                to our policies.
                            </p>
                        </div>

                        {/* Data Sharing */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                3. Sharing of Information
                            </h3>
                            <p>
                                We do not sell your personal information to third parties. However, your
                                information may be shared with trusted partners such as drivers, payment
                                processors, or service providers who help us deliver our services efficiently.
                                Information may also be shared if required by law or legal authorities.
                            </p>
                        </div>

                        {/* Data Security */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                4. Data Security
                            </h3>
                            <p>
                                We implement strong security measures to protect your personal data from
                                unauthorized access, misuse, or disclosure. While we strive to protect your
                                information, no method of online transmission or storage is completely secure.
                            </p>
                        </div>

                        {/* User Rights */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                5. Your Rights
                            </h3>
                            <p>
                                You have the right to access, update, or request deletion of your personal
                                information. If you wish to make changes to your account or request data
                                removal, you may contact our support team.
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                6. Contact Us
                            </h3>
                            <p>
                                If you have any questions or concerns regarding this Privacy Policy,
                                please contact us at:
                                <a
                                    href="mailto:info@verde-ride.com"
                                    className="text-green-600 font-medium ml-1"
                                >
                                    info@verde-ride.com
                                </a>
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Policy