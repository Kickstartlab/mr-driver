import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from './Accordion';
import Accordion_1 from './Accordion_1';


const accordionData = [
    {
        numbers: '01',
        title: 'What is MDR',
        content: `MDR is the MrDriver project governance token and has an important role in the ecosystem.We developed it on Binance Smart Chain (BSC) BEP20, designed to empower the whole ecosystem.`
    },
    {
        numbers: '02',
        title: 'What is BitDriver Token?',
        content: `Bitdriver(BDR) is MrDriver App Utility token, and Drivers get rewarded with it on Solo Mode. Drivers can stake BDR tokens and receive MDR for spending it to pay NFT level-up Costs, Pay repairs and maintenance fees, buy more NFT or trade it with others. `
    },
    {
        numbers: '03',
        title: `What are Mr driver's NFTs and how its work for users?`,
        content: `MrDriver NFTs are limited editions and designed for project gameplay; no one can't be minted more because we want to keep it stay away from inflation And also help to maintain their value of them. These NFTs are utility playable and updatable, which means users can add value to them with their activity and lvl up it to earn more rewards. Users can play in free mode and don't need to pay for lvl up. They are able to do it with free BDR tokens earned for their activity and driving, stake BDR to receive MDR, and pay it to cost for owned NFTs lvl up`
    },
    {
        numbers: '04',
        title: 'NFT marketplace',
        content: `Drivers Able to Trade their NFTs in our marketplace with MDR BUSD and BNB`
    },
    {
        numbers: '05',
        title: 'What is the Mr driver NFTs staking, and how its work?',
        content: `When drivers reach level 10, this possibility is active for them to use the stake option and earn rewards in MDR or other valuable tokens via Our Defi reward Pools. Based on our Block Emission MDR smart contract sends 23/040 MDR per day (691/200MDR per month) to this reward pool. There is also the possibility of a multi-NFT stake For VIP users. Staked NFTs cannot earn from driving at the same time once your NFTs connect to the reward pool.`
    }
];

const accordionData_1 = [
    {
        title_1: '06. MDR Stake?',
        content_1: `Based on our Block Emission MDR smart contract sends 11/520 MDR per day (345/600 MDR per month) into the MDR staking pool To support and encourage holders
        MDR holders can stake MDR in periods of 3 months, 6 months, 9 months, and 1 year to receive these rewards
        Users can harvest their profit any time, but Early unstake has a 30% fee, And this amount is sent to the dynamic Burn mechanism`
    },
    {
        title_1: '07. BDR stake',
        content_1: `Solo mode Drivers earn Daily BDR for their activity and driving; they can stake BDR tokens and earn MDR for use to pay Lvl up costs and Maintenance fees. This will keep the Drivers' enthusiasm and motivation and help them increase their levels faster and enjoy using the platform. We want to ensure all the Drivers can earn passive income from the platform, And they can use it as a subsidy for their car repairs and other necessary things in the real world. How is the APR calculated? APR depends on the size the amount of BDR staked and the number of participants in the pool based on our Block Emission MDR smart contract sends 1/152 MDR per day (34/560 MDR every month) into this pool to support the Online drivers in Solo mode BDR pool don't have withdraw function and will be locked on the contract permanently.`
    },
    {
        title_1: '08. What is Bank?',
        content_1: `MDR holders can ask for loans from the platform or other users in a P2P system.`
    },
    {
        title_1: '09. What is smart insurance and how its work?',
        content_1: `In smart insurance, users pay their insurance premiums based on the distance traveled with digital currencies and are rewarded for their stops. With MrDriver NFTs, users are rewarded for their stops and pay Insurance premiums automatically based on their Vehicle movement only. This can be a new type of earning on crypto projects which we call stop to earn (S2E).`
    },
    {
        title_1: '10. What is drivex (DEX)?',
        content_1: `In order to provide our users with the necessary liquidity and complete DeFi activities, we are planning to launch our DEX platform.`
    }
];

function ImageSlider() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        cssEase: "linear",
        autoplaySpeed: 2000,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }]
    }

    const slider = React.useRef(null);

    return (
        <div className="">

            <Slider ref={slider} {...settings}>

                <div className='card-wrapper p-2'>
                    <div data-aos="zoom-in" data-aos-delay="350" className="accordion space-y-5 py-12">
                        {accordionData.map(({ numbers, title, content }) => (
                            <Accordion title={title} content={content} numbers={numbers} />
                        ))}
                    </div>
                </div>

                <div className='card-wrapper p-2'>
                    <div data-aos="zoom-in" data-aos-delay="350" className="accordion space-y-5 py-12">
                        {accordionData_1.map(({ title_1, content_1 }) => (
                            <Accordion_1 title_1={title_1} content_1={content_1} />
                        ))}
                    </div>
                </div>

            </Slider>

        </div>

    )


}

export default ImageSlider 