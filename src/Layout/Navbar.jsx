import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LuMenu } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';

const ThemeNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navlist = (
        <ul className="flex lg:flex-row flex-col list-none gap-8 font-semibold items-center">
            <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'text-secondary' : 'hover:text-secondary'} onClick={() => setIsOpen(false)}>
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to="/about-us" className={({ isActive }) => isActive ? 'text-secondary' : 'hover:text-secondary'} onClick={() => setIsOpen(false)}>
                    ABOUT US
                </NavLink>
            </li>
            <li>
                <NavLink to="/career" className={({ isActive }) => isActive ? 'text-secondary' : 'hover:text-secondary'} onClick={() => setIsOpen(false)}>
                    CAREER
                </NavLink>
            </li>
            <li>
                <NavLink to="/contact" className="bg-black text-white px-4 py-2 rounded hover:bg-secondary-dark transition" onClick={() => setIsOpen(false)}>
                    Get in Touch
                </NavLink>
            </li>
        </ul>
    );

    return (
        <>
            {/* Navbar — becomes fixed with shadow on scroll */}
            <section
                className={`w-full z-50 lg:px-20 px-10 py-5 ${
                    isScrolled ? 'fixed top-0 bg-white shadow-md' : 'relative'
                }`}
            >
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <NavLink to="/">
                            <h2 className="text-black">logo</h2>
                        </NavLink>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-8">{navlist}</div>

                        {/* Mobile menu toggle */}
                        <div className="lg:hidden">
                            <button onClick={toggleMenu}>
                                <LuMenu className="text-3xl" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Sidebar Menu */}
            <div
                className={`fixed inset-0 bg-white z-50 transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 lg:hidden`}
            >
                <div className="p-6">
                    <div className="flex justify-end mb-6">
                        <button onClick={toggleMenu}>
                            <IoClose className="text-2xl" />
                        </button>
                    </div>
                    {navlist}
                </div>
            </div>
        </>
    );
};

export default ThemeNavbar;
