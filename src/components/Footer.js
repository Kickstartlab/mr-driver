import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import logo from '../assets/logo.png';



export default function Footer() {
  return (
    <div className="font-montserat py-5">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-urbanist px-5'>

        <img src={logo} alt="Logo" className='flex mx-auto' />

        <nav>
          <ul className="text-md flex flex-wrap justify-center lg:gap-12 gap-6 items-center text-white-100 mt-8">
            <li><a href="#about" className="">About Us</a></li>
            <li><a href="/" className="">Github</a></li>
            <li><a href="#about" className="">Documentation</a></li>
            <li><a href="/" className="">Audit</a></li>
            <li><a href="#tokenomics" className="">Tokenomics</a></li>
            <li><a href="#utilities" className="">Utilities</a></li>
          </ul>
        </nav>

        <div className='lg:flex justify-between items-center my-6 space-y-4'>
          <p className='text-center'>© {new Date().getFullYear()} Mr. Driver. All rights reserved.</p>

          <div className='flex justify-center gap-6 items-center'>
            <a href='/'><img src={telegram} alt="Logo" className='' /></a>
            <a href='/'><img src={twitter} alt="Logo" className='' /></a>
          </div>
        </div>

      </footer>
    </div>

  )
}
