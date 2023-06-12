import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import logo from '../assets/logo.png';
import kyc from '../assets/kyc.png';
import kyc_1 from '../assets/kyc_1.png';
import utillity_1 from '../assets/utillity_1.png';
import utillity_2 from '../assets/utillity_2.png';
import utillity_3 from '../assets/utillity_3.png';
import utillity_4 from '../assets/utillity_4.png';
import utillity_5 from '../assets/utillity_5.png';
import team_1 from '../assets/team_1.png';
import team_2 from '../assets/team_2.png';
import team_3 from '../assets/team_3.png';
import team_4 from '../assets/team_4.png';
import partner_1 from '../assets/partner_1.png';
import partner_2 from '../assets/partner_2.png';
import partner_3 from '../assets/partner_3.png';
import partner_4 from '../assets/partner_4.png';
import mobile from '../assets/mobile.png';
import car from '../assets/car.png';
import bg_top from '../assets/bg_top.png';
import bg_faq from '../assets/bg_faq.png';
import bg_mobile from '../assets/bg_mobile.png';
import token from '../assets/token.png';
import bg_token from '../assets/bg_token.png';
import twitter_1 from '../assets/twitter_1.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Accordion from './Accordion';
import Particle from './Particle';
import ProgressBar from './ProgressBar';
export default function Home() {

    const [value, setValue] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setValue(oldValue => {
                const newValue = oldValue + 17;

                if (newValue === 34) {
                    const show = document.getElementById('node_1');
                    show.className = 'flex items-start gap-x-0 absolute left-0 ml-60 mt-52 w-56'
                }

                if (newValue === 51) {
                    const show = document.getElementById('node_2');
                    show.className = 'flex items-end gap-x-0 absolute left-1/3 -ml-4 mt-48 translate-y-44 w-64'
                }

                if (newValue === 68) {
                    const show = document.getElementById('node_3');
                    show.className = 'flex items-start gap-x-0 absolute left-1/2 -ml-4 mt-52  w-56'
                }

                if (newValue === 85) {
                    const show = document.getElementById('node_4');
                    show.className = 'flex items-end gap-x-0 absolute -mr-20 right-1/4 mt-48 translate-y-44  w-56'
                }

                if (newValue === 102) {
                    const show = document.getElementById('node_5');
                    show.className = 'flex items-start gap-x-0 absolute right-0 mr-6 mt-52  w-64'
                }

                if (newValue === 100) {
                    clearInterval(interval);
                }

                return newValue;
            });
        }, 1500);
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 500,
        });
        Aos.refresh();
    }, [])

    const accordionData = [
        {
            numbers: '01',
            title: 'What is MDR',
            content: `MDR is the MrDriver project governance token and has an important role in the ecosystem.We developed it on Binance Smart Chain (BSC) BEP20, designed to empower the whole ecosystem.`
        },
        {
            numbers: '02',
            title: 'What is MDR Stake?',
            content: `MDR is the MrDriver project governance token and has an important role in the ecosystem.We developed it on Binance Smart Chain (BSC) BEP20, designed to empower the whole ecosystem.`
        },
        {
            numbers: '03',
            title: 'What is NFT Marketplace',
            content: `MDR is the MrDriver project governance token and has an important role in the ecosystem.We developed it on Binance Smart Chain (BSC) BEP20, designed to empower the whole ecosystem.`
        },
        {
            numbers: '04',
            title: 'What is Bank?',
            content: `MDR is the MrDriver project governance token and has an important role in the ecosystem.We developed it on Binance Smart Chain (BSC) BEP20, designed to empower the whole ecosystem.`
        },
        {
            numbers: '04',
            title: 'What is BDR Stake?',
            content: `MDR is the MrDriver project governance token and has an important role in the ecosystem.We developed it on Binance Smart Chain (BSC) BEP20, designed to empower the whole ecosystem.`
        }
    ];

    return (
        <div className="bg-black-100 font-urbanist overflow-hidden text-white-100">

            {/* top section */}

            <div className="lg:px-20 px-5 bg-top relative z-20">
                <div className='container mx-auto'>

                    <Menu />

                    <Particle />

                    <div className='lg:flex hidden items-center justify-center gap-x-6 -mt-12'>

                        <svg width="540" height="2" viewBox="0 0 540 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="540" y2="1" stroke="#E9ECF2" strokeWidth="2" />
                        </svg>

                        <img src={logo} alt="Logo" className='' />

                        <svg width="540" height="2" viewBox="0 0 540 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="540" y2="1" stroke="#E9ECF2" strokeWidth="2" />
                        </svg>

                    </div>

                    <div>
                        <img src={bg_top} alt="Logo" className='absolute left-0 right-0' />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-12 py-20">
                        <div className="text-center lg:w-8/12">

                            <div className='flex items-center justify-center gap-x-4 mb-6'>

                                <div className='flex items-center gap-x-4 bg-blue-100 py-2 px-3 rounded-xl'>
                                    <img src={kyc} alt="Logo" className='' />
                                    <p>
                                        KYC
                                    </p>
                                </div>

                                <div className='flex items-center gap-x-4 bg-yellow-200 py-2 px-3 rounded-xl'>
                                    <img src={kyc_1} alt="Logo" className='' />
                                    <p>
                                        KYC
                                    </p>
                                </div>

                                <div className='flex items-center gap-x-4 bg-blue-100 py-2 px-3 rounded-xl'>
                                    <img src={kyc} alt="Logo" className='' />
                                    <p>
                                        Audit
                                    </p>
                                </div>

                            </div>

                            <h2 data-aos='fade-up' className='md:text-7xl text-3xl font-urbanist font-bold text-white-100'>
                                Drive your way to <span className='text-yellow-100'>Financial freedom</span> with MrDriver
                            </h2>

                            <p data-aos='fade-out' className='pt-8 pb-6 lg:text-xl leading-loose'>
                                MrDriver is the World’s First Decentralised Ride sharing Ecosystem for<br></br> Individual Online transportation and logistic Services
                            </p>

                            <div data-aos='zoom-in' className="flex items-center justify-center gap-12 mx-auto">
                                <a href="/">
                                    <button className="text-white-100 border-2 border-blue-50 py-4 lg:text-xl md:px-8 px-4 rounded-md lg:font-semibold mt-5">
                                        Whitepaper
                                    </button>
                                </a>

                                <a href="/">
                                    <button className="text-white-100 py-4 lg:text-xl lg:font-semibold lg:px-6 px-4 border-2 border-yellow-100 rounded-lg mt-5 bg-yellow-100">
                                        Pitch Deck
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div className='relative z-20 lg:mt-20 font-montserat'>

                        <div data-aos='fade-up' className='lg:flex hidden gap-x-4 absolute left-1/3 -mt-8 -ml-12'>
                            <p>Environmental<br></br>
                                sustainability
                            </p>

                            <div className=''>
                                <svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5ZM4.14914 19.5C4.14914 27.978 11.022 34.8509 19.5 34.8509C27.978 34.8509 34.8509 27.978 34.8509 19.5C34.8509 11.022 27.978 4.14914 19.5 4.14914C11.022 4.14914 4.14914 11.022 4.14914 19.5Z" fill="white" />
                                </svg>

                                <svg className='ml-6 -mt-5' width="35" height="150" viewBox="0 0 45 169" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 166.5C37 133.333 70 54.1 2 2.5" stroke="white" strokeWidth="5" strokeLinejoin="round" strokeDasharray="10 10" />
                                </svg>
                            </div>
                        </div>

                        <div data-aos='fade-up' className='lg:flex hidden flex-col items-center gap-y-4 absolute mt-24 ml-44'>
                            <p>
                                Passively Earn Crypto
                            </p>

                            <div className=''>
                                <svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5ZM4.14914 19.5C4.14914 27.978 11.022 34.8509 19.5 34.8509C27.978 34.8509 34.8509 27.978 34.8509 19.5C34.8509 11.022 27.978 4.14914 19.5 4.14914C11.022 4.14914 4.14914 11.022 4.14914 19.5Z" fill="white" />
                                </svg>

                                <svg width="61" height="114" viewBox="0 0 61 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M59.5 111.5C34.6666 97 -10.7 54.7 6.49998 1.5" stroke="white" strokeWidth="5" strokeDasharray="10 10" />
                                </svg>

                            </div>
                        </div>

                        <div data-aos='fade-up' className='lg:flex hidden gap-x-4 absolute right-1/4 -mr-12 -mt-16'>
                            <p>
                                Ride<br></br>
                                Sharing
                            </p>

                            <div className=''>
                                <svg width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5ZM4.14914 19.5C4.14914 27.978 11.022 34.8509 19.5 34.8509C27.978 34.8509 34.8509 27.978 34.8509 19.5C34.8509 11.022 27.978 4.14914 19.5 4.14914C11.022 4.14914 4.14914 11.022 4.14914 19.5Z" fill="white" />
                                </svg>

                                <svg className='-translate-x-4' width="51" height="110" viewBox="0 0 71 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.30475 125.193C32.5785 109.68 88.2378 63.324 60.6843 1.99991" stroke="white" strokeWidth="5" strokeDasharray="10 10" />
                                </svg>

                            </div>
                        </div>

                        <img data-aos='flip-left' src={car} alt="Logo" className='felx mx-auto w-10/12' />

                        <div data-aos='fade-down' className='lg:flex hidden gap-x-8 absolute right-1/4 -mr-12 -mt-48'>

                            <div className='flex items-center justify-center'>

                                <svg width="138" height="75" viewBox="0 0 148 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 0.5C9.83333 36.6667 48.3 105.6 147.5 92" stroke="white" strokeWidth="5" strokeLinejoin="round" strokeDasharray="10 10" />
                                </svg>

                                <svg className='-mr-12 mt-20' width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5ZM4.14914 19.5C4.14914 27.978 11.022 34.8509 19.5 34.8509C27.978 34.8509 34.8509 27.978 34.8509 19.5C34.8509 11.022 27.978 4.14914 19.5 4.14914C11.022 4.14914 4.14914 11.022 4.14914 19.5Z" fill="white" />
                                </svg>

                            </div>

                            <p>
                                Driver &<br></br>
                                Passenger<br></br>
                                NFTs
                            </p>
                        </div>

                        <div data-aos='fade-down' className='lg:flex hidden items-end gap-x-3 absolute right-1/4 mr-24 -mt-44'>

                            <p>
                                AI Powered
                            </p>

                            <div className='flex items-center justify-center mr-16'>

                                <svg width="50" height="120" viewBox="0 0 50 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 3C27.5 19.1667 70.1 64.9 32.5 118.5" stroke="white" strokeWidth="5" strokeDasharray="10 10" />
                                </svg>

                                <svg className='-translate-x-10 mt-36' width="30" height="30" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5ZM4.14914 19.5C4.14914 27.978 11.022 34.8509 19.5 34.8509C27.978 34.8509 34.8509 27.978 34.8509 19.5C34.8509 11.022 27.978 4.14914 19.5 4.14914C11.022 4.14914 4.14914 11.022 4.14914 19.5Z" fill="white" />
                                </svg>

                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* utility section */}

            <div id='utilities' className="lg:px-20 px-5 lg:py-20 py-5">
                <div className='container mx-auto'>

                    <div data-aos='slide-right' className='flex items-center gap-x-3 pb-3'>
                        <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                        </svg>
                        Utilities
                    </div>
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-white-100'>
                        UTILITIES
                    </h2>

                    <div className='lg:space-y-20 space-y-8'>

                        <div data-aos="fade-right" className='lg:flex gap-x-8 justify-center lg:mt-16 mt-6'>
                            <div className='lg:block hidden'>
                                <img src={utillity_1} alt="Logo" className='' />
                            </div>

                            <div className='space-y-6 lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-urbanist font-bold'>
                                    Solo Mode
                                </h2>

                                <p className='font-medium lg:text-xl'>
                                    Earn crypto reward While you have no passengers MrDriver App allows drivers earn daily multi-crypto rewards based on their GPS kilometers activity for each trip and earn passive income in DeFi ecosystem
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-left" className='lg:flex gap-x-8 justify-between'>
                            <div className='space-y-6 lg:text-right lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-urbanist font-bold'>
                                    Peer To Peer Mode
                                </h2>

                                <p className='lg:text-xl font-medium'>
                                    Earn crypto reward While you have no passengers MrDriver App allows drivers earn daily multi-crypto rewards based on their GPS kilometers activity for each trip and earn passive income in DeFi ecosystem
                                </p>
                            </div>

                            <div className='lg:block hidden'>
                                <img src={utillity_2} alt="Logo" className='' />
                            </div>
                        </div>

                        <div data-aos="fade-right" className='lg:flex gap-x-8 justify-center lg:mt-16 mt-6'>
                            <div className='lg:block hidden'>
                                <img src={utillity_3} alt="Logo" className='' />
                            </div>

                            <div className='space-y-6 lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-urbanist font-bold'>
                                    Artificial Intelligence
                                </h2>

                                <p className='font-medium lg:text-xl'>
                                    At MrDriver, we recognize the potential of AI and have incorporated it into our project to improve the user experience and provide a more efficient and effective platform.MrDriver intends to implement AI-based traffic prediction and route recommendation in its project to enhance users' driving experience and improve traffic flow
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-left" className='lg:flex gap-x-8 justify-between'>
                            <div className='space-y-6 lg:text-right lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-urbanist font-bold'>
                                    MrDriver & Passenger NFTS
                                </h2>

                                <p className='lg:text-xl font-medium'>
                                    Driver NFTs are limited editions and specially designed for our project
                                    no one can't be minted more NFTs because we want to keep them from inflation And also help maintain their value of them.
                                </p>

                                <p className='lg:text-xl font-medium'>
                                    Each passenger on the MrDriver app will have their own unique NFT, which will be recorded on the blockchain. This NFT will serve as a digital identity for the passenger, allowing them to access the platform's features and services.
                                </p>
                            </div>

                            <div className='lg:block hidden'>
                                <img src={utillity_4} alt="Logo" className='' />
                            </div>
                        </div>

                        <div data-aos="fade-right" className='lg:flex gap-x-8 justify-center lg:mt-16 mt-6'>
                            <div className='lg:block hidden'>
                                <img src={utillity_5} alt="Logo" className='' />
                            </div>

                            <div className='space-y-6 lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-urbanist font-bold'>
                                    MrDriver Games
                                </h2>

                                <p className='font-medium lg:text-xl'>
                                    MrDriver's GameFi products aim to offer users an additional way to earn income within the ecosystem while enjoying interactive and entertaining games. GameFi is an emerging subcategory of the broader DeFi movement that combines decentralized finance protocols with gaming elements. In the MrDriver ecosystem, users can participate in various web games that are designed to be both fun and profitable.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div>
                <img src={bg_token} alt="Logo" className='absolute right-0 -mt-96 lg:block hidden' />
            </div>

            {/* tokenomics */}

            <div id='tokenomics' className="lg:px-20 px-5 lg:py-20 py-5">
                <div className='container mx-auto'>

                    <div data-aos='slide-right' className='flex items-center gap-x-3 pb-3'>
                        <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                        </svg>
                        Tokenomics
                    </div>
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-white-100'>
                        Tokenomics
                    </h2>

                    <div className='lg:mt-16 mt-6'>
                        <img data-aos='zoom-in' src={token} alt="Logo" className='felx mx-auto w-10/12' />
                    </div>

                </div>
            </div>

            {/* roadmap */}

            <div id='roadmap' className="px-5 lg:py-20 py-5">
                <div className='container mx-auto'>

                    <div className='lg:px-20'>
                        <div data-aos='slide-right' className='flex items-center gap-x-3 pb-3'>
                            <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                            </svg>
                            Roadmap
                        </div>
                        <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-white-100'>
                            ROADMAP
                        </h2>
                    </div>

                    <div className='lg:hidden flex items-center gap-x-6 pt-8'>

                        <div className='translate-y-90 w-6 line h-800'>
                        </div>

                        <div className='flex flex-col gap-y-8'>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='text-white-50 text-sm'>April 15, 2019</p>
                                <h5 className='text-2xl font-semibold'>Concept</h5>
                                <ul className='p-4 list-disc'>
                                    <li>Concept Generation</li>
                                    <li>Team Assemble</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='text-white-50 text-sm'>April 15, 2019</p>
                                <h5 className='text-2xl font-semibold'>Research</h5>
                                <ul className='p-4 list-disc'>
                                    <li>Proving the concept can work</li>
                                    <li>White paper conpletion</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='text-white-50 text-sm'>April 15, 2019</p>
                                <h5 className='text-2xl font-semibold'>Design</h5>
                                <ul className='p-4 list-disc'>
                                    <li>Platform design</li>
                                    <li>Building the MVP</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='text-white-50 text-sm'>April 15, 2019</p>
                                <h5 className='text-2xl font-semibold'>Pre-sale</h5>
                                <ul className='p-4 list-disc'>
                                    <li>Public financing & Seed funding raised</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <p className='text-white-50 text-sm'>April 15, 2019</p>
                                <h5 className='text-2xl font-semibold'>App Beta Test</h5>
                                <ul className='p-4 list-disc'>
                                    <li>Private closed beta</li>
                                    <li>Open beta launched to public and improvement the app</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className='lg:my-16 my-6 lg:block hidden'>

                        <div className='flex items-center justify-center gap-x-16'>

                            <div id='node_1' className='hidden'>

                                <div className='flex items-end'>
                                    <svg width="16" height="186" viewBox="0 0 16 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.0508162 0.979126V1.84963L0.925443 1.84963L0.925443 0.979126H0.0508162ZM0.0508162 3.59063V5.33163H0.925443L0.925443 3.59063H0.0508162ZM0.0508162 7.07263V8.81364H0.925443L0.925443 7.07263H0.0508162ZM0.0508162 10.5546V12.2956H0.925444L0.925444 10.5546H0.0508162ZM0.0508162 14.0366V15.7776H0.925444L0.925444 14.0366H0.0508162ZM0.0508162 17.5186V19.2597H0.925444L0.925444 17.5186H0.0508162ZM0.0508162 21.0007V22.7417H0.925444L0.925444 21.0007H0.0508162ZM0.0508162 24.4827V26.2237H0.925444L0.925444 24.4827H0.0508162ZM0.0508162 27.9647V29.7057H0.925444L0.925444 27.9647H0.0508162ZM0.0508162 31.4467V33.1877H0.925445L0.925444 31.4467H0.0508162ZM0.0508162 34.9287V36.6697H0.925445L0.925445 34.9287H0.0508162ZM0.0508162 38.4107V40.1517H0.925445L0.925445 38.4107H0.0508162ZM0.0508162 41.8927V43.6337H0.925445L0.925445 41.8927H0.0508162ZM0.0508182 45.3747L0.0508182 47.1157H0.925445L0.925445 45.3747H0.0508182ZM0.0508183 48.8567L0.0508184 50.5977H0.925445L0.925445 48.8567H0.0508183ZM0.0508185 52.3387L0.0508186 54.0797H0.925445L0.925445 52.3387H0.0508185ZM0.0508186 55.8207L0.0508187 57.5617H0.925446L0.925445 55.8207H0.0508186ZM0.0508188 59.3027L0.0508189 61.0437H0.925446L0.925446 59.3027H0.0508188ZM0.0508189 62.7847L0.050819 64.5257H0.925446L0.925446 62.7847H0.0508189ZM0.0508191 66.2667L0.0508192 68.0077H0.925446L0.925446 66.2667H0.0508191ZM0.0508192 69.7487L0.0508193 71.4897H0.925446L0.925446 69.7487H0.0508192ZM0.0508194 73.2307L0.0508195 74.9717H0.925446L0.925446 73.2307H0.0508194ZM0.0508195 76.7127L0.0508196 78.4537H0.925447L0.925446 76.7127H0.0508195ZM0.0508197 80.1947L0.0508198 81.9357H0.925447L0.925447 80.1947H0.0508197ZM0.0508198 83.6768L0.0508199 85.4178H0.925447L0.925447 83.6768H0.0508198ZM0.05082 87.1588L0.0508201 88.8998H0.925447L0.925447 87.1588H0.05082ZM0.0508202 90.6408L0.0508202 92.3818H0.925447L0.925447 90.6408H0.0508202ZM0.0508203 94.1228L0.0508204 95.8638H0.925447L0.925447 94.1228H0.0508203ZM0.0508205 97.6048L0.0508205 99.3458H0.925447L0.925447 97.6048H0.0508205ZM0.0508206 101.087L0.0508207 102.828H0.925448L0.925447 101.087H0.0508206ZM0.0508208 104.569L0.0508208 106.31H0.925448L0.925448 104.569H0.0508208ZM0.0508209 108.051L0.050821 109.792H0.925448L0.925448 108.051H0.0508209ZM0.0508211 111.533L0.0508211 113.274H0.925448L0.925448 111.533H0.0508211ZM0.0508212 115.015L0.0508213 116.756H0.925448L0.925448 115.015H0.0508212ZM0.0508214 118.497L0.0508214 120.238H0.925448L0.925448 118.497H0.0508214ZM0.0508215 121.979L0.0508216 123.72H0.925448L0.925448 121.979H0.0508215ZM0.0508217 125.461L0.0508217 127.202H0.925449L0.925449 125.461H0.0508217ZM0.0508218 128.943L0.0508219 130.684H0.925449L0.925449 128.943H0.0508218ZM0.050822 132.425L0.0508221 134.166H0.925449L0.925449 132.425H0.050822ZM0.0508221 135.907L0.0508222 137.648H0.925449L0.925449 135.907H0.0508221ZM0.0508223 139.389L0.0508224 141.13H0.925449L0.925449 139.389H0.0508223ZM0.0508224 142.871L0.0508225 144.612H0.925449L0.925449 142.871H0.0508224ZM0.0508226 146.353L0.0508227 148.094H0.92545L0.925449 146.353H0.0508226ZM0.0508227 149.835L0.0508228 151.576H0.92545L0.92545 149.835H0.0508227ZM0.0508229 153.317L0.050823 155.058H0.92545L0.92545 153.317H0.0508229ZM0.050823 156.799L0.0508231 158.54H0.92545L0.92545 156.799H0.050823ZM0.0508232 160.281L0.0508233 162.022H0.92545L0.92545 160.281H0.0508232ZM0.0508233 163.763L0.0508234 165.504H0.92545L0.92545 163.763H0.0508233ZM0.0508235 167.245L0.0508236 168.986H0.92545L0.92545 167.245H0.0508235ZM0.0508237 170.727L0.0508237 172.468H0.925451L0.925451 170.727H0.0508237ZM0.0508238 174.209L0.0508239 175.95H0.925451L0.925451 174.209H0.0508238ZM0.050824 177.691L0.050824 179.432H0.925451L0.925451 177.691H0.050824ZM0.0508241 181.173L0.0508242 182.914H0.925451L0.925451 181.173H0.0508241ZM0.925451 184.655H0.837945V184.651H0.0507812V185.525H0.837945H0.925451V184.655ZM2.41227 185.525H3.9866V184.651H2.41227V185.525ZM5.56093 185.525H7.13526V184.651H5.56093V185.525ZM8.70959 185.525H10.2839V184.651H8.70959V185.525ZM11.8582 185.525H13.4326V184.651H11.8582V185.525ZM15.0069 185.525H15.7941V184.651H15.0069V185.525Z" fill="white" />
                                    </svg>

                                    <div className='w-8 h-8 bg-yellow-100 rounded-full translate-y-2'></div>
                                </div>

                                <div>
                                    <p className='text-white-50 text-sm'>April 15, 2019</p>
                                    <h5 className='text-2xl font-semibold'>Concept</h5>
                                    <ul className='p-4 list-disc'>
                                        <li>Concept Generation</li>
                                        <li>Team Assemble</li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_2' className='hidden'>

                                <div className='flex items-start'>
                                    <svg width="18" height="185" viewBox="0 0 18 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.33135 184.839L1.33135 183.968L0.456726 183.968L0.456726 184.839L1.33135 184.839ZM1.33135 182.227L1.33135 180.486H0.456726L0.456726 182.227H1.33135ZM1.33135 178.745L1.33135 177.004H0.456726L0.456726 178.745H1.33135ZM1.33135 175.263L1.33135 173.522L0.456727 173.522L0.456726 175.263L1.33135 175.263ZM1.33135 171.781L1.33135 170.04L0.456727 170.04L0.456727 171.781L1.33135 171.781ZM1.33135 168.299L1.33135 166.558H0.456727L0.456727 168.299H1.33135ZM1.33135 164.817L1.33135 163.076H0.456727L0.456727 164.817H1.33135ZM1.33135 161.335L1.33135 159.594H0.456727L0.456727 161.335H1.33135ZM1.33135 157.853L1.33135 156.112H0.456727L0.456727 157.853H1.33135ZM1.33135 154.371L1.33135 152.63H0.456727L0.456727 154.371H1.33135ZM1.33135 150.889L1.33135 149.148H0.456728L0.456728 150.889H1.33135ZM1.33135 147.407L1.33135 145.666H0.456728L0.456728 147.407H1.33135ZM1.33135 143.925L1.33135 142.184H0.456728L0.456728 143.925H1.33135ZM1.33135 140.443L1.33135 138.702H0.456728L0.456728 140.443H1.33135ZM1.33136 136.961L1.33136 135.22H0.456728L0.456728 136.961H1.33136ZM1.33136 133.479L1.33136 131.738H0.456728L0.456728 133.479H1.33136ZM1.33136 129.997L1.33136 128.256H0.456729L0.456728 129.997H1.33136ZM1.33136 126.515L1.33136 124.774H0.456729L0.456729 126.515H1.33136ZM1.33136 123.033L1.33136 121.292H0.456729L0.456729 123.033H1.33136ZM1.33136 119.551L1.33136 117.81H0.456729L0.456729 119.551H1.33136ZM1.33136 116.069L1.33136 114.328H0.456729L0.456729 116.069H1.33136ZM1.33136 112.587L1.33136 110.846H0.456729L0.456729 112.587H1.33136ZM1.33136 109.105L1.33136 107.364H0.456729L0.456729 109.105H1.33136ZM1.33136 105.623L1.33136 103.882H0.45673L0.45673 105.623H1.33136ZM1.33136 102.141L1.33136 100.4H0.45673L0.45673 102.141H1.33136ZM1.33136 98.6592L1.33136 96.9182H0.45673L0.45673 98.6592H1.33136ZM1.33136 95.1772L1.33136 93.4362H0.45673L0.45673 95.1772H1.33136ZM1.33136 91.6952L1.33136 89.9541H0.45673L0.45673 91.6952H1.33136ZM1.33136 88.2131L1.33136 86.4721H0.45673L0.45673 88.2131H1.33136ZM1.33136 84.7311L1.33136 82.9901H0.456731L0.45673 84.7311H1.33136ZM1.33136 81.2491L1.33136 79.5081H0.456731L0.456731 81.2491H1.33136ZM1.33136 77.7671L1.33136 76.0261H0.456731L0.456731 77.7671H1.33136ZM1.33136 74.2851L1.33136 72.5441H0.456731L0.456731 74.2851H1.33136ZM1.33136 70.8031L1.33136 69.0621H0.456731L0.456731 70.8031H1.33136ZM1.33136 67.3211L1.33136 65.5801H0.456731L0.456731 67.3211H1.33136ZM1.33136 63.8391L1.33136 62.0981H0.456731L0.456731 63.8391H1.33136ZM1.33136 60.3571L1.33136 58.6161H0.456732L0.456732 60.3571H1.33136ZM1.33136 56.875L1.33136 55.134H0.456732L0.456732 56.875H1.33136ZM1.33136 53.3931L1.33136 51.6521H0.456732L0.456732 53.3931H1.33136ZM1.33136 49.9111L1.33136 48.1701H0.456732L0.456732 49.9111H1.33136ZM1.33136 46.4291L1.33136 44.6881H0.456732L0.456732 46.4291H1.33136ZM1.33136 42.9471L1.33136 41.2061H0.456732L0.456732 42.9471H1.33136ZM1.33136 39.4651L1.33136 37.7241H0.456733L0.456732 39.4651H1.33136ZM1.33136 35.9831L1.33136 34.2421H0.456733L0.456733 35.9831H1.33136ZM1.33136 32.5011L1.33136 30.7601H0.456733L0.456733 32.5011H1.33136ZM1.33136 29.0191L1.33136 27.2781H0.456733L0.456733 29.0191H1.33136ZM1.33136 25.5371L1.33136 23.7961H0.456733L0.456733 25.5371H1.33136ZM1.33136 22.0551L1.33136 20.3141H0.456733L0.456733 22.0551H1.33136ZM1.33136 18.5731L1.33136 16.8321H0.456733L0.456733 18.5731H1.33136ZM1.33136 15.0911L1.33136 13.3501H0.456734L0.456733 15.0911H1.33136ZM1.33136 11.6091L1.33136 9.86812H0.456734L0.456734 11.6091H1.33136ZM1.33136 8.12712L1.33136 6.38612H0.456736L0.456734 8.12712H1.33136ZM1.33136 4.64513L1.33136 2.90413H0.456736V4.64513H1.33136ZM0.456736 1.16313H1.33136L1.33135 1.16718H2.11852V0.292542H1.33136H0.456736V1.16313ZM3.69285 0.292542H5.26717V1.16718H3.69285V0.292542ZM6.8415 0.292542H8.41583V1.16718H6.8415V0.292542ZM9.99016 0.292542H11.5645V1.16718H9.99016V0.292542ZM13.1388 0.292542H14.7131V1.16718H13.1388V0.292542ZM16.2875 0.292542H17.0746V1.16718H16.2875V0.292542Z" fill="white" />
                                    </svg>

                                    <div className='w-8 h-8 bg-yellow-100 rounded-full -translate-y-2'></div>
                                </div>

                                <div>
                                    <p className='text-white-50 text-sm'>April 15, 2019</p>
                                    <h5 className='text-2xl font-semibold'>Research</h5>
                                    <ul className='p-4 list-disc'>
                                        <li>Proving the concept can work</li>
                                        <li>White paper conpletion</li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_3' className='hidden '>

                                <div className='flex items-end'>
                                    <svg width="16" height="186" viewBox="0 0 16 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.0508162 0.979126V1.84963L0.925443 1.84963L0.925443 0.979126H0.0508162ZM0.0508162 3.59063V5.33163H0.925443L0.925443 3.59063H0.0508162ZM0.0508162 7.07263V8.81364H0.925443L0.925443 7.07263H0.0508162ZM0.0508162 10.5546V12.2956H0.925444L0.925444 10.5546H0.0508162ZM0.0508162 14.0366V15.7776H0.925444L0.925444 14.0366H0.0508162ZM0.0508162 17.5186V19.2597H0.925444L0.925444 17.5186H0.0508162ZM0.0508162 21.0007V22.7417H0.925444L0.925444 21.0007H0.0508162ZM0.0508162 24.4827V26.2237H0.925444L0.925444 24.4827H0.0508162ZM0.0508162 27.9647V29.7057H0.925444L0.925444 27.9647H0.0508162ZM0.0508162 31.4467V33.1877H0.925445L0.925444 31.4467H0.0508162ZM0.0508162 34.9287V36.6697H0.925445L0.925445 34.9287H0.0508162ZM0.0508162 38.4107V40.1517H0.925445L0.925445 38.4107H0.0508162ZM0.0508162 41.8927V43.6337H0.925445L0.925445 41.8927H0.0508162ZM0.0508182 45.3747L0.0508182 47.1157H0.925445L0.925445 45.3747H0.0508182ZM0.0508183 48.8567L0.0508184 50.5977H0.925445L0.925445 48.8567H0.0508183ZM0.0508185 52.3387L0.0508186 54.0797H0.925445L0.925445 52.3387H0.0508185ZM0.0508186 55.8207L0.0508187 57.5617H0.925446L0.925445 55.8207H0.0508186ZM0.0508188 59.3027L0.0508189 61.0437H0.925446L0.925446 59.3027H0.0508188ZM0.0508189 62.7847L0.050819 64.5257H0.925446L0.925446 62.7847H0.0508189ZM0.0508191 66.2667L0.0508192 68.0077H0.925446L0.925446 66.2667H0.0508191ZM0.0508192 69.7487L0.0508193 71.4897H0.925446L0.925446 69.7487H0.0508192ZM0.0508194 73.2307L0.0508195 74.9717H0.925446L0.925446 73.2307H0.0508194ZM0.0508195 76.7127L0.0508196 78.4537H0.925447L0.925446 76.7127H0.0508195ZM0.0508197 80.1947L0.0508198 81.9357H0.925447L0.925447 80.1947H0.0508197ZM0.0508198 83.6768L0.0508199 85.4178H0.925447L0.925447 83.6768H0.0508198ZM0.05082 87.1588L0.0508201 88.8998H0.925447L0.925447 87.1588H0.05082ZM0.0508202 90.6408L0.0508202 92.3818H0.925447L0.925447 90.6408H0.0508202ZM0.0508203 94.1228L0.0508204 95.8638H0.925447L0.925447 94.1228H0.0508203ZM0.0508205 97.6048L0.0508205 99.3458H0.925447L0.925447 97.6048H0.0508205ZM0.0508206 101.087L0.0508207 102.828H0.925448L0.925447 101.087H0.0508206ZM0.0508208 104.569L0.0508208 106.31H0.925448L0.925448 104.569H0.0508208ZM0.0508209 108.051L0.050821 109.792H0.925448L0.925448 108.051H0.0508209ZM0.0508211 111.533L0.0508211 113.274H0.925448L0.925448 111.533H0.0508211ZM0.0508212 115.015L0.0508213 116.756H0.925448L0.925448 115.015H0.0508212ZM0.0508214 118.497L0.0508214 120.238H0.925448L0.925448 118.497H0.0508214ZM0.0508215 121.979L0.0508216 123.72H0.925448L0.925448 121.979H0.0508215ZM0.0508217 125.461L0.0508217 127.202H0.925449L0.925449 125.461H0.0508217ZM0.0508218 128.943L0.0508219 130.684H0.925449L0.925449 128.943H0.0508218ZM0.050822 132.425L0.0508221 134.166H0.925449L0.925449 132.425H0.050822ZM0.0508221 135.907L0.0508222 137.648H0.925449L0.925449 135.907H0.0508221ZM0.0508223 139.389L0.0508224 141.13H0.925449L0.925449 139.389H0.0508223ZM0.0508224 142.871L0.0508225 144.612H0.925449L0.925449 142.871H0.0508224ZM0.0508226 146.353L0.0508227 148.094H0.92545L0.925449 146.353H0.0508226ZM0.0508227 149.835L0.0508228 151.576H0.92545L0.92545 149.835H0.0508227ZM0.0508229 153.317L0.050823 155.058H0.92545L0.92545 153.317H0.0508229ZM0.050823 156.799L0.0508231 158.54H0.92545L0.92545 156.799H0.050823ZM0.0508232 160.281L0.0508233 162.022H0.92545L0.92545 160.281H0.0508232ZM0.0508233 163.763L0.0508234 165.504H0.92545L0.92545 163.763H0.0508233ZM0.0508235 167.245L0.0508236 168.986H0.92545L0.92545 167.245H0.0508235ZM0.0508237 170.727L0.0508237 172.468H0.925451L0.925451 170.727H0.0508237ZM0.0508238 174.209L0.0508239 175.95H0.925451L0.925451 174.209H0.0508238ZM0.050824 177.691L0.050824 179.432H0.925451L0.925451 177.691H0.050824ZM0.0508241 181.173L0.0508242 182.914H0.925451L0.925451 181.173H0.0508241ZM0.925451 184.655H0.837945V184.651H0.0507812V185.525H0.837945H0.925451V184.655ZM2.41227 185.525H3.9866V184.651H2.41227V185.525ZM5.56093 185.525H7.13526V184.651H5.56093V185.525ZM8.70959 185.525H10.2839V184.651H8.70959V185.525ZM11.8582 185.525H13.4326V184.651H11.8582V185.525ZM15.0069 185.525H15.7941V184.651H15.0069V185.525Z" fill="white" />
                                    </svg>

                                    <div className='w-8 h-8 bg-yellow-100 rounded-full translate-y-2'></div>
                                </div>

                                <div>
                                    <p className='text-white-50 text-sm'>April 15, 2019</p>
                                    <h5 className='text-2xl font-semibold'>Design</h5>
                                    <ul className='p-4 list-disc'>
                                        <li>Platform design</li>
                                        <li>Building the MVP</li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_4' className='hidden'>

                                <div className='flex items-start'>
                                    <svg width="18" height="185" viewBox="0 0 18 185" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M1.33135 184.839L1.33135 183.968L0.456726 183.968L0.456726 184.839L1.33135 184.839ZM1.33135 182.227L1.33135 180.486H0.456726L0.456726 182.227H1.33135ZM1.33135 178.745L1.33135 177.004H0.456726L0.456726 178.745H1.33135ZM1.33135 175.263L1.33135 173.522L0.456727 173.522L0.456726 175.263L1.33135 175.263ZM1.33135 171.781L1.33135 170.04L0.456727 170.04L0.456727 171.781L1.33135 171.781ZM1.33135 168.299L1.33135 166.558H0.456727L0.456727 168.299H1.33135ZM1.33135 164.817L1.33135 163.076H0.456727L0.456727 164.817H1.33135ZM1.33135 161.335L1.33135 159.594H0.456727L0.456727 161.335H1.33135ZM1.33135 157.853L1.33135 156.112H0.456727L0.456727 157.853H1.33135ZM1.33135 154.371L1.33135 152.63H0.456727L0.456727 154.371H1.33135ZM1.33135 150.889L1.33135 149.148H0.456728L0.456728 150.889H1.33135ZM1.33135 147.407L1.33135 145.666H0.456728L0.456728 147.407H1.33135ZM1.33135 143.925L1.33135 142.184H0.456728L0.456728 143.925H1.33135ZM1.33135 140.443L1.33135 138.702H0.456728L0.456728 140.443H1.33135ZM1.33136 136.961L1.33136 135.22H0.456728L0.456728 136.961H1.33136ZM1.33136 133.479L1.33136 131.738H0.456728L0.456728 133.479H1.33136ZM1.33136 129.997L1.33136 128.256H0.456729L0.456728 129.997H1.33136ZM1.33136 126.515L1.33136 124.774H0.456729L0.456729 126.515H1.33136ZM1.33136 123.033L1.33136 121.292H0.456729L0.456729 123.033H1.33136ZM1.33136 119.551L1.33136 117.81H0.456729L0.456729 119.551H1.33136ZM1.33136 116.069L1.33136 114.328H0.456729L0.456729 116.069H1.33136ZM1.33136 112.587L1.33136 110.846H0.456729L0.456729 112.587H1.33136ZM1.33136 109.105L1.33136 107.364H0.456729L0.456729 109.105H1.33136ZM1.33136 105.623L1.33136 103.882H0.45673L0.45673 105.623H1.33136ZM1.33136 102.141L1.33136 100.4H0.45673L0.45673 102.141H1.33136ZM1.33136 98.6592L1.33136 96.9182H0.45673L0.45673 98.6592H1.33136ZM1.33136 95.1772L1.33136 93.4362H0.45673L0.45673 95.1772H1.33136ZM1.33136 91.6952L1.33136 89.9541H0.45673L0.45673 91.6952H1.33136ZM1.33136 88.2131L1.33136 86.4721H0.45673L0.45673 88.2131H1.33136ZM1.33136 84.7311L1.33136 82.9901H0.456731L0.45673 84.7311H1.33136ZM1.33136 81.2491L1.33136 79.5081H0.456731L0.456731 81.2491H1.33136ZM1.33136 77.7671L1.33136 76.0261H0.456731L0.456731 77.7671H1.33136ZM1.33136 74.2851L1.33136 72.5441H0.456731L0.456731 74.2851H1.33136ZM1.33136 70.8031L1.33136 69.0621H0.456731L0.456731 70.8031H1.33136ZM1.33136 67.3211L1.33136 65.5801H0.456731L0.456731 67.3211H1.33136ZM1.33136 63.8391L1.33136 62.0981H0.456731L0.456731 63.8391H1.33136ZM1.33136 60.3571L1.33136 58.6161H0.456732L0.456732 60.3571H1.33136ZM1.33136 56.875L1.33136 55.134H0.456732L0.456732 56.875H1.33136ZM1.33136 53.3931L1.33136 51.6521H0.456732L0.456732 53.3931H1.33136ZM1.33136 49.9111L1.33136 48.1701H0.456732L0.456732 49.9111H1.33136ZM1.33136 46.4291L1.33136 44.6881H0.456732L0.456732 46.4291H1.33136ZM1.33136 42.9471L1.33136 41.2061H0.456732L0.456732 42.9471H1.33136ZM1.33136 39.4651L1.33136 37.7241H0.456733L0.456732 39.4651H1.33136ZM1.33136 35.9831L1.33136 34.2421H0.456733L0.456733 35.9831H1.33136ZM1.33136 32.5011L1.33136 30.7601H0.456733L0.456733 32.5011H1.33136ZM1.33136 29.0191L1.33136 27.2781H0.456733L0.456733 29.0191H1.33136ZM1.33136 25.5371L1.33136 23.7961H0.456733L0.456733 25.5371H1.33136ZM1.33136 22.0551L1.33136 20.3141H0.456733L0.456733 22.0551H1.33136ZM1.33136 18.5731L1.33136 16.8321H0.456733L0.456733 18.5731H1.33136ZM1.33136 15.0911L1.33136 13.3501H0.456734L0.456733 15.0911H1.33136ZM1.33136 11.6091L1.33136 9.86812H0.456734L0.456734 11.6091H1.33136ZM1.33136 8.12712L1.33136 6.38612H0.456736L0.456734 8.12712H1.33136ZM1.33136 4.64513L1.33136 2.90413H0.456736V4.64513H1.33136ZM0.456736 1.16313H1.33136L1.33135 1.16718H2.11852V0.292542H1.33136H0.456736V1.16313ZM3.69285 0.292542H5.26717V1.16718H3.69285V0.292542ZM6.8415 0.292542H8.41583V1.16718H6.8415V0.292542ZM9.99016 0.292542H11.5645V1.16718H9.99016V0.292542ZM13.1388 0.292542H14.7131V1.16718H13.1388V0.292542ZM16.2875 0.292542H17.0746V1.16718H16.2875V0.292542Z" fill="white" />
                                    </svg>

                                    <div className='w-8 h-8 bg-yellow-100 rounded-full -translate-y-2'></div>
                                </div>

                                <div>
                                    <p className='text-white-50 text-sm'>April 15, 2019</p>
                                    <h5 className='text-2xl font-semibold'>Pre-sale</h5>
                                    <ul className='p-4 list-disc'>
                                        <li>Public financing & Seed funding raised</li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_5' className='hidden '>

                                <div className='flex items-end'>
                                    <svg width="16" height="186" viewBox="0 0 16 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.0508162 0.979126V1.84963L0.925443 1.84963L0.925443 0.979126H0.0508162ZM0.0508162 3.59063V5.33163H0.925443L0.925443 3.59063H0.0508162ZM0.0508162 7.07263V8.81364H0.925443L0.925443 7.07263H0.0508162ZM0.0508162 10.5546V12.2956H0.925444L0.925444 10.5546H0.0508162ZM0.0508162 14.0366V15.7776H0.925444L0.925444 14.0366H0.0508162ZM0.0508162 17.5186V19.2597H0.925444L0.925444 17.5186H0.0508162ZM0.0508162 21.0007V22.7417H0.925444L0.925444 21.0007H0.0508162ZM0.0508162 24.4827V26.2237H0.925444L0.925444 24.4827H0.0508162ZM0.0508162 27.9647V29.7057H0.925444L0.925444 27.9647H0.0508162ZM0.0508162 31.4467V33.1877H0.925445L0.925444 31.4467H0.0508162ZM0.0508162 34.9287V36.6697H0.925445L0.925445 34.9287H0.0508162ZM0.0508162 38.4107V40.1517H0.925445L0.925445 38.4107H0.0508162ZM0.0508162 41.8927V43.6337H0.925445L0.925445 41.8927H0.0508162ZM0.0508182 45.3747L0.0508182 47.1157H0.925445L0.925445 45.3747H0.0508182ZM0.0508183 48.8567L0.0508184 50.5977H0.925445L0.925445 48.8567H0.0508183ZM0.0508185 52.3387L0.0508186 54.0797H0.925445L0.925445 52.3387H0.0508185ZM0.0508186 55.8207L0.0508187 57.5617H0.925446L0.925445 55.8207H0.0508186ZM0.0508188 59.3027L0.0508189 61.0437H0.925446L0.925446 59.3027H0.0508188ZM0.0508189 62.7847L0.050819 64.5257H0.925446L0.925446 62.7847H0.0508189ZM0.0508191 66.2667L0.0508192 68.0077H0.925446L0.925446 66.2667H0.0508191ZM0.0508192 69.7487L0.0508193 71.4897H0.925446L0.925446 69.7487H0.0508192ZM0.0508194 73.2307L0.0508195 74.9717H0.925446L0.925446 73.2307H0.0508194ZM0.0508195 76.7127L0.0508196 78.4537H0.925447L0.925446 76.7127H0.0508195ZM0.0508197 80.1947L0.0508198 81.9357H0.925447L0.925447 80.1947H0.0508197ZM0.0508198 83.6768L0.0508199 85.4178H0.925447L0.925447 83.6768H0.0508198ZM0.05082 87.1588L0.0508201 88.8998H0.925447L0.925447 87.1588H0.05082ZM0.0508202 90.6408L0.0508202 92.3818H0.925447L0.925447 90.6408H0.0508202ZM0.0508203 94.1228L0.0508204 95.8638H0.925447L0.925447 94.1228H0.0508203ZM0.0508205 97.6048L0.0508205 99.3458H0.925447L0.925447 97.6048H0.0508205ZM0.0508206 101.087L0.0508207 102.828H0.925448L0.925447 101.087H0.0508206ZM0.0508208 104.569L0.0508208 106.31H0.925448L0.925448 104.569H0.0508208ZM0.0508209 108.051L0.050821 109.792H0.925448L0.925448 108.051H0.0508209ZM0.0508211 111.533L0.0508211 113.274H0.925448L0.925448 111.533H0.0508211ZM0.0508212 115.015L0.0508213 116.756H0.925448L0.925448 115.015H0.0508212ZM0.0508214 118.497L0.0508214 120.238H0.925448L0.925448 118.497H0.0508214ZM0.0508215 121.979L0.0508216 123.72H0.925448L0.925448 121.979H0.0508215ZM0.0508217 125.461L0.0508217 127.202H0.925449L0.925449 125.461H0.0508217ZM0.0508218 128.943L0.0508219 130.684H0.925449L0.925449 128.943H0.0508218ZM0.050822 132.425L0.0508221 134.166H0.925449L0.925449 132.425H0.050822ZM0.0508221 135.907L0.0508222 137.648H0.925449L0.925449 135.907H0.0508221ZM0.0508223 139.389L0.0508224 141.13H0.925449L0.925449 139.389H0.0508223ZM0.0508224 142.871L0.0508225 144.612H0.925449L0.925449 142.871H0.0508224ZM0.0508226 146.353L0.0508227 148.094H0.92545L0.925449 146.353H0.0508226ZM0.0508227 149.835L0.0508228 151.576H0.92545L0.92545 149.835H0.0508227ZM0.0508229 153.317L0.050823 155.058H0.92545L0.92545 153.317H0.0508229ZM0.050823 156.799L0.0508231 158.54H0.92545L0.92545 156.799H0.050823ZM0.0508232 160.281L0.0508233 162.022H0.92545L0.92545 160.281H0.0508232ZM0.0508233 163.763L0.0508234 165.504H0.92545L0.92545 163.763H0.0508233ZM0.0508235 167.245L0.0508236 168.986H0.92545L0.92545 167.245H0.0508235ZM0.0508237 170.727L0.0508237 172.468H0.925451L0.925451 170.727H0.0508237ZM0.0508238 174.209L0.0508239 175.95H0.925451L0.925451 174.209H0.0508238ZM0.050824 177.691L0.050824 179.432H0.925451L0.925451 177.691H0.050824ZM0.0508241 181.173L0.0508242 182.914H0.925451L0.925451 181.173H0.0508241ZM0.925451 184.655H0.837945V184.651H0.0507812V185.525H0.837945H0.925451V184.655ZM2.41227 185.525H3.9866V184.651H2.41227V185.525ZM5.56093 185.525H7.13526V184.651H5.56093V185.525ZM8.70959 185.525H10.2839V184.651H8.70959V185.525ZM11.8582 185.525H13.4326V184.651H11.8582V185.525ZM15.0069 185.525H15.7941V184.651H15.0069V185.525Z" fill="white" />
                                    </svg>

                                    <div className='w-8 h-8 bg-yellow-100 rounded-full translate-y-2'></div>
                                </div>

                                <div>
                                    <p className='text-white-50 text-sm'>April 15, 2019</p>
                                    <h5 className='text-2xl font-semibold'>App Beta Test</h5>
                                    <ul className='p-4 list-disc'>
                                        <li>Private closed beta</li>
                                        <li>Open beta launched to public and improvement the app</li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                        {/* <img src={bar} alt="Logo" className='z-50 ' /> */}

                        <div className='pt-44'>
                            <ProgressBar max-width={"100%"} value={value} />
                        </div>

                    </div>
                </div>

            </div>

            {/* mobile application */}

            <div>
                <img src={bg_mobile} alt="Logo" className='absolute right-0 -mt-96 lg:block hidden' />
            </div>

            <div id='team' className="lg:px-20 px-5 lg:py-20 py-5 relative z-20">
                <div className='container mx-auto'>

                    <div className='lg:flex items-center justify-center gap-x-8'>

                        <div>
                            <div data-aos='slide-right' className='flex items-center gap-x-3 pb-3'>
                                <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                                </svg>
                                Team
                            </div>
                            <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-white-100 pb-6'>
                                Meet Our Amazing Team
                            </h2>

                            <p className='lg:w-9/12 mt-6 lg:text-xl font-medium'>
                                In App MrDriver Non-custodial wallet
                                Safe and secure way to pay and receive transportation fares
                            </p>

                            <p className='lg:w-9/12 mt-6 lg:text-xl font-medium'>
                                In App MrDriver Marketplace
                                Offering opportunities for drivers and passengers to trade their NFTs and generate various benefits for users.
                            </p>

                            <p className='lg:w-9/12 mt-6 lg:text-xl font-medium'>
                                In App Staking DeFi Pools
                                Earn more by staking BDR MDR and your NFTs Via MrDriver MasterChef smart contract
                            </p>
                        </div>

                        <div data-aos='fade-up' className=''>
                            <img src={mobile} alt="Logo" className='box' />
                        </div>

                    </div>
                </div>
            </div>

            {/* Partners section */}

            <div>
                <img src={bg_faq} alt="Logo" className='absolute right-0 mt-52' />
            </div>

            <div id='partners' className="lg:px-20 px-5 lg:pt-20 py-5">
                <div className='container mx-auto'>

                    <div data-aos='slide-right' className='flex items-center gap-x-3 pb-3'>
                        <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                        </svg>
                        Partners
                    </div>
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-white-100'>
                        Some Of Our Amazing Partners
                    </h2>
                    <p data-aos='fade-up' className='lg:w-1/2 mt-6 lg:text-lg font-medium'>
                        We strive for long-term cooperation with our partners, and our team is always ready to meet and consider new opportunities for mutual benefits. If you would like to become our partner, we are always open to new offers and look forward to hearing from you.
                        If you are interested in working with us, please contact us and we will answer all your questions.
                    </p>

                    <a href="/">
                        <button data-aos='zoom-in' className="text-white-100 border-2 border-yellow-50 py-4 text-lg md:px-6 px-3 rounded-md font-semibold mt-5">
                            Become One
                        </button>
                    </a>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 items-center lg:mt-20 mt-6'>

                        <div data-aos='slide-right' className='flex items-center justify-between gap-x-4 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-64 h-24'>
                            <img src={partner_1} alt="Logo" className='' />
                            <p className='text-xl'>
                                IDO
                                PRESALE
                            </p>
                        </div>

                        <div data-aos='slide-right' className='flex items-center justify-between gap-x-4 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-64 h-24'>
                            <img src={partner_2} alt="Logo" className='' />
                            <p className='text-xl'>
                                Pinksale
                            </p>
                        </div>

                        <div data-aos='slide-left' className='flex items-center justify-between gap-x-4 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-64 h-24'>
                            <img src={partner_3} alt="Logo" className='' />
                            <p className='text-xl'>
                                Binance
                                Feed
                            </p>
                        </div>

                        <div data-aos='slide-left' className='flex items-center justify-between gap-x-4 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-64 h-24'>
                            <img src={partner_4} alt="Logo" className='' />
                            <p className='text-xl'>
                                SolidProof
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* faq section */}

            <div id='faq' className="lg:px-20 px-5 lg:pt-28 py-5">

                <div className='container mx-auto'>

                    <div className='bg-black-20 lg:p-16 p-6 rounded-3xl relative z-20'>
                        <div data-aos='slide-right' className='flex items-center gap-x-3 pb-3 text-yellow-100'>
                            <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line y1="1" x2="67.1717" y2="1" stroke="#FFC122" strokeWidth="2" />
                            </svg>
                            FAQ
                        </div>
                        <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-yellow-100'>
                            Frequently asked questions
                        </h2>

                        <div data-aos="zoom-in" data-aos-delay="350" className="accordion space-y-5 py-12">
                            {accordionData.map(({ numbers, title, content }) => (
                                <Accordion title={title} content={content} numbers={numbers} />
                            ))}
                        </div>

                    </div>

                </div>
            </div>

            {/* team section */}

            <div id='team' className="lg:px-20 px-5 lg:py-20 py-5">
                <div className='container mx-auto'>

                    <div data-aos='slide-right' className='flex items-center gap-x-3 pb-3'>
                        <svg width="68" height="2" viewBox="0 0 68 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="67.1717" y2="1" stroke="#F8F9FF" strokeWidth="2" />
                        </svg>
                        Team
                    </div>
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-white-100'>
                        Meet Our Amazing Team
                    </h2>
                    <p data-aos='fade-up' className='lg:w-1/2 mt-6 lg:text-lg font-medium'>
                        The MrDriver team is made up of the best experts and professionals with years of experience in the technology and digital currency industries. The team's size will gradually increase as the project moves forward, and we will add more specialists to the group in order to provide our users with the highest-quality products.
                    </p>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 items-baseline lg:mt-20 mt-6'>

                        <div data-aos='flip-right' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_1} alt="Logo" className='' />

                            <div className=' flex items-center gap-x-6'>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 translate-x-6 group-hover:translate-x-0'>
                                    Alex Razavi
                                </h5>

                                <a href='/'>
                                    <img src={twitter_1} alt="Logo" className='opacity-0 group-hover:opacity-100' />
                                </a>
                            </div>

                            <p className='font-montserat'>
                                Founder and CEO
                            </p>

                            <p className='font-montserat opacity-30 group-hover:opacity-100 duration-150'>
                                7 years of experience in the
                                crypto market
                            </p>
                        </div>

                        <div data-aos='flip-right' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_2} alt="Logo" className='' />

                            <div className=' flex items-center gap-x-6'>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 translate-x-6 group-hover:translate-x-0'>
                                    Joseph Nahid
                                </h5>

                                <a href='/'>
                                    <img src={twitter_1} alt="Logo" className='opacity-0 group-hover:opacity-100' />
                                </a>
                            </div>

                            <p className='font-montserat'>
                                Community Manager
                            </p>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                3 years of experience in the cryptocurrency and blockchain industry.
                            </p>
                        </div>

                        <div data-aos='flip-left' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_3} alt="Logo" className='' />

                            <div className=' flex items-center gap-x-6'>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 translate-x-6 group-hover:translate-x-0'>
                                    Swadin Biswas
                                </h5>

                                <a href='/'>
                                    <img src={twitter_1} alt="Logo" className='opacity-0 group-hover:opacity-100' />
                                </a>
                            </div>

                            <p className='font-montserat'>
                                Web3 Developer
                            </p>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                Web3 enthusiastic with 2 years of experience in blockchain development.
                            </p>
                        </div>

                        <div data-aos='flip-left' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_4} alt="Logo" className='' />

                            <div className=' flex items-center gap-x-6'>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 translate-x-6 group-hover:translate-x-0'>
                                    Mahfuz Moyeen
                                </h5>

                                <a href='/'>
                                    <img src={twitter_1} alt="Logo" className='opacity-0 group-hover:opacity-100' />
                                </a>
                            </div>

                            <p className='font-montserat'>
                                Web Developer
                            </p>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                2 years of experience in the Frontend Developer , React.js, Node.js, React Native, MongoDB etc.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div >
    )
}
