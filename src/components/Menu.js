import React, { useState } from 'react'
import logo from '../assets/logo.png';



export default function Menu() {

  const [show, setShow] = useState(false);


  return (

    <header>

      <div className="lg:flex hidden items-end justify-between font-urbanist h-24">

        <nav>
          <ul className="text-md flex justify-center gap-12 items-center text-white-100">
            <li className='flex flex-col'>
              <a href="/" className="font-semibold text-lg">Staking</a>
              <span className='text-xs text-blue-200'>Coming Soon</span>
            </li>
            <li className='flex flex-col'>
              <a href="/" className="font-semibold text-lg">Banking</a>
              <span className='text-xs text-blue-200'>Coming Soon</span>
            </li>
            <li className='flex flex-col'>
              <a href="/" className="font-semibold text-lg">Vote</a>
              <span className='text-xs text-blue-200'>Coming Soon</span>
            </li>
            <li className='flex flex-col'>
              <a href="/" className="font-semibold text-lg">Marketplace</a>
              <span className='text-xs text-blue-200'>Coming Soon</span>
            </li>
            <li className='flex flex-col'>
              <a href="/" className="font-semibold text-lg">Lottery</a>
              <span className='text-xs text-blue-200'>Coming Soon</span>
            </li>
          </ul>
        </nav>

        <a href="/">
          <button className="bg-yellow-50 rounded-lg py-3 lg:px-8 px-4 mt-5 font-semibold text-black-100">
            Connect wallet
          </button>
        </a>
      </div>

      <div className="lg:hidden flex items-center justify-between pt-5 font-urbanist">
        <a href="/" className="text-white-100">
          <img src={logo} alt="Logo" className='w-9/12' />
        </a>

        <button onClick={() => setShow(!show)} className="nav cursor-pointer">

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>

        </button>
      </div>

      {
        show ? <div className="sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-3/4 overflow-y-auto text-center font-urbanist font-semibold bg-blue-100 z-50" style={{ left: "0" }}>

          <div className="mt-3 px-3 mb-12">
            <a href="/" className="text-white-100">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex flex-col text-white-100 px-4">
            <a href="/" className="text-lg font-semibold">Staking</a>
            <span className='text-xs text-blue-200'>Coming Soon</span>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex flex-col text-white-100 px-4">
            <a href="/" className="text-lg font-semibold">Banking</a>
            <span className='text-xs text-blue-200'>Coming Soon</span>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex flex-col text-white-100 px-4">
            <a href="/" className="text-lg font-semibold">Vote</a>
            <span className='text-xs text-blue-200'>Coming Soon</span>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex flex-col text-white-100 px-4">
            <a href="/" className="text-lg font-semibold">Marketplace</a>
            <span className='text-xs text-blue-200'>Coming Soon</span>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex flex-col text-white-100 px-4">
            <a href="/" className="text-lg font-semibold">Lottery</a>
            <span className='text-xs text-blue-200'>Coming Soon</span>
          </button>
          <button onClick={() => setShow(!show)} className="w-full py-2.5 mt-3 flex  text-black-100 bg-white-100 px-4 rounded-md">
            <a href="/" className="text-lg font-semibold">Connect Wallet</a>
          </button>
        </div> : null
      }


    </header >
  )
}
