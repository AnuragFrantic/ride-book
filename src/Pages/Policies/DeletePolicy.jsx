import React from 'react'

const DeletePolicy = () => {
    return (
        <>
            {/* Banner */}
            <section className='innerbanner flex items-center justify-center relative sm:h-[300px] h-[200px] bg-cover bg-center'>
                <div className="absolute inset-0 bg-[#00000075] z-0"></div>
                <div className="container mx-auto z-10 text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white">
                        Delete Account Policy
                    </h2>
                </div>
            </section>

            {/* Content */}
            <section className='lg:px-20 px-5 py-10'>
                <div className="container mx-auto">
                    <div className="space-y-6 text-gray-600 md:text-lg text-sm text-justify">

                        <p>
                            At Verde Ride, we respect your right to control your personal data.
                            If you wish to delete your account and associated information from
                            our platform, you may request account deletion at any time.
                        </p>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                How to Request Account Deletion
                            </h3>
                            <p>
                                To delete your account, please send an email request from your
                                registered email address to our support team at:
                                <a
                                    href="mailto:info@verde-ride.com"
                                    className="text-green-600 font-medium ml-1"
                                >
                                    info@verde-ride.com
                                </a>
                                . Please include your registered phone number and account
                                details so that we can verify your identity.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                What Happens After Your Request
                            </h3>
                            <p>
                                Once we receive your request, our team will review and process
                                the deletion within a reasonable timeframe. Your account and
                                personal information will be permanently removed from our active
                                systems, except where retention is required for legal,
                                regulatory, or security purposes.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Data Retention
                            </h3>
                            <p>
                                Some information may be retained for a limited period to comply
                                with legal obligations, prevent fraud, resolve disputes, or
                                enforce our policies. After this period, the data will be
                                securely deleted.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Contact Us
                            </h3>
                            <p>
                                If you have any questions regarding account deletion or your
                                personal data, please contact us at
                                <a
                                    href="mailto:info@verde-ride.com"
                                    className="text-green-600 font-medium ml-1"
                                >
                                    info@verde-ride.com
                                </a>.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default DeletePolicy