import React from "react";

const Termscondition = () => {
    return (
        <>
            {/* Banner */}
            <section className="innerbanner flex items-center justify-center relative sm:h-[300px] h-[200px] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#00000075] z-0"></div>
                <div className="container mx-auto z-10 text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white">
                        Terms & Conditions
                    </h2>
                </div>
            </section>

            {/* Content */}
            <section className="lg:px-20 px-5 py-10">
                <div className="container mx-auto">
                    <div className="space-y-6 text-gray-600 md:text-lg text-sm text-justify">

                        <p>
                            By accessing and using the Verde Ride platform, you agree to comply
                            with and be bound by the following Terms and Conditions. These
                            terms govern your use of our services, including booking rides,
                            making payments, and interacting with drivers. If you do not agree
                            with these terms, please refrain from using our services.
                        </p>

                        {/* Use of Service */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                1. Use of Service
                            </h3>
                            <p>
                                Verde Ride provides a digital platform that allows users to book
                                transportation services such as autos, cabs, and bikes. You must
                                use the platform responsibly and only for lawful purposes. Users
                                must provide accurate information while registering or booking a
                                ride. Misuse of the service, including fraudulent bookings,
                                abusive behavior, or violation of local laws, may lead to account
                                suspension or termination.
                            </p>
                        </div>

                        {/* Booking Policy */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                2. Booking and Ride Availability
                            </h3>
                            <p>
                                All ride bookings are subject to driver availability and service
                                coverage in your area. While we strive to provide reliable and
                                timely rides, Verde Ride does not guarantee availability at all
                                times. Estimated arrival times are approximate and may vary due
                                to traffic conditions, weather, or unforeseen circumstances.
                            </p>
                        </div>

                        {/* Pricing */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                3. Pricing and Payments
                            </h3>
                            <p>
                                Ride fares are calculated based on factors such as distance,
                                duration, demand, and applicable service charges. Prices may
                                change during peak hours or due to surge pricing. Users agree to
                                pay the fare displayed at the time of booking through the
                                available payment methods on the platform.
                            </p>
                        </div>

                        {/* Cancellation */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                4. Cancellation and Refund Policy
                            </h3>
                            <p>
                                Users may cancel a ride within the permitted time frame.
                                Cancellation fees may apply if the driver has already started
                                traveling to your location or has arrived at the pickup point.
                                Refunds, if applicable, will be processed according to our
                                cancellation and refund policy.
                            </p>
                        </div>

                        {/* User Responsibility */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                5. User Responsibilities
                            </h3>
                            <p>
                                Users must behave respectfully towards drivers and comply with
                                all applicable laws during the ride. Any form of harassment,
                                damage to the vehicle, or illegal activity during the ride is
                                strictly prohibited and may lead to legal action or permanent
                                suspension from the platform.
                            </p>
                        </div>

                        {/* Liability */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                6. Limitation of Liability
                            </h3>
                            <p>
                                Verde Ride acts as a platform connecting riders with independent
                                drivers. We are not responsible for delays, cancellations,
                                accidents, or losses that occur during the ride. However, we
                                strive to maintain safety and service standards through driver
                                verification and feedback systems.
                            </p>
                        </div>

                        {/* Privacy */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                7. Privacy and Data Protection
                            </h3>
                            <p>
                                Your personal information is handled according to our Privacy
                                Policy. By using the platform, you consent to the collection,
                                storage, and use of your information for service improvement,
                                booking management, and communication purposes.
                            </p>
                        </div>

                        {/* Contact */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                8. Contact Information
                            </h3>
                            <p>
                                If you have any questions regarding these Terms and Conditions
                                or require support, please contact us at:
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
    );
};

export default Termscondition;