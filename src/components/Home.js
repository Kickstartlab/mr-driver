import React, { useEffect } from 'react'
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
import team_5 from '../assets/team_5.png';
import team_6 from '../assets/team_6.png';
import team_7 from '../assets/team_7.png';
import team_8 from '../assets/team_8.png';
import partner_1 from '../assets/partner_1.png';
import partner_2 from '../assets/partner_2.png';
import partner_3 from '../assets/partner_3.png';
import partner_4 from '../assets/partner_4.png';
import partner_5 from '../assets/partner_5.png';
import partner_6 from '../assets/partner_6.png';
import mobile from '../assets/mobile.png';
import car from '../assets/car.png';
import bg_top from '../assets/bg_top.png';
import bg_faq from '../assets/bg_faq.png';
import bg_mobile from '../assets/bg_mobile.png';
import token from '../assets/token.png';
import bg_token from '../assets/bg_token.png';
import twitter_1 from '../assets/twitter_1.png';
import top_1 from '../assets/top_1.png';
import top_2 from '../assets/top_2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Accordion from './Accordion';
import Particle from './Particle';
export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 600,
            once: false,
            delay: 0,
            easing: 'ease'
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
            content: `Based on our Block Emission MDR smart contract sends 11/520 MDR per day (345/600 MDR per month) into the MDR staking pool To support and encourage holders
            MDR holders can stake MDR in periods of 3 months, 6 months, 9 months, and 1 year to receive these rewards
            Users can harvest their profit any time, but Early unstake has a 30% fee, And this amount is sent to the dynamic Burn mechanism`
        },
        {
            numbers: '03',
            title: 'What is NFT Marketplace',
            content: `Drivers Able to Trade their NFTs in our marketplace with MDR BUSD and BNB`
        },
        {
            numbers: '04',
            title: 'What is Bank?',
            content: `MDR holders can ask for loans from the platform or other users in a P2P system`
        },
        {
            numbers: '05',
            title: 'What is BDR Stake?',
            content: `Solo mode Drivers earn Daily BDR for their activity and driving; they can stake BDR tokens and earn MDR for use to pay Lvl up costs and Maintenance fees.
            This will keep the Drivers' enthusiasm and motivation and help them increase their levels faster and enjoy using the platform.
            We want to ensure all the Drivers can earn passive income from the platform, And they can use it as a subsidy for their car repairs and other necessary things in the real world.
            How is the APR calculated?
            APR depends on the size the amount of BDR staked and the number of participants in the pool based on our Block Emission MDR smart contract sends 1/152 MDR per day (34/560 MDR every month) into this pool to support the Online drivers in Solo mode
            BDR pool don't have withdraw function and will be locked on the contract permanently.`
        }
    ];

    return (
        <div className="bg-black-100 font-urbanist overflow-hidden text-white-100">

            {/* top section */}

            <div className="lg:px-20 px-5 relative z-20">
                <div className='container mx-auto'>

                    <Menu />

                    <Particle />

                    <div className='lg:flex hidden items-center justify-center gap-x-6 -mt-8'>

                        <svg width="600" height="2" viewBox="0 0 600 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="600" y2="1" stroke="#E9ECF2" strokeWidth="2" />
                        </svg>

                        <img src={logo} alt="Logo" className='' />

                        <svg width="600" height="2" viewBox="0 0 600 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="1" x2="600" y2="1" stroke="#E9ECF2" strokeWidth="2" />
                        </svg>

                    </div>

                    <div>
                        <img src={bg_top} alt="Logo" className='absolute left-0 right-0 -z-10 mt-8' />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-y-12 py-20">
                        <div className="text-center lg:w-8/12">

                            <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-6 mb-6'>

                                <div className='flex items-center px-6 border-2 border-yellow-200 py-3 rounded-xl'>
                                    <span className='bg-yellow-200 py-1 px-2 rounded-full text-xs absolute -mt-12 ml-12'>Coming Soon</span>
                                    <img src={top_2} alt="Logo" className='' />
                                </div>

                                <a href='https://github.com/solidproof/projects/tree/main/MrDriver'>
                                    <div className='flex items-center gap-x-4 bg-blue-100 py-2 px-3 rounded-xl'>
                                        <img src={kyc} alt="Logo" className='' />
                                        <p>
                                            KYC
                                        </p>
                                    </div>
                                </a>

                                <a href='https://pinksale.notion.site/MrDriver-KYC-Verification-c235539dae50472db325f09c637ec4a6'>
                                    <div className='flex items-center gap-x-4 bg-yellow-200 py-2 px-3 rounded-xl'>
                                        <img src={kyc_1} alt="Logo" className='' />
                                        <p>
                                            KYC
                                        </p>
                                    </div>
                                </a>

                                <a href='https://github.com/solidproof/projects/tree/main/MrDriver'>
                                    <div className='flex items-center gap-x-4 bg-blue-100 py-2 px-3 rounded-xl'>
                                        <img src={kyc} alt="Logo" className='' />
                                        <p>
                                            Audit
                                        </p>
                                    </div>
                                </a>

                                <div className='flex items-center px-12 border-2 border-yellow-300 py-3 rounded-xl'>
                                    <span className='bg-yellow-300 py-1 px-2 rounded-full text-xs absolute -mt-12 ml-12'>Coming Soon</span>
                                    <img src={top_1} alt="Logo" className='' />
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

                    <div id='top' className='relative z-20 lg:mt-20 font-montserat'>

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

                        <img data-aos='zoom-in' src={car} alt="Logo" className='felx mx-auto w-10/12' />

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
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-bold text-white-100 font-argent'>
                        UTILITIES
                    </h2>

                    <div className='lg:space-y-20 space-y-8'>

                        <div data-aos="fade-right" className='lg:flex gap-x-8 justify-center lg:mt-16 mt-6'>
                            <div className='lg:block hidden'>
                                <img src={utillity_1} alt="Logo" className='' />
                            </div>

                            <div className='space-y-6 lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-argent'>
                                    Solo Mode
                                </h2>

                                <p className='font-medium lg:text-xl'>
                                    Earn crypto reward While you have no passengers MrDriver App allows drivers earn daily multi-crypto rewards based on their GPS kilometers activity for each trip and earn passive income in DeFi ecosystem
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-left" className='lg:flex gap-x-8 justify-between'>
                            <div className='space-y-6 lg:text-right lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-argent'>
                                    Peer To Peer Mode
                                </h2>

                                <p className='lg:text-xl font-medium'>
                                    Revolution in the transportation industry Based on web3 and NFT technology, Passengers and Drivers able to connect directly together on the map and ask for ride-sharing or goods delivery services without having to pay taxes and commissions to intermediary companies.
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
                                <h2 className='md:text-5xl text-2xl font-argent'>
                                    Artificial Intelligence
                                </h2>

                                <p className='font-medium lg:text-xl'>
                                    At MrDriver, we recognize the potential of AI and have incorporated it into our project to improve the user experience and provide a more efficient and effective platform.MrDriver intends to implement AI-based traffic prediction and route recommendation in its project to enhance users' driving experience and improve traffic flow
                                </p>
                            </div>
                        </div>

                        <div data-aos="fade-left" className='lg:flex gap-x-8 justify-between'>
                            <div className='space-y-6 lg:text-right lg:w-10/12'>
                                <h2 className='md:text-5xl text-2xl font-argent'>
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
                                <h2 className='md:text-5xl text-2xl font-argent'>
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
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-argent text-white-100'>
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
                        <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-argent text-white-100'>
                            ROADMAP
                        </h2>
                    </div>

                    <div className='lg:hidden block pt-8'>

                        <div className='flex flex-col gap-y-8'>

                            <div data-aos="fade-right" className='border-b-2'>
                                <ul className='p-4 list-disc'>
                                    <li>Completion of the white paper and pitch deck</li>
                                    <li>Develop Website</li>
                                    <li>UI/UX design</li>
                                    <li>Develop MDR contract and mint 10% for
                                        seed/Private sale /public sale
                                    </li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <ul className='p-4 list-disc'>
                                    <li>Funding by angel investors</li>
                                    <li>Develop MasterChef contract</li>
                                    <li>Audit smart contracts</li>
                                    <li>KYC team certificate</li>
                                    <li>App initial prototype</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <ul className='p-4 list-disc'>
                                    <li>Funding by VCs</li>
                                    <li>Registering company in UAE</li>
                                    <li>Expanding the team by hiring CMO BD and CTO </li>
                                    <li>Airdrop/marketing Campaigns</li>
                                    <li>App interactive prototype</li>
                                    <li>Ambassadors Activation</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <ul className='p-4 list-disc'>
                                    <li>Token Private sale</li>
                                    <li>Testnet development</li>
                                    <li>Community beta test</li>
                                    <li>Bug fixed</li>
                                    <li>Update the App with new features and optimized interface</li>
                                    <li>Listing MDR</li>
                                    <li>Integrate AI into the project</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <ul className='p-4 list-disc'>
                                    <li>Token public sale </li>
                                    <li>Main net development </li>
                                    <li>DAO form,VIP services and lottery development</li>
                                    <li>Develop BDR smart contract</li>
                                    <li>Develop drivers and passengers NFT</li>
                                    <li>Develope MDR BDR and NFT reward pools</li>
                                    <li>Launch project on mainnet</li>
                                    <li>MrDriver bank development</li>
                                    <li>Bank security check</li>
                                    <li>Lunch bank</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <ul className='p-4 list-disc'>
                                    <li>MrDriver bank development</li>
                                    <li>Bank security check</li>
                                    <li>Lunch bank</li>
                                    <li>Smart insurance development</li>
                                    <li>Cargo and vehicle development</li>
                                </ul>
                            </div>

                            <div data-aos="fade-right" className='border-b-2'>
                                <ul className='p-4 list-disc'>
                                    <li>Develop/launch MrDriver online shop</li>
                                    <li>Develop/launch MrDriver DEX</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className='lg:my-16 my-6 lg:block hidden'>

                        <div className='flex items-center justify-center gap-x-16'>

                            <div id='node_1' className='flex items-end gap-x-0 absolute left-0 ml-8 mt-52 translate-y-44'>

                                <div className='-translate-y-8 flex flex-col items-center justify-center'>
                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-yellow-100'>Q1</span></h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#FF9518" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#FF9518" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                    </svg>

                                </div>

                                <div className='-translate-y-6 -translate-x-6'>
                                    <ul className='pl-3 list-disc w-56 translate-y-12'>
                                        <li>Completion of the white paper and pitch deck</li>
                                        <li>Develop Website</li>
                                        <li>UI/UX design</li>
                                        <li>Develop MDR contract and mint 10% for
                                            seed/Private sale /public sale
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <div data-aos='slide-down' id='node_2' className='flex items-end gap-x-0 absolute left-1/4 -ml-40 mt-32'>
                                <div className='translate-y-12 flex flex-col items-center justify-center'>
                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                    </svg>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#FF9518" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#FF9518" />
                                    </svg>

                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-yellow-100'>Q2</span></h4>
                                </div>

                                <div>
                                    <ul className='list-disc -translate-y-16'>
                                        <li>Funding by angel investors</li>
                                        <li>Develop MasterChef contract</li>
                                        <li>Audit smart contracts</li>
                                        <li>KYC team certificate</li>
                                        <li>App initial prototype</li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_3' className='flex items-end gap-x-0 absolute left-1/3 -ml-20 mt-32 translate-y-56'>

                                <div className='-translate-y-10 flex flex-col items-center justify-center'>
                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-yellow-100'>Q3</span></h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#FF9518" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#FF9518" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                    </svg>
                                </div>

                                <div className='-translate-y-6 -translate-x-6'>
                                    <ul className='ml-3 list-disc translate-y-3'>
                                        <li>Funding by VCs</li>
                                        <li>Registering company in UAE</li>
                                        <li>Expanding the team by hiring CMO BD and CTO </li>
                                        <li>Airdrop/marketing Campaigns</li>
                                        <li>App interactive prototype</li>
                                        <li>Ambassadors Activation</li>
                                    </ul>
                                </div>

                            </div>

                            <div data-aos='slide-down' id='node_4' className='flex items-end gap-x-0 absolute mr-36 right-1/4 mt-24'>

                                <div className='translate-y-12 flex flex-col items-center justify-center'>
                                    <svg width="4" height="200" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                    </svg>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#FF9518" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#FF9518" />
                                    </svg>

                                    <h4 className='text-2xl font-semibold'>2023 <span className='text-yellow-100'>Q4</span></h4>
                                </div>

                                <div>
                                    <ul className='-translate-y-12 list-disc w-64'>
                                        <li>Token Private sale</li>
                                        <li>Testnet development</li>
                                        <li>Community beta test</li>
                                        <li>Bug fixed</li>
                                        <li>Update the App with new features and optimized interface</li>
                                        <li>Listing MDR</li>
                                        <li>Integrate AI into the project</li>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_5' className='flex items-end gap-x-0 absolute right-0 mr-56 mt-52 translate-y-44'>

                                <div className='-translate-y-8 flex flex-col items-center justify-center'>

                                    <h4 className='text-2xl font-semibold'>2024 <span className='text-yellow-100'>Q1</span></h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#FF9518" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#FF9518" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                    </svg>

                                </div>

                                <div className='-translate-y-6 -translate-x-6'>
                                    <ul className='ml-3 list-disc translate-y-24'>
                                        <li>Token public sale </li>
                                        <li>Main net development </li>
                                        <li>DAO form,VIP services and lottery development</li>
                                        <li>Develop BDR smart contract</li>
                                        <li>Develop drivers and passengers NFT</li>
                                        <li>Develope MDR BDR and NFT reward pools</li>
                                        <li>Launch project on mainnet</li>
                                        <li>MrDriver bank development</li>
                                        <li>Bank security check</li>
                                        <li>Lunch bank</li>
                                    </ul>
                                </div>

                            </div>

                            <div data-aos='slide-down' id='node_6' className='flex items-end gap-x-0 absolute right-0 mr-28 mt-28'>

                                <div className='translate-y-14 flex flex-col items-center justify-center'>
                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                    </svg>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#FF9518" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#FF9518" />
                                    </svg>

                                    <h4 className='text-2xl font-semibold'>2024 <span className='text-yellow-100'>Q2</span></h4>
                                </div>

                                <div>
                                    <ul className='list-disc'>
                                        <ul className='-translate-y-12 list-disc'>
                                            <li>MrDriver bank development</li>
                                            <li>Bank security check</li>
                                            <li>Lunch bank</li>
                                            <li>Smart insurance development</li>
                                            <li>Cargo and vehicle development</li>
                                        </ul>
                                    </ul>
                                </div>

                            </div>

                            <div id='node_7' className='flex items-end gap-x-0 absolute right-0 mt-52 translate-y-44'>

                                <div className='-translate-y-8 flex flex-col items-center justify-center'>

                                    <h4 className='text-2xl font-semibold'>2024 <span className='text-yellow-100'>Q3</span></h4>

                                    <svg width="32" height="32" viewBox="0 0 38 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle opacity="0.2" cx="19.0471" cy="19.4725" r="18.5609" fill="#FF9518" />
                                        <circle cx="19.0471" cy="19.4726" r="11.1365" fill="#FF9518" />
                                    </svg>

                                    <svg width="4" height="170" viewBox="0 0 2 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.3" x1="0.797675" y1="-2.02072e-08" x2="0.797685" y2="210.803" stroke="#FFE000" strokeWidth="0.924575" />
                                    </svg>

                                </div>

                                <div className='-translate-y-12 -translate-x-6'>
                                    <ul className='list-disc'>
                                        <li>Develop/launch MrDriver<br></br> online shop</li>
                                        <li>Develop/launch MrDriver <br></br>DEX</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='lg:block hidden'>
                        <div className='mt-44 h-1.5 bg-black-20'>
                        </div>
                        <div className='-mt-1.5 h-1.5 bg-yellow-100 line'>
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
                            <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-argent text-white-100 pb-6'>
                                Meet Our Amazing Team
                            </h2>

                            <div data-aos='slide-up' className='lg:w-9/12 mt-6' >
                                <p className='lg:text-2xl text-xl font-bold'>
                                    In App MrDriver Non-custodial wallet
                                </p>
                                <p className='lg:text-xl font-medium'>
                                    Safe and secure way to pay and receive transportation fares
                                </p>
                            </div>

                            <div data-aos='slide-up' className='lg:w-9/12 mt-6' >
                                <p className='lg:text-2xl text-xl font-bold'>
                                    In App MrDriver Marketplace
                                </p>
                                <p className='lg:text-xl font-medium'>
                                    Offering opportunities for drivers and passengers to trade their NFTs and generate various benefits for users.
                                </p>
                            </div>

                            <div data-aos='slide-up' className='lg:w-9/12 mt-6' >
                                <p className='lg:text-2xl text-xl font-bold'>
                                    In App Staking DeFi Pools
                                </p>
                                <p className='lg:text-xl font-medium'>
                                    Earn more by staking BDR MDR and your NFTs Via MrDriver MasterChef smart contract
                                </p>
                            </div>
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
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-argent text-white-100'>
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

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 items-center justify-items-center lg:mt-20 mt-6'>

                        <div data-aos='slide-right' className='flex items-center justify-center gap-x-8 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-72 w-full h-24'>
                            <img src={partner_1} alt="Logo" className='' />
                            <p className='text-xl'>
                                IDO
                                PRESALE
                            </p>
                        </div>

                        <div data-aos='slide-right' className='flex items-center justify-center gap-x-8 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-72 w-full h-24'>
                            <img src={partner_2} alt="Logo" className='' />
                            <p className='text-xl'>
                                Pinksale
                            </p>
                        </div>

                        <div data-aos='slide-left' className='flex items-center justify-center gap-x-8 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-72 w-full h-24'>
                            <img src={partner_3} alt="Logo" className='' />
                            <p className='text-xl'>
                                Binance
                                Feed
                            </p>
                        </div>

                        <div data-aos='slide-left' className='flex items-center justify-center gap-x-8 bg-white-100 text-black-100 py-2 px-6 rounded-full lg:w-72 w-full h-24'>
                            <img src={partner_4} alt="Logo" className='' />
                            <p className='text-xl'>
                                SolidProof
                            </p>
                        </div>
                    </div>

                    <div className='lg:flex items-center justify-center gap-x-8 lg:space-y-0 space-y-6 mt-8'>

                        <div data-aos='slide-right' className='bg-white-100 py-2 px-6 rounded-full'>
                            <img src={partner_5} alt="Logo" className='flex mx-auto' />
                        </div>

                        <div data-aos='slide-left' className='bg-white-100 py-2 px-6 rounded-full'>
                            <img src={partner_6} alt="Logo" className='flex mx-auto' />
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
                        <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-argent text-yellow-100'>
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
                    <h2 data-aos='slide-right' className='md:text-5xl text-3xl font-argent text-white-100'>
                        Meet Our Amazing Team
                    </h2>
                    <p data-aos='fade-up' className='lg:w-1/2 mt-6 lg:text-lg font-medium'>
                        The MrDriver team is made up of the best experts and professionals with years of experience in the technology and digital currency industries. The team's size will gradually increase as the project moves forward, and we will add more specialists to the group in order to provide our users with the highest-quality products.
                    </p>

                    <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-6 items-baseline lg:mt-20 mt-6'>

                        <div data-aos='flip-right' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_1} alt="Logo" className='' />

                            <div className=' flex items-center gap-x-6'>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 translate-x-6 group-hover:translate-x-0'>
                                    Alex Razavi
                                </h5>

                                <a href='https://twitter.com/MrDriver_Alex'>
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

                            <div className=''>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 '>
                                    Joseph Nahid
                                </h5>
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

                            <div className=''>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 '>
                                    Swadin Biswas
                                </h5>
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

                            <div className=''>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 '>
                                    Mahfuz Moyeen
                                </h5>
                            </div>

                            <p className='font-montserat'>
                                Web Developer
                            </p>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                2 years of experience in the Frontend Developer , React.js, Node.js, React Native, MongoDB etc.
                            </p>
                        </div>

                        <div data-aos='flip-left' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_5} alt="Logo" className='' />

                            <div className=''>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 '>
                                    Lead App dev
                                </h5>
                            </div>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                7 years experience in app development
                            </p>
                        </div>

                        <div data-aos='flip-left' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_6} alt="Logo" className='' />

                            <div className=''>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 '>
                                    Lead Mern stack dev
                                </h5>
                            </div>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                3 years in web3.0 and 5 years in web2.0
                            </p>
                        </div>

                        <div data-aos='flip-left' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_7} alt="Logo" className='' />

                            <div className=''>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 '>
                                    Lead Blockchain dev
                                </h5>
                            </div>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                4 years experience
                            </p>
                        </div>

                        <div data-aos='flip-left' className='flex flex-col items-center text-center gap-y-6 group cursor-pointer'>
                            <img src={team_8} alt="Logo" className='' />

                            <div className=''>
                                <h5 className='lg:text-3xl text-xl font-semibold group-hover:text-yellow-100 '>
                                    Project manager
                                </h5>
                            </div>

                            <p className='font-montserat opacity-30 group-hover:opacity-100'>
                                3 years of Blockchain development experience and tech lead + 2 years of project management
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            <Footer />
        </div >
    )
}
