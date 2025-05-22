import React from 'react'
import Banner from './Banner'

import Service from './Service'
import Descriptionuser from './Descriptionuser'
import Screenshot from './Screenshot'

import AboutUs from '../AboutUs'
import HomeAbout from './HomeAbout'
const Home = () => {
  return (
    <>
      <Banner />
      <HomeAbout/>
      <Service />
      <Descriptionuser />
      <Screenshot />
    </>
  )
}

export default Home
