import React from 'react'
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import youtube from '../assets/youtube.png';
import github from '../assets/github.png';
import logo from '../assets/logo.png';



export default function Footer() {
  return (
    <div className="font-montserat py-5">
      <footer data-aos="zoom-in" className='container text-white-100 mx-auto lg:px-20 font-urbanist px-5'>

        <img src={logo} alt="Logo" className='flex mx-auto' />

        <nav>
          <ul className="text-md flex flex-wrap justify-center lg:gap-12 gap-6 items-center text-white-100 mt-8">
            <li><a href="#about" className="">About Us</a></li>
            <li><a href="https://github.com/MrDriverOfficial/MrDriver" className="">Github</a></li>
            <li><a href="#about" className="">Documentation</a></li>
            <li><a href="/" className="">Audit</a></li>
            <li><a href="#tokenomics" className="">Tokenomics</a></li>
            <li><a href="#utilities" className="">Utilities</a></li>
          </ul>
        </nav>

        <div className='lg:flex justify-between items-center my-6 space-y-4'>
          <p className='text-center'>© {new Date().getFullYear()} Mr. Driver. All rights reserved.</p>

          <div className='flex justify-center gap-6 items-center'>
            <a href='https://t.me/MrDriver_Official'><img src={telegram} alt="Telegram" className='' /></a>
            <a href='https://twitter.com/MrDriver_io'><img src={twitter} alt="Twitter" className='' /></a>
            <a href='https://www.youtube.com/@MrDriver_News/videos'><img src={youtube} alt="Youtube" className='' /></a>
            <a href='https://github.com/MrDriverOfficial/MrDriver'><img src={github} alt="Github" className='' /></a>
          </div>
        </div>

      </footer>
    </div>

  )
}
