import React, { useEffect } from 'react'
import dayuse from '../../assets/Image/dayuse.png'
import longrental from '../../assets/Image/longrental.png'
import pickdrop from '../../assets/Image/pickupdrop.png'
import corporate from '../../assets/Image/corporaterides.png'
import wedding from '../../assets/Image/wedding.png'
import party from '../../assets/Image/partyride.png'
import personal from '../../assets/Image/personalgattherinmg.png'
import seamless from '../../assets/Image/seamlessride.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { BaseUrl } from '../../Api/BaseUrl'

const Service = () => {
    // const [data, setdata] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    // const handleservice = async () => {
    //     try {
    //         const res = await axios.get(`${BaseUrl}service`);
    //         console.log(res.data);
    //         setdata(res.data.data);

    //     } catch (error) {
    //         console.error("Error fetching services:", error);
    //     }
    // };
    // useEffect(() => {
    //     handleservice();
    // }, [])
    const data = [
        {
            name: "Day Use",
            image: dayuse,
            bg_color: "#FFE9D7",
            path: "/day-use"
        },
        {
            name: "Long Rental",
            image: longrental,
            bg_color: "#E4E8FD",
            path: "/long-rental"
        },
        {
            name: "Premium Pickup & Drop",
            image: pickdrop,
            bg_color: "#FFE1C9",
            path: "/premium-pickup-drop"
        },
        {
            name: "Corporate Rides, Simplified",
            image: corporate,
            bg_color: "#DFE8FF",
            path: "/corporate-rides-simplified"
        },
        {
            name: "Wedding Special Rides",
            image: wedding,
            bg_color: "#FFEDF1",
            path: "/wedding-special-rides"
        },
        {
            name: "Ride to the Party in Style",
            image: party,
            bg_color: "#DDF8FF",
            path: "/ride-to-the-party-instyle"
        },
        {
            name: "Personal Gatherings Made Smoother",
            image: personal,
            bg_color: "#E2F3E0",
            path: "/personal-gathering-made-smoother"
        },
         {
            name: "Seamless Rides for Group Tours",
            image: seamless,
            bg_color: "#FDF2CB",
            path: "/seamless-rides-for-groups-tours"
        },
    ]
    return (
        <>
            <section className='lg:py-10 py-5 lg:px-20 px-5 bg-gray-100'>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1">
                        <div className="col-span-1 text-center">
                            <h2 className="md:text-4xl text-2xl font-bold text-gray-800 md:mb-6 mb-3">Services</h2>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
                        {data?.map((service, index) => (
                            <div
                                key={index}
                                className={` cursor-pointer rounded-xl  p-4 flex flex-col items-center text-center `}
                                style={{ backgroundColor: service?.bg_color }}
                                onClick={() => navigate(service.path  , { state: { service : service.path } })}
                            >
                                <img src={service?.image} alt={service.name} className="sm:h-[100px] h-[70px] sm:mb-4 mb-2" />
                                <h4 className="md:text-lg text-sm font-semibold sm:mb-3 mb-1">{service?.name}</h4>

                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service
