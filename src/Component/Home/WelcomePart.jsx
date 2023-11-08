import React from 'react';

import partone from "../../assets/partone.jpg"
import parttwo from "../../assets/parttwo.jpg"
import foller from "../../assets/folerb.png"

const WelcomePart = () => {
    return (
        <div>
          <div className=' flex justify-center items-center mb-20 '>
            <img src={foller} alt="" />
          </div>
        
        <div className=' items-center gap-10 justify-center w-[200px] lg:w-[1200px] text-center mx-auto grid grid-cols-1 lg:grid-cols-2 '>

            <div className=' flex  flex-col justify-center '>
                <h2 className=' w-20 mb-6  text-center lg:text-left text-xl lg:text-5xl font-bold font-serif  '>Welcome To Foodoko <br /> Restaurant</h2>
                <div><img className=' ' src={parttwo} alt="" /></div>
            </div>

            <div className=' flex justify-center flex-col items-center space-y-10 '>
                <p className='w-44  text-xl font-medium italic '>We are happy to help you for a business lunch, family dinner or a quick bite. We prepare our dishes in the traditional way and serve them fairly quickly on the table. Would you like to experience how the dishes in the Far East taste?</p>
                <p className='w-44 '>Then you are welcome every day from 11:00 am to 10:30 pm. Prefer to spoil the family at home? Call & order, it’s efficient and fast!</p>
                <div>
                    <img src={partone} alt="" />
                </div>
            </div>
        </div>

        </div>
    );
};

export default WelcomePart;