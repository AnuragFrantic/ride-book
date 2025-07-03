import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom';
import Loader from '../Component/Loader';

const Header = () => {
    const location = useLocation();
    const [showLoader, setShowLoader] = useState(false);

    useEffect(() => {
        // Show the loader when the location changes
        setShowLoader(true);

        // Hide the loader after a short delay (e.g., 2 seconds)
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timer);
    }, [location]);
    return (
        <>
            {showLoader && <Loader />}
            <Navbar />
        </>
    )
}

export default Header
