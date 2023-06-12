import React, { useState } from 'react';

const Accordion = ({ numbers, title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item border-b-2 border-white-50 py-4 cursor-pointer">
            <div className="accordion-title flex justify-between items-center gap-4"
             onClick={() => setIsActive(!isActive)}>

                <div className='font-russo font-semibold lg:text-xl pb-4 text-white-100 hover:text-yellow-100'>
                    {numbers}. {title} 
                </div>

                <div className='p-2 rounded-sm text-white-100 bg-blue-50 w-6 h-6 flex items-center justify-center'>
                    {isActive ? '-' : '+'}
                </div>

            </div>
            {isActive && <div className="accordion-content font-inter text-white-100 mt-4 duration-100">{content}</div>}
        </div>
    );
};

export default Accordion
