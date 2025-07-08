import React from 'react'
import apple from '../assets/Image/apple.png'
import playstore from '../assets/Image/playstore.png'
import { Link } from 'react-router-dom'
import logo from '../assets/Image/newlogo.jpg'

const Footer = () => {
  return (
    <>
      <section className='bg-black py-10'>
        <div className="container mx-auto px-10">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border-b border-gray-500 pb-10">
            <div className="col-span-1">
              {/* <h2 className='lg:text-[22px] md:text-[20px] text-[18px] font-[500] text-white mb-3'>
                LOGO
              </h2> */}
              <Link to='/'>
                <img src={logo} alt='image' className='md:h-[150px] h-[100px]' />
              </Link>
            </div>
            <div className="col-span-1">
              <h2 className='lg:text-[22px] md:text-[20px] text-[18px] font-[500] text-white mb-3'>
                Company
              </h2>
              <ul className='text-white font-[300] md:text-[16px] text-[14px] space-y-3'>
                <li>
                  <Link to='/'> Home</Link>
                </li>
                <li>
                  <Link to='/about-us'>
                    About Us
                  </Link>

                </li>
                <li>
                  <Link to='/career'>
                    Career
                  </Link>
                </li>

              </ul>
            </div>
            <div className="col-span-1 lg:mt-0 mt-5">
              <h2 className='lg:text-[22px] md:text-[20px] text-[18px] font-[500] text-white mb-3'>
                Support
              </h2>
              <ul className='text-white font-[300] md:text-[16px] text-[14px] space-y-3'>
                <li>
                  <Link to='/terms-condition'>
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to='/privacy-policy'>
                    Privacy Policy
                  </Link>

                </li>
              </ul>
            </div>
            <div className="col-span-1 lg:mt-0 mt-5">
              <h2 className='lg:text-[22px] md:text-[20px] text-[18px] font-[500] text-white mb-3'>
                Your Ride, Anytime, Anywhere!
              </h2>
              <Link to="">
                <img src={apple} alt='image' className='md:h-[60px] h-[50px]' />
              </Link>

              <Link to="">
                <img src={playstore} alt='image' className='md:h-[60px] h-[50px] mt-3' />
              </Link>


            </div>
          </div>
          <div className="flex justify-between pt-5">
            <div className="font-[300] md:text-[14px] text-[12px] text-white">
              Ride book with  ©  2025. All right reserved
            </div>
            {/* <div className='flex gap-1 items-center'>
              <a href='https://www.facebook.com/people/Project-Beat-Records/61556641920870/?mibextid=WC7FNe' target='_blank'>
                <FaFacebook className='text-white text-lg' />
              </a>
              <a href='https://www.instagram.com/accounts/login/?next=%2Fprojectbeatrecords%2F&source=omni_redirect' target='_blank'>
                <PiInstagramLogoFill className='text-white text-xl' />
              </a>

            </div> */}
          </div>

        </div>
      </section>
    </>
  )
}

export default Footer
