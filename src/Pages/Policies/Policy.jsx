import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "https://api.verde-ride.com/api/";

const Policy = () => {
    const { url } = useParams(); // e.g. delete-policy
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPolicy();
    }, [url]); // ✅ refetch when route changes

    const fetchPolicy = async () => {
        try {
            setLoading(true);

            const res = await axios.get(`${BASE_URL}pages`);

            const pages = res?.data?.data || [];

            // ✅ filter here
            const page = pages.find((p) => p.url === url);

            setData(page || null);
        } catch (err) {
            console.error("Policy fetch error", err);
            setData(null);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <div className="w-8 h-8 border-4 border-[#0fcfb0] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!data) {
        return (
            <div className="text-center py-20 text-gray-400">
                No Policy Found
            </div>
        );
    }

    return (
        <>
            {/* Banner */}
            <section className="innerbanner flex items-center justify-center relative sm:h-[300px] h-[200px] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#00000075] z-0"></div>
                <div className="container mx-auto z-10 text-center">
                    <h2 className="md:text-4xl text-2xl font-bold text-white">
                        {data.title}
                    </h2>
                </div>
            </section>

            {/* Content */}
            <section className="lg:px-20 px-5 py-10">
                <div className="container mx-auto">
                    <div
                        className="prose max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: data.body }}
                    />
                </div>
            </section>
        </>
    );
};

export default Policy;