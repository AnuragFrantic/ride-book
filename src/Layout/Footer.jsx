import React, { useEffect, useState } from 'react'
import axios from 'axios'
import apple from '../assets/Image/apple.png'
import playstore from '../assets/Image/playstore.png'
import { Link } from 'react-router-dom'
import logo from '../assets/Image/newlogo.png'

const BASE_URL = "https://api.verde-ride.com/api/"

const Footer = () => {

  const [pages, setPages] = useState([])

  useEffect(() => {
    fetchPages()
  }, [])

  // ✅ Fetch ALL pages (no limit)
  const fetchPages = async () => {
    try {
      const res = await axios.get(`${BASE_URL}pages`)

      setPages(res?.data?.data || [])
    } catch (err) {
      console.error("Footer pages fetch error", err)
    }
  }

  return (
    <section className='bg-black py-10'>
      <div className="container mx-auto px-10">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border-b border-gray-500 pb-10">

          {/* LOGO */}
          <div>
            <Link to='/'>
              <img src={logo} alt='logo' className='h-[100px]' />
            </Link>
          </div>

          {/* COMPANY */}
          <div>
            <h2 className='text-white text-lg font-medium mb-3'>Company</h2>
            <ul className='text-white text-sm space-y-3'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about-us'>About Us</Link></li>
              <li><Link to='/career'>Career</Link></li>
            </ul>
          </div>

          {/* SUPPORT (All Pages Dynamic) */}
          <div className="lg:mt-0 mt-5">
            <h2 className='text-white text-lg font-medium mb-3'>Support</h2>

            <ul className='text-white text-sm space-y-3'>

              {pages.length > 0 ? (
                pages.map((page) => (
                  <li key={page._id}>
                    <Link to={`/policy/${page.url}`}>
                      {page.title}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="text-gray-400">No pages found</li>
              )}

            </ul>
          </div>

          {/* APP DOWNLOAD */}
          <div className="lg:mt-0 mt-5">
            <h2 className='text-white text-lg font-medium mb-3'>
              Rides That Reach You. Anytime.
            </h2>

            <Link to="#">
              <img src={apple} alt='apple' className='h-[50px]' />
            </Link>

            <Link to="#">
              <img src={playstore} alt='playstore' className='h-[50px] mt-3' />
            </Link>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="flex justify-center pt-5">
          <div className="text-white text-xs md:text-sm">
            VERDE © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>

      </div>
    </section>
  )
}

export default Footer